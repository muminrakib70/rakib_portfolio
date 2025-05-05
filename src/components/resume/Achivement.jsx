import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from "framer-motion";

function Achivement() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}}>
      <div className='flex justify-between flex-col gap-2 lgl:gap-16 lgl:flex-row'>
                {/* study lest side */}
                <div className='lgl:w-1/2 w-full h-auto '>
                    <div className='py-10 font-titleFonts'>
                        <p className='text-sm text-designColor tracking-[4px] '>2006-2020 </p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Education Quality </h2>
                    </div>
                    <div className='mt-2 h-auto border-l-[4px] border-l-[#0000004D] flex  flex-col gap-10'>
                        <ResumeCard
                            title="BSc In Computer Science"
                            subTitle="University of FCUB(2023-running)"
                            result="Running 2nd year"
                            des="The Training Provided by universities in order to prepare people to work in various sectors of the econmy or area of culture." />
                        <ResumeCard
                            title="Diploma In Electronics"
                            subTitle="Jhenaidah Polytechnic Institute (2020)"
                            result="3.61/4.00 "
                            des="The Training Provided by Technical Board in order to prepare people to work in various sectors of the econmy or area of culture" />
                        <ResumeCard
                            title="Higher Secondary Certificate in Science "
                            subTitle="Shaheed Smriti Biddyapith High School Jhenaidah (2016)"
                            result="4.89/5.00"
                            des="The Training Provided by School in order to prepare people to work in various sectors of the econmy or area of culture" />
                    </div>
                </div>
                
                {/* experience right side */}
                <div className='lgl:w-1/2 w-full '>
                    <div className='py-10 font-titleFonts'>
                        <p className='text-sm text-designColor tracking-[4px] '>2020-Running </p>
                        <h2 className='text-3xl md:text-4xl font-bold'>Job Experience</h2>
                    </div>
                    <div className='mt-2 h-auto border-l-[4px] border-l-[#0000004D]  flex flex-col gap-6 lgl:gap-10'>
                        <ResumeCard
                            title="Sr. Frontend Devoloper"
                            subTitle="Xenon Tech Software Ltd (2023 to Running)"
                            result="2 years"
                            des="Developed and maintained responsive web interfaces using React, Tailwind CSS, and JavaScript, ensuring cross-browser compatibility and performance optimization." />
                        <ResumeCard
                            title="Graphics Desginer"
                            subTitle="Ariful Computer(2021-2023)"
                            result="2 years"
                            des="The Training Provided by Technical Board in order to prepare people to work in various sectors of the econmy or area of culture" />
                        <ResumeCard
                            title="Sub Assistant Engnieer "
                            subTitle="Force Engineering & Services (2020-2021)"
                            result="1 years"
                            des="The Training Provided by School in order to prepare people to work in various sectors of the econmy or area of culture" />
                    </div>
                </div>
          </div>
    </motion.div>
  )
}

export default Achivement
