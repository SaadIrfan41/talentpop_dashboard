"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { StatsNegativeIcon, StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";

export const getAverageAgentActivity = async (
  filterClientName: string[],
  filterAgentsName: string[],
  filterTeamLeadsName: string[],
  filterOMsName: string[],
  filterCSMsName: string[]
) => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  try {
    const res = await fetch(
      `http://18.237.25.116:8000/average-agent-activity?client=${
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
const AverageAgentActivity = () => {
  const {
    filterClientName,
    filterAgentsName,
    filterCSMsName,
    filterOMsName,
    filterTeamLeadsName,
  } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "average-agent-activity",
      filterClientName,
      filterAgentsName,
      filterTeamLeadsName,
      filterOMsName,

      filterCSMsName,
    ],
    queryFn: () =>
      getAverageAgentActivity(
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

  return (
    <>
      {data[0]?.average_activity === null
        ? 0
        : data[0]?.average_activity?.toFixed(2)}

      <StatsPositiveIcon />
    </>
  );
};

export default AverageAgentActivity;
