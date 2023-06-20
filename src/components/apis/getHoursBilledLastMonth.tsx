"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

import { MonthlyBilledClientsChart } from "../MonthlyBilledClientsChart";

export const getHoursBilledLastMonth = async () => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/hour-billed-per-client-last-month",
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
const HoursBilledLastMonth = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hours-billed-last-month"],
    queryFn: () => getHoursBilledLastMonth(),
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

  const clientName: string[] = data.data.map((obj: any) => obj["hop.name"]);
  const billableHrs: string[] = data.data.map((obj: any) =>
    obj["summed_hours"].toFixed(2)
  );
  //   console.log(clientName, billableHrs)
  return (
    // <div className=' flex-1 mx-auto max-h-[480px] w-full overflow-x-scroll pt-3 '>
    //   {/* <MyResponsiveBar data={BarsData} /> */}
    //   <BarComponent clientName={clientName} billableHrs={billableHrs} />
    // </div>
    <div className="flex divide-x ">
      <div className="flex max-h-[480px] max-w-[350px] flex-col gap-6 overflow-y-auto pt-4 text-base font-medium">
        {data.data.map((data: any, index: number) => (
          //   <div key={index} className='flex gap-16 pl-4 pr-9  '>
          //     <span>{clientName[index]}</span>
          //     <span className=' ml-auto'>{billableHrs[index]}</span>
          //   </div>
          <div key={index} className="flex gap-16 pl-4 pr-9  ">
            <span>{data["hop.name"]}</span>
            <span className=" ml-auto">{data["summed_hours"].toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className=" mx-auto max-h-[480px] w-full flex-1 overflow-x-scroll ">
        {/* <MyResponsiveBar data={BarsData} /> */}
        <MonthlyBilledClientsChart
          clientName={clientName}
          billableHrs={billableHrs}
        />
      </div>
    </div>
  );
};

export default HoursBilledLastMonth;
