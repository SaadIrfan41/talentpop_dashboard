import React from "react";
import { ExpandIcon, SettingIcon } from "./Icons/icons";

import getQueryClient from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/query-core";
import { useQuery } from "@tanstack/react-query";
import TotalActiveAgents, {
  getTotalActiveAgents,
} from "./apis/getTotalActiveAgents";
import Hydrate from "@/utils/hydrate.client";
import TotalInternalTeamMembers from "./apis/getTotalInternalTeamsMember";
import ClientsWithAgents from "./apis/getClientsWithAgents";
import TotalInternalMembers from "./apis/getTotalInternalMembers";
import HoursBilledLastMonth from "./apis/getHoursBilledLastMonth";
import AgentsHighActivityReport from "./apis/getAgentsHighActivityReport";
import { ChevronDownIcon } from "lucide-react";
import AgentsLowActivityReport from "./apis/getAgentsLowActivityReport";
import InternalTeamReportAVG from "./apis/getInternalTeamReport";
import InternalTeamActivityRate from "./apis/getInternalTeamActivityRate";
import AbandonedLateOntimeShifts from "./apis/getAbandonedLateOntimeShifts";
import TotalBilledHours from "./apis/getTotalBilledHours";
import AverageAgentActivity from "./apis/getAverageAgentActivity";
import AverageInternalTeamActivity from "./apis/getAverageInternalTeamActivity";

