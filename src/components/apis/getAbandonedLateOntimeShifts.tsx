import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React from "react";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";
import { useFiltersStore } from "@/store/useFiltersStore";

const MyResponsivePie = dynamic(() => import("../PieChart"), {
  ssr: false,
});
export const getAbandonedLateOntimeShifts = async (
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
      `http://18.237.25.116:8000/abandoned-late-ontime-shifts-by-count?client=${
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

const AbandonedLateOntimeShifts = () => {
  const {
    filterClientName,
    filterAgentsName,
    filterCSMsName,
    filterOMsName,
    filterTeamLeadsName,
  } = useFiltersStore();

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "abandoned-late-ontime-shifts",
      filterClientName,
      filterAgentsName,
      filterCSMsName,
      filterOMsName,
      filterTeamLeadsName,
    ],
    queryFn: () =>
      getAbandonedLateOntimeShifts(
        filterClientName,
        filterAgentsName,
        filterTeamLeadsName,
        filterOMsName,

        filterCSMsName
      ),
  });
  if (isLoading)
    return <p className=" text-base font-bold text-[#69C920]">Loading...</p>;
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message) {
    if (data.message === "Not authenticated")
      return (
        <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
      );
    return <p className=" text-base text-[#69C920]">{data.message}</p>;
  }
  const formatedData = [
    {
      id: "Late",
      label: "Late",
      value: data[0].count_late,
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
