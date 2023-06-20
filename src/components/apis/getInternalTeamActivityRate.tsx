"use client";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React, { Fragment } from "react";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

import { InternalTeamActivityRateChart } from "../InternalTeamActivityRateChart";

const getInternalTeamActivityRate = async ({ pageParams }: any) => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    // 'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/internal-team-activity-rate'
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/internal-team-activity-rate?client=talentpop",
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
    // {
    //   params: { _page: pageParams },
    // }
  );

  const data = await res.json();

  if (res.status === 401) {
    return { message: "Not authenticated" };
  }
  return data;
};
const InternalTeamActivityRate = () => {
  let pageParams: any = 1;
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["internal-team-activity-rate"],
    queryFn: () => getInternalTeamActivityRate((pageParams = { pageParams })),
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  if (isLoading)
    return (
      <p className=" w-full text-center text-lg font-bold text-[#69C920]">
        Loading...
      </p>
    );
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  console.log(data);
  if (data?.pages[0].message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );

  return (
    <div className=" mx-auto flex flex-wrap gap-10 pl-8 pt-8">
      {data?.pages.map((group, i: number) => (
        <Fragment key={i}>
          {group.map((item: any) => (
            <div key={item.name}>
              <p className=" font-medium text-[#163143]">{item.name}</p>
              <InternalTeamActivityRateChart
                monthlyAvgActivities={item.monthly_avg_activities}
              />
            </div>
          ))}
        </Fragment>
      ))}
      {/* {isFetchingNextPage ? (
        <div className=' text-red-500'>Loading more...</div>
      ) : hasNextPage ? (
        <button className=' text-red-500 ' onClick={() => fetchNextPage()}>
          Load More
        </button>
      ) : null} */}
    </div>
  );
};

export default InternalTeamActivityRate;
