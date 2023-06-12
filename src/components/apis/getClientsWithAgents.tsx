import React from 'react'
import { UpIcon } from '../Icons/icons'
import { useQuery } from '@tanstack/react-query'

export const getClienWithAgentsCount = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/active-agents-by-client'
  )
  const data = await res.json()
  return data
}

const ClientsWithAgents = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['clients-with-agents'],
    queryFn: () => getClienWithAgentsCount(),
  })
  if (isLoading)
    return <p className=' text-base text-[#69C920] font-bold'>Loading...</p>

  // console.log(data)
  return (
    <>
      {data.data.map((data: any, index: number) => (
        <div key={index}>
          <span className=' font-medium text-base'>
            {data['hop.name'] ? data['hop.name'] : 'No Name'}
          </span>
          <div className='flex items-center gap-1'>
            <span className=' font-bold text-lg'>
              {data.count_hubstaff_all_users}
            </span>
            <UpIcon />
            <div
              style={{
                background:
                  'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                width:
                  data.count_hubstaff_all_users > 100
                    ? '100%'
                    : `${data.count_hubstaff_all_users}%`,
              }}
              className={` h-3`}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default ClientsWithAgents
