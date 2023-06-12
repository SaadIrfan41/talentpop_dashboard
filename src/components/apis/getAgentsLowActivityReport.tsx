'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { LowActivityChart } from '../HarizontalBarChart2'

const getAgentLowActivityReport = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/low-activity-rate-report-agents'
  )
  const data = await res.json()
  return data
}
const AgentsLowActivityReport = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['agents-low-activity-report'],
    queryFn: () => getAgentLowActivityReport(),
  })
  if (isLoading)
    return (
      <p className=' text-lg text-[#69C920] text-center w-full font-bold'>
        Loading...
      </p>
    )
  const agentsName: string[] = data.map((obj: any) => obj['hau.name'])
  const activityAvg: number[] = data.map((obj: any) =>
    obj['avg_Activity'].toFixed(2)
  )
  //   console.log(data)
  return <LowActivityChart agentsName={agentsName} activityAvg={activityAvg} />
}

export default AgentsLowActivityReport
