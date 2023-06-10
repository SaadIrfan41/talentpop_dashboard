import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Billed per hour',
    },
  },
}

const labels = ['January ', 'February', 'March', 'April', 'May', 'June', 'July']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(22, 49, 67, 1)',
      backgroundColor: '#69C920',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}

export function BarComponent() {
  return (
    <Bar options={options} data={data} className=' mx-auto h-full w-full' />
  )
}
