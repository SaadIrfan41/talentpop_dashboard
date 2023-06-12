'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { InternalTeamActivityRateChart } from '../InternalTeamActivityRateChart'

const getInternalTeamActivityRate = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/internal-team-activity-rate'
  )
  const data = await res.json()
  return data
}
const InternalTeamActivityRate = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['internal-team-activity-rate'],
    queryFn: () => getInternalTeamActivityRate(),
  })

  if (isLoading)
    return (
      <p className=' text-lg text-[#69C920] text-center w-full font-bold'>
        Loading...
      </p>
    )

  return (
    <div className=' flex flex-wrap gap-10 mx-auto pl-8 pt-8'>
      {data.map((item: any) => (
        <div key={item.name}>
          <p className=' font-medium text-[#163143]'>{item.name}</p>
          <InternalTeamActivityRateChart
            monthlyAvgActivities={item.monthly_avg_activities}
          />
        </div>
      ))}
    </div>
  )
}

export default InternalTeamActivityRate
