import React from 'react'
import {
  ExpandIcon,
  SettingIcon,
  StatsNegativeIcon,
  StatsPositiveIcon,
  UpIcon,
} from './Icons/icons'
import { PieChartData } from './data'
// import MyResponsivePie from './PieChart'

import dynamic from 'next/dynamic'

import homeStyles from '../styles/Home.module.css'
import { BarComponent } from './BarChart'
import { BarComponent2 } from './Barchart2'

const MyResponsivePie = dynamic(() => import('./PieChart'), {
  ssr: false,
})

const AgentsWorkforceReport = () => {
  return (
    <section className=' pt-11 border px-7'>
      <div className=' flex  gap-7  text-[#163143] justify-around'>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Total Active Agents
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Active agents</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              974 <StatsPositiveIcon />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Total Internal Members
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Internal Members</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              574
              <StatsNegativeIcon />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Total Billed Hours
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Total Bill</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              21M
              <StatsNegativeIcon />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Avg. Agent Activity
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Avg. Rate</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              67.2 <StatsPositiveIcon />
            </span>
          </div>
        </div>
        <div className=' pt-4 border flex flex-col text-center w-[241px] rounded-2xl'>
          <span className=' mb-4 capitalize text-base font-extrabold '>
            Avg. Internal Team Activity
          </span>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className=' flex flex-col py-5 '>
            <span className=' font-medium text-lg'>Avg. Rate</span>
            <span className='text-[40px] font-extrabold flex items-center justify-center gap-3'>
              73.6 <StatsPositiveIcon />
            </span>
          </div>
        </div>
      </div>
      <div className=' mt-7 text-[#163143]  flex gap-5  '>
        {/* CLIENT NAME # OF AGENTS */}
        <div className='border rounded-2xl w-[350px]  px-3 overflow-y-auto'>
          <div className='flex items-center py-4 '>
            <span className=' text-base font-extrabold '>
              Client Name and # of Agents
            </span>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='max-h-[439px] overflow-y-auto pt-4 px-4'>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
          </div>
        </div>
        {/* TOTAL INTERNAL MEMBEERS */}
        <div className='border rounded-2xl max-w-[350px]  px-3 overflow-y-auto'>
          <div className='flex items-center py-4 '>
            <span className=' text-base font-extrabold '>
              Total Internal Members
            </span>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='max-h-[439px] overflow-y-auto pt-4 px-4'>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
            <div className=' '>
              <span className=' font-medium text-base'>
                Customer Service - Cozy Earth
              </span>
              <div className='flex items-center gap-1'>
                <span className=' font-bold text-lg'>44</span>
                <UpIcon />
                <div
                  style={{
                    background:
                      'linear-gradient(90.26deg, #163143 -24.85%, #69C920 80.53%)',
                  }}
                  className=' w-[115px] h-3'
                />
              </div>
            </div>
          </div>
        </div>
        {/* Abandoned Late Missed Ontime shifts by Percentage and Count */}
        <div className='border rounded-2xl  flex-1  px-3 overflow-y-auto'>
          <div className='flex items-center py-4 '>
            <span className=' text-base font-extrabold '>
              Abandoned Late Missed Ontime shifts by Percentage and Counts
            </span>
            <div className='flex ml-auto gap-3 items-center'>
              <ExpandIcon />
              <SettingIcon />
            </div>
          </div>
          <div className=' h-[2px] w-full bg-[#EFEFEF]' />
          <div className='h-[439px] overflow-y-auto pt-4 px-4'>
            <MyResponsivePie data={PieChartData} />
          </div>
        </div>
      </div>
      {/* HOURS BILLED PER CLIENT */}
      <div className=' text-[#163143]  border rounded-2xl mt-10   '>
        <div className='flex items-center py-4 px-4 '>
          <h3 className=' font-extrabold text-base'>Hours Billed Per Client</h3>
          <div className='flex ml-auto gap-3 items-center'>
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=' h-[2px] w-full bg-[#EFEFEF]' />
        <div className='divide-x flex '>
          <div className='flex flex-col gap-6 text-base font-medium pt-4 max-h-[480px] overflow-y-auto'>
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>{' '}
            <div className='flex gap-16 pl-4 pr-9 '>
              <span>Hotel Collection</span>
              <span>18,281</span>
            </div>
          </div>
          <div className=' flex-1 mx-auto max-h-[480px]'>
            <BarComponent />
          </div>
        </div>
      </div>
      {/* HOURS BILLED PER CLIENT */}
      <div className=' text-[#163143]  border rounded-2xl mt-10   '>
        <div className='flex items-center py-4 px-4 '>
          <h3 className=' font-extrabold text-base'>
            Rolling Avg. Internal Team Activity Report (Select Due Filter)
          </h3>
          <div className='flex ml-auto gap-3 items-center'>
            <ExpandIcon />
            <SettingIcon />
          </div>
        </div>
        <div className=' h-[2px] w-full bg-[#EFEFEF]' />

        <div className=' h-[480px] overflow-x-auto w-full '>
          <BarComponent2 />
        </div>
      </div>
    </section>
  )
}

export default AgentsWorkforceReport
