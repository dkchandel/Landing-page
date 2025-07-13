import React from 'react'
import Business from './Image/Business.png'
import { TbHandFingerRight } from "react-icons/tb";


const Busines = () => {
  return (
    <div className='w-full flex justify-center mx-2'>
        <div className="w-full sm:w-1/2 flex justify-center mb-10 sm:mb-0">
            <img src={Business} alt="" className='font-6'/>
        </div>
        <div className="mx-10 mt-10 xl:mt-40 lg:mt-">
            <h1 className="text-3xl xl:text-5xl lg:text-4xl font-semibold text-[#9614ed]">Empower Your Business with Scalable Data Solutions</h1>
            <p className="text-[16px] py-4 pr-10 xl:text-[20px]">Transform raw data into structured insights with our advanced Data Warehousing & ETL Solutions.</p>
            <button className="flex item-center xl:h-14 xl:w-60 xl:mr-80 xl:px-6 xl:py-4 xl:text-[18px] xl:gap-3 font-semibold text-sm sm:gap-1 px-6 py-2.5 cursor-pointer h-10 w-50 bg-[#9d33e2] text-white rounded-[10px]"><TbHandFingerRight size={18} className='xl:size-6'/> Get Started Today</button>
        </div>
    </div>
  )
}

export default Busines