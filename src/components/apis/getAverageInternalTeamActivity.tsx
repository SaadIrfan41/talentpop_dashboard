"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StatsNegativeIcon, StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";

export const getAverageInternalTeamActivity = async (
  filterClientName: string[]
) => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  try {
    const res = await fetch(
      `http://18.237.25.116:8000/average-internal-team-activity?client=${
        filterClientName[0] || ""
      }`,
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
  } catch (error: any) {
    console.log(error.message);
    return { message: "Internal Server Error" };
  }
};
const AverageInternalTeamActivity = () => {
  const { filterClientName } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["average-internal-team-activity", filterClientName],
    queryFn: () => getAverageInternalTeamActivity(filterClientName),
  });
  if (isLoading) return <p className=" text-base text-[#69C920]">Loading...</p>;
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message) {
    if (data.message === "Not authenticated")
      return (
        <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
      );
    return <p className=" text-base text-[#69C920]">{data.message}</p>;
  }
  return (
    <>
      {data[0]?.average_of_average_activity?.toFixed(2)}

      <StatsPositiveIcon />
    </>
  );
};

export default AverageInternalTeamActivity;
