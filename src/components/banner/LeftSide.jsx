import React from 'react'
import { FaFacebookF, FaLinkedin, FaReact, FaTwitter } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
function LeftSide() {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Frontend Devoloper.", "React Devoloper."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
  return (
    <div>
       <div className='w-full lgl:w-[80%] flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='text-4xl lgl:text-6xl font-bold text-white'>
                        Hi, I'm  {" "}
                        <span className='text-designColor capitalize'> Rakib</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>a  {" "}
                        <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#ff014f'>

                        </Cursor>

                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide justify-text'>
                    Frontend Developer with 2+ years of experience in React, Tailwind CSS, and building responsive, high-performance UIs.
                    </p>
                </div>
                <div className='flex flex-col lgl:flex-row gap-4 lgl:gap-0 justify-between '>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>
                            Find Me In
                        </h2>
                        <div className='flex gap-4'>
                            <span className='bannerIcon'>
                                <FaFacebookF />
                            </span>
                            <span className='bannerIcon'>
                                <FaTwitter />
                            </span>
                            <span className='bannerIcon'>
                                <FaLinkedin />
                            </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-base uppercase font-titleFont mb-4'>
                                Best Skill On
                            </h2>
                            <div className='flex gap-4'>
                                <span className='bannerIcon'>
                                    <FaReact />
                                </span>
                                <span className='bannerIcon'>
                                    <SiTailwindcss />
                                </span>
                                <span className='bannerIcon'>
                                    <SiJavascript />
                                </span>
                                <span className='bannerIcon'>
                                    <FiFigma  />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LeftSide
