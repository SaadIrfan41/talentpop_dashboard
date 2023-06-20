"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StatsNegativeIcon, StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

export const getTotalBilledHours = async () => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/total-billed-hours",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await res.json();
  if (res.status === 401) {
    return { message: "Not authenticated" };
  }
  return data;
};
const TotalBilledHours = () => {
  //   const data = await getTotalBilledHours()
  //   console.log(data)
  const { data, isLoading, error } = useQuery({
    queryKey: ["total-billed-hours-count"],
    queryFn: () => getTotalBilledHours(),
  });
  if (isLoading) return <p className=" text-base text-[#69C920]">Loading...</p>;
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );
  // console.log(data?.total_hours);
  // let billed_hours = 0
  // const timeString = data?.total_hours
  // const regex = /(\d+)hrs/ // Regex pattern to match the hours
  // const match = regex.exec(timeString)
  // if (match) {
  //   billed_hours = parseInt(match[1]) // Extract the hours as an integer
  // }
  return (
    <>
      {data?.total_hours.toFixed(2)}

      <StatsNegativeIcon />
    </>
  );
};

export default TotalBilledHours;
