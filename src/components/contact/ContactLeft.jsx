import React from 'react'
import { contactImg } from '../../assets'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function ContactLeft() {
    return (
        <div className='flex flex-col justify-center gap-6 p-8 w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'>
            <div>
                <img className="w-full h-64 object-cover rounded-lg mb-2" src={contactImg} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-3xl font-bold text-white'>Md Rakib Hossain</h3>
                <p className='text-lg font-normal text-gray-400'>REACT DEVOLOPER</p>
                <p className='text-sm text-gray-400 tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, praesentium saepe perferendis hic ut inventore!</p>
                <p className='text-sm text-gray-400 tracking-wide flex items-center gap-2'>
                    phone: <span className='text-lightText'>01568-687016</span>
                </p>
                <p className='text-sm text-gray-400 tracking-wide flex items-center gap-2'>
                    Email: <span className='text-lightText'>bahilarakib@gmail.com</span>
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <h2 className='text-base uppercase font-titleFont mb-2'>
                    Fine Me In
                </h2>
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
        </div>

    )
}

export default ContactLeft
