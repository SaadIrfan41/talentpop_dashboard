"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";
export const getTotalActiveAgents = async (
  filterClientName: string[],
  filterAgentsName: string[],
  filterTeamLeadsName: string[],
  filterOMsName: string[],
  filterCSMsName: string[]
) => {
  try {
    let accessToken: CookieValueTypes = "";
    if (hasCookie("talentPOP_token")) {
      accessToken = getCookie("talentPOP_token");
    }
    // const accessToken = getCookie("talentPOP_token");
    const res = await fetch(
      `http://18.237.25.116:8000/active-agents?client=${
        filterClientName[0] || ""
      }&agentname=${filterAgentsName[0] || ""}&teamlead=${
        filterTeamLeadsName[0] || ""
      }&operationmanager=${filterOMsName[0] || ""}&customersuccessmanager=${
        filterCSMsName[0] || ""
      }`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const agents_count = await res.json();
    console.log(agents_count);
    if (res.status === 401) {
      return { message: "Not authenticated" };
    }
    return agents_count;
  } catch (error: any) {
    console.log(error.message);
    return { message: "Internal Server Error" };
  }
};
const TotalActiveAgents = () => {
  const {
    filterClientName,
    filterAgentsName,
    filterCSMsName,
    filterOMsName,
    filterTeamLeadsName,
  } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "total-active-agents",
      filterClientName,
      filterAgentsName,
      filterTeamLeadsName,
      filterOMsName,

      filterCSMsName,
    ],
    queryFn: () =>
      getTotalActiveAgents(
        filterClientName,
        filterAgentsName,
        filterTeamLeadsName,
        filterOMsName,

        filterCSMsName
      ),
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

  // console.log(data);
  // console.log(data.data[0]?.count_user_id);
  return (
    <>
      {data?.data[0]?.count_user_id || 0}
      <StatsPositiveIcon />
    </>
  );
};

export default TotalActiveAgents;
