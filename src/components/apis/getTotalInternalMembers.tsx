import React from "react";
import { UpIcon } from "../Icons/icons";
import { useQuery } from "@tanstack/react-query";
import { CookieValueTypes, getCookie, hasCookie } from "cookies-next";

export const getTotalInternalMembers = async () => {
  let accessToken: CookieValueTypes = "";
  if (hasCookie("talentPOP_token")) {
    accessToken = getCookie("talentPOP_token");
  }
  const res = await fetch(
    "https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/total-internal-team-members",
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

const TotalInternalMembers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["total-internal-members"],
    queryFn: () => getTotalInternalMembers(),
  });
  if (isLoading)
    return <p className=" text-base font-bold text-[#69C920]">Loading...</p>;
  if (error) return <p className=" text-base text-[#69C920]">Error</p>;
  if (data.message === "Not authenticated")
    return (
      <p className=" text-base text-[#69C920]">Login Credentials Invalid</p>
    );
  // console.log(data)
  return (
    <>
      {data.data.map((data: any, index: number) => (
        <div key={index}>
          <span className=" text-base font-medium">
            {data["hop.name"] ? data["hop.name"] : "No Name"}
          </span>
          <div className="flex items-center gap-1">
            <span className=" text-lg font-bold">{data.count_user_id}</span>
            <UpIcon />
            <div
              style={{
                background:
                  "linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)",
                width:
                  data.count_user_id > 100 ? "100%" : `${data.count_user_id}%`,
              }}
              className={` h-3`}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TotalInternalMembers;
