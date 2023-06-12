'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { MonthlyBilledClientsChart } from '../MonthlyBilledClientsChart'

export const getHoursBilledLastMonth = async () => {
  const res = await fetch(
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/hour-billed-per-client-last-month'
  )
  const data = await res.json()
  return data
}
const HoursBilledLastMonth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['hours-billed-last-month'],
    queryFn: () => getHoursBilledLastMonth(),
  })

  if (isLoading)
    return (
      <p className=' text-lg text-[#69C920] text-center w-full font-bold'>
        Loading...
      </p>
    )

  //   console.log(data.data[0]?.count_user_id)
  const getHours = (hoursdata: string) => {
    const billableHrs: string = hoursdata
    const hrsIndex: number = billableHrs?.indexOf('hrs')
    const hrsValue: string = billableHrs?.substring(0, hrsIndex)
    return hrsValue
  }
  const clientName: string[] = data.data.map((obj: any) => obj['hoc.name'])
  const billableHrs: string[] = data.data.map((obj: any) =>
    getHours(obj['Billable_Hrs'])
  )
  //   console.log(clientName, billableHrs)
  return (
    // <div className=' flex-1 mx-auto max-h-[480px] w-full overflow-x-scroll pt-3 '>
    //   {/* <MyResponsiveBar data={BarsData} /> */}
    //   <BarComponent clientName={clientName} billableHrs={billableHrs} />
    // </div>
    <div className='divide-x flex '>
      <div className='flex flex-col gap-6 text-base font-medium pt-4 max-h-[480px] max-w-[350px] overflow-y-auto'>
        {data.data.map((data: any, index: number) => (
          //   <div key={index} className='flex gap-16 pl-4 pr-9  '>
          //     <span>{clientName[index]}</span>
          //     <span className=' ml-auto'>{billableHrs[index]}</span>
          //   </div>
          <div key={index} className='flex gap-16 pl-4 pr-9  '>
            <span>{data['hoc.name']}</span>
            <span className=' ml-auto'>{getHours(data.Billable_Hrs)}</span>
          </div>
        ))}
      </div>
      <div className=' flex-1 mx-auto max-h-[480px] overflow-x-scroll w-full '>
        {/* <MyResponsiveBar data={BarsData} /> */}
        <MonthlyBilledClientsChart
          clientName={clientName}
          billableHrs={billableHrs}
        />
      </div>
    </div>
  )
}

export default HoursBilledLastMonth
