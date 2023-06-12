'use client'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import React, { Fragment } from 'react'

import { InternalTeamActivityRateChart } from '../InternalTeamActivityRateChart'

const getInternalTeamActivityRate = async ({ pageParams }: any) => {
  const res = await fetch(
    // 'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/internal-team-activity-rate'
    'https://reporting.hotel3lue3ijq.us-east-1.cs.amazonlightsail.com/internal-team-activity-rate?client=talentpop'
    // {
    //   params: { _page: pageParams },
    // }
  )
  const data = await res.json()
  return data
}
const InternalTeamActivityRate = () => {
  let pageParams: any = 1
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['internal-team-activity-rate'],
      queryFn: () => getInternalTeamActivityRate((pageParams = { pageParams })),
      getNextPageParam: (_, pages) => pages.length + 1,
    })

  if (isLoading)
    return (
      <p className=' text-lg text-[#69C920] text-center w-full font-bold'>
        Loading...
      </p>
    )

  return (
    <div className=' flex flex-wrap gap-10 mx-auto pl-8 pt-8'>
      {data?.pages.map((group, i: number) => (
        <Fragment key={i}>
          {group.map((item: any) => (
            <div key={item.name}>
              <p className=' font-medium text-[#163143]'>{item.name}</p>
              <InternalTeamActivityRateChart
                monthlyAvgActivities={item.monthly_avg_activities}
              />
            </div>
          ))}
        </Fragment>
      ))}
      {/* {isFetchingNextPage ? (
        <div className=' text-red-500'>Loading more...</div>
      ) : hasNextPage ? (
        <button className=' text-red-500 ' onClick={() => fetchNextPage()}>
          Load More
        </button>
      ) : null} */}
    </div>
  )
}

export default InternalTeamActivityRate
