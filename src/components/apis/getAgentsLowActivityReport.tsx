"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { LowActivityChart } from "../HarizontalBarChart2";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";

const getAgentLowActivityReport = async (filterClientName: string[]) => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  try {
    const res = await fetch(
      `http://18.237.25.116:8000/low-activity-rate-report-agents?client=${
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
const AgentsLowActivityReport = () => {
  const { filterClientName } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["agents-low-activity-report", filterClientName],
    queryFn: () => getAgentLowActivityReport(filterClientName),
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
    obj["avg_Activity"].toFixed(2)
  );
  //   console.log(data)
  return <LowActivityChart agentsName={agentsName} activityAvg={activityAvg} />;
};

export default AgentsLowActivityReport;
