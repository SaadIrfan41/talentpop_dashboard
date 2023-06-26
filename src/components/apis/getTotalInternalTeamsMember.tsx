"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsNegativeIcon, StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";

export const getTotalInternalTeamMembers = async (
  filterClientName: string[]
) => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  try {
    const res = await fetch(
      `http://18.237.25.116:8000/total-internal-members?client=${
        filterClientName[0] || ""
      }`,
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
  } catch (error: any) {
    console.log(error.message);
    return { message: "Internal Server Error" };
  }
};
const TotalInternalTeamMembers = () => {
  const { filterClientName } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["total-internal-team-members", filterClientName],
    queryFn: () => getTotalInternalTeamMembers(filterClientName),
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
      {data.data[0]?.sum_count_hubstaff_all_users}

      <StatsNegativeIcon />
    </>
  );
};

export default TotalInternalTeamMembers;
