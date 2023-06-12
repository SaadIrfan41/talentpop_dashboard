'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { InternalTeamActivityChart } from '../InternalTeamActivityChart'

const getInterTeamReportAVG = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/rolling-average-internal-team-activity-report'
  )
  const data = await res.json()
  return data
}
const InternalTeamReportAVG = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['internal-team-report-avg'],
    queryFn: () => getInterTeamReportAVG(),
  })

  if (isLoading)
    return (
      <p className=' text-lg text-[#69C920] text-center w-full font-bold'>
        Loading...
      </p>
    )

  // console.log(data)

  const agentsName: string[] = data.map((obj: any) => obj['hau.name'])
  const activityAvg: number[] = data.map((obj: any) =>
    obj['avg_Activity']?.toFixed(2)
  )

  return (
    <InternalTeamActivityChart
      agentsName={agentsName}
      activityAvg={activityAvg}
    />
  )
}

export default InternalTeamReportAVG
