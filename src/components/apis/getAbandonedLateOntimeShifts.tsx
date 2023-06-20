import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React from "react";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

const MyResponsivePie = dynamic(() => import("../PieChart"), {
  ssr: false,
});
export const getAbandonedLateOntimeShifts = async () => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/abandoned-late-ontime-shifts-by-count",
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

const AbandonedLateOntimeShifts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["abandoned-late-ontime-shifts"],
    queryFn: () => getAbandonedLateOntimeShifts(),
  });
  if (isLoading)
    return <p className=" text-base font-bold text-[#69C920]">Loading...</p>;
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );
  const formatedData = [
    {
      id: "Late",
      label: "Late",
      value: data[0].count_abandoned,
      color: "#398D5B",
    },
    {
      id: "Abandoned",
      label: "Abandoned",
      value: data[0].count_abandoned,
      color: "#6EF96C",
    },
    {
      id: "Missed",
      label: "Missed",
      value: data[0].count_missed,
      color: "#1D542C",
    },
    {
      id: "Ontime",
      label: "Ontime",
      value: data[0].count_ontime,
      color: "#133418",
    },
  ];

  return <MyResponsivePie formatedData={formatedData} />;
};

export default AbandonedLateOntimeShifts;
