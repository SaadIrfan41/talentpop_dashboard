'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { StatsNegativeIcon, StatsPositiveIcon } from '../Icons/icons'

export const getTotalBilledHours = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/total-billed-hours'
  )
  const data = await res.json()
  return data
}
const TotalBilledHours = () => {
  //   const data = await getTotalBilledHours()
  //   console.log(data)
  const { data, isLoading } = useQuery({
    queryKey: ['total-billed-hours-count'],
    queryFn: () => getTotalBilledHours(),
  })
  if (isLoading) return <p className=' text-base text-[#69C920]'>Loading...</p>

  console.log(data.data[0]?.total_sum_formatted)
  let billed_hours = 0
  const timeString = data.data[0]?.total_sum_formatted
  const regex = /(\d+)hrs/ // Regex pattern to match the hours
  const match = regex.exec(timeString)
  if (match) {
    billed_hours = parseInt(match[1]) // Extract the hours as an integer
  }
  return (
    <>
      {billed_hours}

      <StatsNegativeIcon />
    </>
  )
}

export default TotalBilledHours
