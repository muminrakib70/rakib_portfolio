import React from 'react'
import { logo } from '../../assets'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function MyFooter() {
    return (
        <div className='w-full py-10 border-b-[1px] border-b-black h-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 lgl:gap-25 md:gap-x-64 md:gap-y-3 gap-2  '>
            <div className='w-full h-full flex flex-col gap-3'>
                <img className='w-[35px] h-[40px]' src={logo} alt="" />
                <div className='flex gap-4'>
                    <div className='bannerIcon'>
                        <FaFacebook />
                    </div>
                    <div className='bannerIcon'>
                        <FaTwitter />
                    </div>
                    <div className='bannerIcon'>
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
            <div className='w-full '>
                <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Quick Link
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-4'>
                    <li className='footerText'>About</li>
                    <li className='footerText'>Services</li>
                    <li className='footerText'>Blog</li>
                    <li className='footerText'>Portfolio</li>
                    <li className='footerText'>Contact</li>
                </ul>
            </div>
            <div className='w-full '>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Resources
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-4'>
                    <li className='footerText'>Authentication</li>
                    <li className='footerText'>System Status</li>
                    <li className='footerText'>Terms of Services</li>
                    <li className='footerText'>Pricing</li>
                    <li className='footerText'>Over Right</li>
                </ul>
            </div>
            <div className='w-full '>
            <h3 className='text-xl uppercase text-designColor tracking-wider'>
                    Devolopers
                </h3>
                <ul className='flex flex-col gap-4 font-titleFont font-medium py-4'>
                    <li className='footerText'>Documentation</li>
                    <li className='footerText'>Authentication</li>
                    <li className='footerText'>Api Prefernece</li>
                    <li className='footerText'>Support</li>
                    <li className='footerText'>Opern Source</li>
                </ul>
            </div>
        </div>
    )
}

export default MyFooter
