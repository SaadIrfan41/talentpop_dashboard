'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { StatsNegativeIcon, StatsPositiveIcon } from '../Icons/icons'

export const getTotalInternalTeamMembers = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/total-internal-members'
  )
  const team_member__count = await res.json()
  return team_member__count
}
const TotalInternalTeamMembers = () => {
  //   const data = await getTotalInternalTeamMembers()
  //   console.log(data)
  const { data, isLoading } = useQuery({
    queryKey: ['total-internal-team-members'],
    queryFn: () => getTotalInternalTeamMembers(),
  })
  if (isLoading) return <p className=' text-base text-[#69C920]'>Loading...</p>

  console.log(data.data[0]?.sum_count_hubstaff_all_users)
  return (
    <>
      {data.data[0]?.sum_count_hubstaff_all_users}

      <StatsNegativeIcon />
    </>
  )
}

export default TotalInternalTeamMembers
