'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { StatsNegativeIcon, StatsPositiveIcon } from '../Icons/icons'

export const getTotalInternalTeamMembers = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/total-internal-team-members-count'
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
  if (isLoading) return <Skeleton className='w-[100px] h-[50px] rounded-2xl' />

  console.log(data.data[0]?.sum_count_user_id)
  return (
    <>
      {data.data[0]?.sum_count_user_id}

      <StatsNegativeIcon />
    </>
  )
}

export default TotalInternalTeamMembers
