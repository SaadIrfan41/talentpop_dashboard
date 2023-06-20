"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsNegativeIcon, StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

export const getTotalInternalTeamMembers = async () => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/total-internal-members",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const team_member__count = await res.json();
  if (res.status === 401) {
    return { message: "Not authenticated" };
  }
  return team_member__count;
};
const TotalInternalTeamMembers = () => {
  //   const data = await getTotalInternalTeamMembers()
  //   console.log(data)
  const { data, isLoading, error } = useQuery({
    queryKey: ["total-internal-team-members"],
    queryFn: () => getTotalInternalTeamMembers(),
  });
  if (isLoading) return <p className=" text-base text-[#69C920]">Loading...</p>;
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );
  // console.log(data.data[0]?.sum_count_hubstaff_all_users)
  return (
    <>
      {data.data[0]?.sum_count_hubstaff_all_users}

      <StatsNegativeIcon />
    </>
  );
};

export default TotalInternalTeamMembers;
