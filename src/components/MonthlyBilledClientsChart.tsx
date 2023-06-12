'use client'
import React, { useRef, useEffect, useState } from 'react'
import type { ChartData, ChartArea } from 'chart.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarElement,
  Title,
} from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = '#163143'
  const colorMid = '#69C920'
  const colorEnd = '#69C920'
  //  const colorStart = '#163143'
  // const colorMid = '#698CA4'
  //  const colorEnd = '#698CA4'

  const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom)

  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(0.5, colorMid)
  gradient.addColorStop(1, colorEnd)

  return gradient
}

export const options = {
  // indexAxis: 'x' as const,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Horizontal Bar Chart',
    // },
  },
}

export function MonthlyBilledClientsChart({ clientName, billableHrs }: any) {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart) {
      return
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    }

    setChartData(chartData)
  }, [])
  const data = {
    labels: clientName,
    datasets: [
      {
        //  label: 'Dataset 1',
        data: billableHrs,
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      // },
    ],
  }

  return (
    <div
      style={{ width: clientName.length * 20 }}
      className='mx-auto h-[450px] pt-12 '
    >
      <Chart
        ref={chartRef}
        options={options}
        type='bar'
        data={chartData}
        width={clientName.length * 20}
        height={'100%'}
        className={` `}
      />
    </div>
  )
}
