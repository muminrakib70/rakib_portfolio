import React from 'react'
import { BsGithub, BsGlobe } from 'react-icons/bs'

const ProjectCard = ({ title, des, src }) => {
    return (
        <div className='w-full lgl:px-4 p-2 h-auto lgl:py-4 rouned-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
            <div className='w-full h-[80%] rounded-lg overflow-hidden'>
                <img className='w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt="" />
            </div>
            <div className='w-full mt-5 flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-base uppercase text-designColor font-normal '>
                        {title}
                    </h3>
                    <div className='flex gap-2 '>
                        <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer'>
                            <BsGithub />
                        </span>
                        <span className='text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-300 hover:text-designColor duration-300 cursor-pointer'>
                            <BsGlobe />
                        </span>
                    </div>

                </div>
                <div>
                    <p className='text-sm tracking-wide mt-2 hover:text-gray-300 duration-300 '>{des}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
