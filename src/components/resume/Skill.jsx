import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from "framer-motion";

function Skill() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1} }}>
            <div className='flex flex-col lgl:flex-row justify-between gap-6 lgl:gap-16'>
                {/* Skill  left side */}
                <div className='lgl:w-1/2 w-full'>
                    <div className='lgl:py-10 py-4 font-titleFonts'>
                        <p className='text-sm text-designColor tracking-[4px] '>Features</p>
                        <h2 className='lgl:text-4xl text-2xl font-bold'>Web SKill</h2>
                    </div>
                    <div className='lgl:mt-10 mt-4 w-full flex flex-col gap-5'>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>React Js</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        90%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>Tailwind Css</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        95%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>JavaScript</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        95%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>Css</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[98%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        98%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>html</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[99%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        99%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        

                    </div>
                </div>

                {/* experience right side */}
                <div className='lgl:w-1/2 w-full'>
                    <div className='lgl:py-10 py-4 font-titleFonts'>
                        <p className='text-sm text-designColor tracking-[4px] '> Features</p>
                        <h2 className='lgl:text-4xl text-2xl font-bold'>Desgine Skill</h2>
                    </div>
                    <div className='lgl:mt-10 mt-4 w-full flex flex-col gap-5'>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>Illustator</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        100%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>PhotoShop</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        95%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>Figma</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        90%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>Canva</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        100%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        <div className='overflow-x-hidden'>
                            <p className='text-sm uppercase font-medium'>Photoshot</p>
                            <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                                <motion.span
                                initial={{x:"-100%", opacity:0}}
                                animate={{x:0, opacity:1}}
                                transition={{duration:0.5, delay:0.3}} 
                                 className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                    <span className='absolute -top-7 right-0'>
                                        80%
                                    </span>
                                </motion.span>
                            </span>
                        </div>
                        

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skill
