import React from 'react'

function ResumeCard({ title, subTitle, result, des }) {
  return (
    <div className='w-full h-auto group flex'>
      <div className='w-10 h-[6px] bgOpacity mt-16 relative '>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-[#00000099]'>
          <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>
      </div>
      <div className='w-full bg-[#00000033] hover:bg-[#0000004D] duration-300 rouned-lg px-6 py-6 lgl:py-10 lgl:px-10 flex flex-col justify-center lgl:gap-10 gap-6 shadow-shadowOne group '>
        <div className='flex flex-col lgl:flex-row justify-between lgl:items-center gap-4 lgl:gap-0'>
          <div className='pr-1'>
            <h3 className='md:text-xl text-[14px] font-semibold text-gray-200 hover:text-white  duration-300 '>{title}</h3>
            <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
          </div>
          <div>
            <p className='p-1 text-designColor bg-[#00000040] rounded-lg flex justify-center items-center text-center shadow-shadowOne text-[14px] font-medium'>
              {result}
            </p>
          </div>
        </div>
        <p className='text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 '>
        {des}
        </p>
      </div>
    </div>
  )
}

export default ResumeCard
