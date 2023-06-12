import React from 'react'
import {
  ExpandIcon,
  SettingIcon,
  StatsNegativeIcon,
  StatsPositiveIcon,
  UpIcon,
} from './Icons/icons'
import { PieChartData } from './data'
// import MyResponsivePie from './PieChart'

import dynamic from 'next/dynamic'

import getQueryClient from '@/utils/getQueryClient'
import { dehydrate } from '@tanstack/query-core'
import { useQuery } from '@tanstack/react-query'
import TotalActiveAgents, {
  getTotalActiveAgents,
} from './apis/getTotalActiveAgents'
import Hydrate from '@/utils/hydrate.client'
import TotalInternalTeamMembers, {
  getTotalInternalTeamMembers,
} from './apis/getTotalInternalTeamsMember'
import ClientsWithAgents from './apis/getClientsWithAgents'
import TotalInternalMembers from './apis/getTotalInternalMembers'
import HoursBilledLastMonth from './apis/getHoursBilledLastMonth'
import AgentsHighActivityReport from './apis/getAgentsHighActivityReport'
import { ChevronDownIcon } from 'lucide-react'
import { HighActivityChart } from './HorizontalBarChart'
import AgentsLowActivityReport from './apis/getAgentsLowActivityReport'
import { InternalTeamActivityChart } from './InternalTeamActivityChart'
import InternalTeamReportAVG from './apis/getInternalTeamReport'
import InternalTeamActivityRate from './apis/getInternalTeamActivityRate'
import AbandonedLateOntimeShifts from './apis/getAbandonedLateOntimeShifts'
import TotalBilledHours from './apis/getTotalBilledHours'
import AverageAgentActivity from './apis/getAverageAgentActivity'
import AverageInternalTeamActivity from './apis/getAverageInternalTeamActivity'

const MyResponsivePie = dynamic(() => import('./PieChart'), {
  ssr: false,
})

