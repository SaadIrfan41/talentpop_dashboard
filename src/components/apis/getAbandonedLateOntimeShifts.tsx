import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'
import React from 'react'
const MyResponsivePie = dynamic(() => import('../PieChart'), {
  ssr: false,
})
export const getAbandonedLateOntimeShifts = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/abandoned-late-ontime-shifts-by-count'
  )
  const data = await res.json()
  return data
}

const AbandonedLateOntimeShifts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['abandoned-late-ontime-shifts'],
    queryFn: () => getAbandonedLateOntimeShifts(),
  })
  if (isLoading)
    return <p className=' text-base text-[#69C920] font-bold'>Loading...</p>
  const formatedData = [
    {
      id: 'Late',
      label: 'Late',
      value: data[0].count_abandoned,
      color: '#398D5B',
    },
    {
      id: 'Abandoned',
      label: 'Abandoned',
      value: data[0].count_abandoned,
      color: '#6EF96C',
    },
    {
      id: 'Missed',
      label: 'Missed',
      value: data[0].count_missed,
      color: '#1D542C',
    },
    {
      id: 'Ontime',
      label: 'Ontime',
      value: data[0].count_ontime,
      color: '#133418',
    },
  ]

  return <MyResponsivePie formatedData={formatedData} />
}

export default AbandonedLateOntimeShifts
