import React from 'react'
import Logo from '../../public/logo.png'
import Image from 'next/image'
import { ChevronDown, RefreshCw } from 'lucide-react'
import ReportingMenu from '@/components/ReportingMenu'
const HomePage = () => {
  return (
    <div className=' bg-[#FAFFFF] pb-20'>
      <header className=' border-b-2 border-[#EBEBEB]'>
        <nav className=' pl-6 pr-16 flex py-5 items-center gap-16'>
          <Image src={Logo} alt='Logo' />
          <div className=' font-bold text-lg text-[#163143] flex items-center'>
            All reports <ChevronDown />
          </div>
          <div className=' font-normal text-base ml-auto'>Sign out</div>
        </nav>
      </header>
      <section className=' pl-10 pr-16'>
        <div className='flex pt-10 items-center'>
          <h1 className='  font-extrabold text-2xl text-[#343434] '>
            Agent workforce report
          </h1>
          <button className='flex items-center ml-auto text-white bg-[#69C920] rounded-full py-3 px-4'>
            {' '}
            Refresh Report <RefreshCw className='ml-2' />{' '}
          </button>
        </div>
      </section>
      <section className='ml-10 mr-16 pt-6 bg-white'>
        <ReportingMenu />
      </section>
    </div>
  )
}

export default HomePage