// const getTotalActiveAgents = async () => {
//   const res = await fetch(
//     'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/active-agents'
//   )
//   const agents_count = await res.json()
//   return agents_count
// }
const AgentsWorkforceReport = async () => {
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
  // const dehydratedState = dehydrate(queryClient)
  // console.log(dehydratedState)
  return (
    <section className=' pt-11 border px-7 pb-20  rounded-tr-2xl rounded-b-2xl'>
      <div className=' flex  gap-7  text-[#163143] justify-around'>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Total Active Agents
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Active agents</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              {/* <Hydrate state={dehydratedState}> */}
              <TotalActiveAgents />
              {/* </Hydrate> */}
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Total Internal Members
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Internal Members</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              <TotalInternalTeamMembers />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Total Billed Hours
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Total Bill</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              <TotalBilledHours />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Avg. Agent Activity
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Avg. Rate</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              <AverageAgentActivity />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Avg. Internal Team Activity
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Avg. Rate</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              <AverageInternalTeamActivity />
            </span>
          </div>
        </div>
      </div>
      <div className=' mt-7 text-[#163143]  flex gap-5  '>
        {/* CLIENT NAME # OF AGENTS */}
        <div className='border rounded-2xl w-[350px]   overflow-y-auto'>
          <div className='flex items-center py-4 px-3'>
            <span className=' text-base font-extrabold '>
              Client Name and # of Agents
            </span>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='max-h-[439px] overflow-y-auto pt-4 px-4 flex flex-col gap-6'>
            <ClientsWithAgents />
          </div>
        </div>
        {/* TOTAL INTERNAL MEMBEERS */}
        <div className='border rounded-2xl max-w-[350px]   overflow-y-auto'>
          <div className='flex items-center py-4 px-3'>
            <span className=' text-base font-extrabold '>
              Total Internal Members
            </span>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='max-h-[439px] overflow-y-auto pt-4 px-4 flex flex-col gap-6'>
            <TotalInternalMembers />
          </div>
        </div>
        {/* Abandoned Late Missed Ontime shifts by Percentage and Count */}
        <div className='border rounded-2xl  flex-1  px-3 overflow-y-auto'>
          <div className='flex items-center py-4 '>
            <span className=' text-base font-extrabold '>
              Abandoned Late Missed Ontime shifts by Percentage and Counts
            </span>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='h-[439px] overflow-y-auto pt-4 px-4'>
            <AbandonedLateOntimeShifts />
            {/* <MyResponsivePie data={PieChartData} /> */}
          </div>
        </div>
      </div>
      {/* HOURS BILLED Monthly PER CLIENT */}
      <div className=' text-[#163143]  border rounded-2xl mt-10  min-h-[480px]  '>
        <div className='flex items-center py-4 px-4 '>
          <h3 className=' font-extrabold text-base'>Hours Billed Per Client</h3>
          <div className='flex ml-auto gap-3 items-center'>
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=' h-[2px] w-full bg-[#EFEFEF]' />
        <HoursBilledLastMonth />
      </div>
      {/* Rolling Avg. Internal Team Activity Report  */}
      <div className=' text-[#163143]  border rounded-2xl mt-10 min-h-[480px]   '>
        <div className='flex items-center py-4 px-4 '>
          <h3 className=' font-extrabold text-base'>
            Rolling Avg. Internal Team Activity Report (Select Due Filter)
          </h3>
          <div className='flex ml-auto gap-3 items-center'>
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=' h-[2px] w-full bg-[#EFEFEF]' />

        <div className=' overflow-x-auto  '>
          <InternalTeamReportAVG />
        </div>
      </div>
      {/* AGENTS ACTIVITY REPORT */}
      <div className='pt-11  px-7 grid grid-cols-2 gap-10'>
        {/* Agents High Activity Report */}
        <div className=' text-[#163143]  border rounded-2xl mt-10  max-h-[500px] overflow-y-auto '>
          <div className='flex items-center py-4 px-4 '>
            <h3 className=' font-extrabold text-base'>
              High Activity Rate Report (Agents)
            </h3>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='flex   gap-4 py-4'>
            <div className=' flex items-center pl-3 gap-4'>
              <div
                style={{
                  background:
                    'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                }}
                className='w-[21px] h-[8px] '
              />
              <span className=' font-medium'>High Activity Rate</span>
            </div>
            <div className='flex items-center ml-auto gap-4 pr-4 '>
              <button className='flex items-center  text-[#163143] bg-[#F8F9FA] rounded-full py-[10px] px-[15px]'>
                {' '}
                Download
              </button>
              <button className='flex items-center  text-[#163143] bg-[#F8F9FA] rounded-full  py-[10px] px-[15px]'>
                {' '}
                Sort <ChevronDownIcon className='ml-2' />
              </button>
            </div>
          </div>
          <div className='  overflow-y-auto w-full '>
            <AgentsHighActivityReport />
          </div>
        </div>
        {/* Agents Low Activity Report */}
        <div className=' text-[#163143]  border rounded-2xl mt-10  max-h-[500px] overflow-y-auto '>
          <div className='flex items-center py-4 px-4 '>
            <h3 className=' font-extrabold text-base'>
              Low Activity Rate Report (Agents)
            </h3>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='flex   gap-4 py-4'>
            <div className=' flex items-center pl-3 gap-4'>
              <div
                style={{
                  background:
                    'linear-gradient(270.46deg, #163143 -6.83%, #698CA4 143.02%)',
                }}
                className='w-[21px] h-[8px] '
              />
              <span className=' font-medium'>Low Activity Rate</span>
            </div>
            <div className='flex items-center ml-auto gap-4 pr-4 '>
              <button className='flex items-center  text-[#163143] bg-[#F8F9FA] rounded-full py-[10px] px-[15px]'>
                {' '}
                Download
              </button>
              <button className='flex items-center  text-[#163143] bg-[#F8F9FA] rounded-full  py-[10px] px-[15px]'>
                {' '}
                Sort <ChevronDownIcon className='ml-2' />
              </button>
            </div>
          </div>
          <div className='  overflow-y-auto w-full '>
            <AgentsLowActivityReport />
          </div>
        </div>
        {/*Internal Team Activity Rate  */}
      </div>
      <div className=' text-[#163143]  border rounded-2xl mt-10 min-h-[480px]   '>
        <div className='flex items-center py-4 px-4 '>
          <h3 className=' font-extrabold text-base'>
            Internal Team Activity Rate
          </h3>
          <div className='flex ml-auto gap-3 items-center'>
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=' h-[2px] w-full bg-[#EFEFEF]' />

        <div className=' overflow-auto max-h-[550px]  '>
          <InternalTeamActivityRate />
        </div>
      </div>
    </section>
  )
}

export default AgentsWorkforceReport