// const getTotalActiveAgents = async () => {
//   const res = await fetch(
//     'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/active-agents'
//   )
//   const agents_count = await res.json()
//   return agents_count
// }
const AgentsWorkforceReport = async () => {
  // const queryClient = getQueryClient()
  // await queryClient.prefetchQuery(['total-active-agents'], getTotalActiveAgents)
  // const dehydratedState = dehydrate(queryClient)

  // const { data, isLoading } = useQuery({
  //   queryKey: ['total-active-agents'],
  //   queryFn: () => getTotalActiveAgents(),
  // })
  // if (isLoading) return <h1>Loading</h1>
  // console.log(data)
  // const queryClient = getQueryClient()
  // await queryClient.prefetchQuery(
  //   ['total-active-agents'],
  //   getTotalActiveAgents,
  // )
  // await queryClient.prefetchQuery(
  //   ['total-internal-team-members'],

  //   getTotalInternalTeamMembers,
  // )

  // console.log(dehydratedState)
  return (
    <section className=" rounded-b-2xl rounded-tr-2xl border px-7  pb-20 pt-11">
      <div className=" flex  justify-around  gap-7 text-[#163143]">
        <div className=" flex min-w-[241px] flex-col rounded-2xl border px-[50px] pt-4 text-center">
          <span className=" mb-4 text-base font-extrabold capitalize ">
            Total Active Agents
          </span>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className=" flex flex-col py-5 ">
            <span className=" text-lg font-medium">Active agents</span>
            <span className="flex items-center justify-center gap-3 text-[40px] font-extrabold">
              {/* <Hydrate state={dehydratedState}> */}
              <TotalActiveAgents />
              {/* </Hydrate> */}
            </span>
          </div>
        </div>
        <div className=" flex min-w-[241px] flex-col rounded-2xl border px-[50px] pt-4 text-center">
          <span className=" mb-4 text-base font-extrabold capitalize ">
            Total Internal Members
          </span>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className=" flex flex-col py-5 ">
            <span className=" text-lg font-medium">Internal Members</span>
            <span className="flex items-center justify-center gap-3 text-[40px] font-extrabold">
              <TotalInternalTeamMembers />
            </span>
          </div>
        </div>
        <div className=" flex min-w-[241px] flex-col rounded-2xl border px-[50px] pt-4 text-center">
          <span className=" mb-4 text-base font-extrabold capitalize ">
            Total Billed Hours
          </span>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className=" flex flex-col py-5 ">
            <span className=" text-lg font-medium">Total Bill</span>
            <span className="flex items-center justify-center gap-3 text-[40px] font-extrabold">
              <TotalBilledHours />
            </span>
          </div>
        </div>
        <div className=" flex min-w-[241px] flex-col rounded-2xl border px-[50px] pt-4 text-center">
          <span className=" mb-4 text-base font-extrabold capitalize ">
            Avg. Agent Activity
          </span>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className=" flex flex-col py-5 ">
            <span className=" text-lg font-medium">Avg. Rate</span>
            <span className="flex items-center justify-center gap-3 text-[40px] font-extrabold">
              <AverageAgentActivity />
            </span>
          </div>
        </div>
        <div className=" flex min-w-[241px] flex-col rounded-2xl border px-[50px] pt-4 text-center">
          <span className=" mb-4 text-base font-extrabold capitalize ">
            Avg. Internal Team Activity
          </span>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className=" flex flex-col py-5 ">
            <span className=" text-lg font-medium">Avg. Rate</span>
            <span className="flex items-center justify-center gap-3 text-[40px] font-extrabold">
              <AverageInternalTeamActivity />
            </span>
          </div>
        </div>
      </div>
      <div className=" mt-7 flex  gap-5 text-[#163143]  ">
        {/* CLIENT NAME # OF AGENTS */}
        <div className="w-[350px] overflow-y-auto rounded-2xl   border">
          <div className="flex items-center px-3 py-4">
            <span className=" text-base font-extrabold ">
              Client Name and # of Agents
            </span>
            <div className="ml-auto flex items-center gap-3">
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className="flex max-h-[439px] flex-col gap-6 overflow-y-auto px-4 pt-4">
            <ClientsWithAgents />
          </div>
        </div>
        {/* TOTAL INTERNAL MEMBEERS */}
        <div className="max-w-[350px] overflow-y-auto rounded-2xl   border">
          <div className="flex items-center px-3 py-4">
            <span className=" text-base font-extrabold ">
              Total Internal Members
            </span>
            <div className="ml-auto flex items-center gap-3">
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className="flex max-h-[439px] flex-col gap-6 overflow-y-auto px-4 pt-4">
            <TotalInternalMembers />
          </div>
        </div>
        {/* Abandoned Late Missed Ontime shifts by Percentage and Count */}
        <div className="flex-1 overflow-y-auto  rounded-2xl  border px-3">
          <div className="flex items-center py-4 ">
            <span className=" text-base font-extrabold ">
              Abandoned Late Missed Ontime shifts by Percentage and Counts
            </span>
            <div className="ml-auto flex items-center gap-3">
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className="h-[439px] overflow-y-auto px-4 pt-4">
            <AbandonedLateOntimeShifts />
          </div>
        </div>
      </div>
      {/* HOURS BILLED Monthly PER CLIENT */}
      <div className=" mt-10  min-h-[480px] rounded-2xl border  text-[#163143]  ">
        <div className="flex items-center px-4 py-4 ">
          <h3 className=" text-base font-extrabold">Hours Billed Per Client</h3>
          <div className="ml-auto flex items-center gap-3">
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=" h-[2px] w-full bg-[#EFEFEF]" />
        <HoursBilledLastMonth />
      </div>
      {/* Rolling Avg. Internal Team Activity Report  */}
      <div className=" mt-10  min-h-[480px] rounded-2xl border text-[#163143]   ">
        <div className="flex items-center px-4 py-4 ">
          <h3 className=" text-base font-extrabold">
            Rolling Avg. Internal Team Activity Report (Select Due Filter)
          </h3>
          <div className="ml-auto flex items-center gap-3">
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=" h-[2px] w-full bg-[#EFEFEF]" />

        <div className=" overflow-x-auto  ">
          <InternalTeamReportAVG />
        </div>
      </div>
      {/* AGENTS ACTIVITY REPORT */}
      <div className="grid  grid-cols-2 gap-10 px-7 pt-11">
        {/* Agents High Activity Report */}
        <div className=" mt-10  max-h-[500px] overflow-y-auto rounded-2xl  border text-[#163143] ">
          <div className="flex items-center px-4 py-4 ">
            <h3 className=" text-base font-extrabold">
              High Activity Rate Report (Agents)
            </h3>
            <div className="ml-auto flex items-center gap-3">
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className="flex   gap-4 py-4">
            <div className=" flex items-center gap-4 pl-3">
              <div
                style={{
                  background:
                    "linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)",
                }}
                className="h-[8px] w-[21px] "
              />
              <span className=" font-medium">High Activity Rate</span>
            </div>
            <div className="ml-auto flex items-center gap-4 pr-4 ">
              <button className="flex items-center  rounded-full bg-[#F8F9FA] px-[15px] py-[10px] text-[#163143]">
                {" "}
                Download
              </button>
              <button className="flex items-center  rounded-full bg-[#F8F9FA] px-[15px]  py-[10px] text-[#163143]">
                {" "}
                Sort <ChevronDownIcon className="ml-2" />
              </button>
            </div>
          </div>
          <div className="  w-full overflow-y-auto ">
            <AgentsHighActivityReport />
          </div>
        </div>
        {/* Agents Low Activity Report */}
        <div className=" mt-10  max-h-[500px] overflow-y-auto rounded-2xl  border text-[#163143] ">
          <div className="flex items-center px-4 py-4 ">
            <h3 className=" text-base font-extrabold">
              Low Activity Rate Report (Agents)
            </h3>
            <div className="ml-auto flex items-center gap-3">
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=" h-[2px] w-full bg-[#EFEFEF]" />
          <div className="flex   gap-4 py-4">
            <div className=" flex items-center gap-4 pl-3">
              <div
                style={{
                  background:
                    "linear-gradient(270.46deg, #163143 -6.83%, #698CA4 143.02%)",
                }}
                className="h-[8px] w-[21px] "
              />
              <span className=" font-medium">Low Activity Rate</span>
            </div>
            <div className="ml-auto flex items-center gap-4 pr-4 ">
              <button className="flex items-center  rounded-full bg-[#F8F9FA] px-[15px] py-[10px] text-[#163143]">
                {" "}
                Download
              </button>
              <button className="flex items-center  rounded-full bg-[#F8F9FA] px-[15px]  py-[10px] text-[#163143]">
                {" "}
                Sort <ChevronDownIcon className="ml-2" />
              </button>
            </div>
          </div>
          <div className="  w-full overflow-y-auto ">
            <AgentsLowActivityReport />
          </div>
        </div>
      </div>
      {/*Internal Team Activity Rate  */}
      <div className=" mt-10  min-h-[480px] rounded-2xl border text-[#163143]   ">
        <div className="flex items-center px-4 py-4 ">
          <h3 className=" text-base font-extrabold">
            Internal Team Activity Rate
          </h3>
          <div className="ml-auto flex items-center gap-3">
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=" h-[2px] w-full bg-[#EFEFEF]" />

        <div className=" max-h-[550px] overflow-auto  ">
          <InternalTeamActivityRate />
        </div>
      </div>
    </section>
  );
};

export default AgentsWorkforceReport;
