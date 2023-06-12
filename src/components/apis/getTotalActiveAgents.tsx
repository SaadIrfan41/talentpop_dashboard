'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { StatsPositiveIcon } from '../Icons/icons'

export const getTotalActiveAgents = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/active-agents'
  )
  const agents_count = await res.json()
  return agents_count
}
const TotalActiveAgents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['total-active-agents'],
    queryFn: () => getTotalActiveAgents(),
  })
  if (isLoading)
    if (isLoading)
      return <p className=' text-base text-[#69C920]'>Loading...</p>

  console.log(data.data[0]?.count_user_id)
  return (
    <>
      {data.data[0]?.count_user_id}
      <StatsPositiveIcon />
    </>
  )
}

export default TotalActiveAgents
