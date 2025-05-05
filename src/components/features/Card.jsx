import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

function Card({ title, des, icon }) {
    return (
        // <div className='w-1/2 '>
        <div className='w-full px-8 md:px-12 h-68 md:h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
            <div className='h-58 md:h-72 overflow-y-hidden'>
                <div className='flex flex-col gap-6 h-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500 overflow-hidden'>
                <div>
                    <span className='text-[36px] text-designColor'>
                        {icon}
                    </span>
                </div>
                <div className='flex flex-col  gap-4'>
                    <h2 className='text-[14px] md:text-[18px] font-titleFont font-bold text-gray-300 '>
                        {title}
                    </h2>
                    <p className='text-base'>
                        {des}
                    </p>
                    <span className='text-2xl text-designColor '>
                        <HiArrowRight />
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card
