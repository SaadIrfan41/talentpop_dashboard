"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDownIcon } from "lucide-react";
import { HighActivityChart } from "../HorizontalBarChart";
import { ExpandIcon, SettingIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

const getAgentHighActivityReport = async () => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/high-activity-rate-report-agents",
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
const AgentsHighActivityReport = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["agents-high-activity-report"],
    queryFn: () => getAgentHighActivityReport(),
  });
  if (isLoading)
    return (
      <p className=" w-full text-center text-lg font-bold text-[#69C920]">
        Loading...
      </p>
    );
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );

  const agentsName: string[] = data.map((obj: any) => obj["hau.name"]);
  const activityAvg: number[] = data.map((obj: any) =>
    obj["avg_Activity"].toFixed(2)
  );
  //   console.log(data)
  return (
    <HighActivityChart agentsName={agentsName} activityAvg={activityAvg} />
  );
};

export default AgentsHighActivityReport;
