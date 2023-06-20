"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsPositiveIcon } from "../Icons/icons";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
export const getTotalActiveAgents = async () => {
  try {
    let accessToken: CookieValueTypes = "";
    if (hasCookie("talentPOP_token")) {
      accessToken = getCookie("talentPOP_token");
    }
    // const accessToken = getCookie("talentPOP_token");
    const res = await fetch(
      "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/active-agents",
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
    return error.message;
  }
};
const TotalActiveAgents = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["total-active-agents"],
    queryFn: () => getTotalActiveAgents(),
  });

  if (isLoading) return <p className=" text-base text-[#69C920]">Loading...</p>;

  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );

  // console.log(data);
  // console.log(data.data[0]?.count_user_id);
  return (
    <>
      {data.data[0]?.count_user_id}
      <StatsPositiveIcon />
    </>
  );
};

export default TotalActiveAgents;
