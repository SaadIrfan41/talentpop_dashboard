"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import { InternalTeamActivityChart } from "../InternalTeamActivityChart";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";

const getInterTeamReportAVG = async (filterClientName: string[]) => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  try {
    const res = await fetch(
      `http://18.237.25.116:8000/rolling-average-internal-team-activity-report?client=${
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
const InternalTeamReportAVG = () => {
  const { filterClientName } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["internal-team-report-avg", filterClientName],
    queryFn: () => getInterTeamReportAVG(filterClientName),
  });

  if (isLoading)
    return (
      <p className=" w-full text-center text-lg font-bold text-[#69C920]">
        Loading...
      </p>
    );
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message) {
    if (data.message === "Not authenticated")
      return (
        <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
      );
    return <p className=" text-base text-[#69C920]">{data.message}</p>;
  }

  const agentsName: string[] = data.map((obj: any) => obj["hau.name"]);
  const activityAvg: number[] = data.map((obj: any) =>
    obj["avg_Activity"]?.toFixed(2)
  );
  console.log("Agents NAme", agentsName);
  console.log("Agents Activity", activityAvg);
  return (
    <InternalTeamActivityChart
      agentsName={agentsName}
      activityAvg={activityAvg}
    />
  );
};

export default InternalTeamReportAVG;
