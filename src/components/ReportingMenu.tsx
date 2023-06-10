'use client'
import React, { useState } from 'react'
import { OverviewMenuIcon } from './Icons/icons'
import Overview from './Overview'
import AgentsWorkforceReport from './AgentsWorkforceReport'
import GlobalPerformance from './GlobalPerformance'

const ReportingMenu = () => {
  const [menu, setmenu] = useState(1)
  return (
    <section className=' overflow-hidden'>
      <nav className=' font-medium text-base text-[#163143] flex '>
        <div
          onClick={() => setmenu(0)}
          className={` flex items-center gap-3 relative pt-3 pb-6 pl-4 pr-16 border border-[#EBEBEB]  border-r-0  rounded-t-3xl ${
            menu === 0
              ? '  before:h-full before:w-full  before:rounded-t-lg  before:border-l before:border-[#EBEBEB] before:content-[""] before:absolute before:top-0 before:left-0 before:-skew-x-[20deg] after:h-full after:w-full  after:rounded-t-lg  after:border-r after:border-[#EBEBEB] after:content-[""] after:absolute after:top-0 after:right-0 after:skew-x-[20deg]  before:bg-white after:bg-white'
              : 'after:h-full after:w-full  after:rounded-t-lg  after:border-r after:border-[#EBEBEB] after:content-[""] after:absolute after:top-0 after:right-0 after:skew-x-[20deg]  '
          }`}
        >
          <OverviewMenuIcon />
          <span className=' relative z-50 '>Overview</span>
        </div>
        {/* <div
          className={`relative pt-3 pb-6 pl-4 pr-16 border border-[#EBEBEB]  border-r-0 border-l-0 rounded-t-3xl before:block  before:absolute  before:-inset-1 before:border-l before:border-[#EBEBEB]  before:rotate-[11deg]   after:block after:absolute  after:-inset-1 after:border-r after:border-[#EBEBEB]  after:-rotate-12   ${
            menu === 1
              ? ' before:z-[-1] z-50 after:z-[-2]  before:pr-10 after:pl-10 before:w-fit  '
              : ''
          }`}
        >
          Agent workforce report
        </div> */}
        <div
          onClick={() => setmenu(1)}
          className={` relative pt-3 pb-6 pl-4 pr-16 border border-[#EBEBEB]  border-r-0 border-l-0 rounded-t-3xl ${
            menu === 1
              ? '  before:h-full before:w-full  before:rounded-t-lg  before:border-l before:border-[#EBEBEB] before:content-[""] before:absolute before:top-0 before:left-0 before:-skew-x-[20deg] after:h-full after:w-full  after:rounded-t-lg  after:border-r after:border-[#EBEBEB] after:content-[""] after:absolute after:top-0 after:right-0 after:skew-x-[20deg] before:bg-white after:bg-white '
              : 'after:h-full after:w-full  after:rounded-t-lg  after:border-r after:border-[#EBEBEB] after:content-[""] after:absolute after:top-0 after:right-0  after:skew-x-[20deg] '
          }`}
        >
          <span className=' relative z-10'> Agent workforce report</span>
        </div>

        <div
          onClick={() => setmenu(2)}
          className={` relative pt-3 pb-6 pl-4 pr-16 border border-[#EBEBEB]   border-r-0  rounded-t-3xl ${
            menu === 0
              ? '  before:h-full before:w-full  before:rounded-t-lg  before:border-l before:border-[#EBEBEB] before:content-[""] before:absolute before:top-0 before:left-0 before:-skew-x-[20deg] after:h-full after:w-full  after:rounded-t-lg  after:border-r after:border-[#EBEBEB] after:content-[""] after:absolute after:top-0 after:right-0 after:skew-x-[20deg] before:bg-white after:bg-white '
              : 'after:h-full after:w-full  after:rounded-t-lg  after:border-r after:border-[#EBEBEB] after:content-[""] after:absolute after:top-0 after:right-0 after:skew-x-[20deg]  '
          }`}
        >
          <span className=' relative z-50 '> Global Performance</span>
        </div>
      </nav>
      {menu === 0 ? (
        <Overview />
      ) : menu === 1 ? (
        <AgentsWorkforceReport />
      ) : menu === 2 ? (
        <GlobalPerformance />
      ) : (
        'Loading'
      )}
    </section>
  )
}

export default ReportingMenu
