import React, { useState } from 'react'
import { logo } from '../../assets/index'
import { navLinksdata } from "../../constant"
import { Link } from 'react-scroll'
import { FiMenu } from 'react-icons/fi'

import { MdClose } from 'react-icons/md'
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='w-full h-20 sticky top-0 z-50 mx-auto bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      {/* logo */}
      <div className='mr-1'>
        <img src={logo} alt="logo" />
      </div>

      {/* others item */}
      <div>
        <ul className='hidden md:inline-flex items-center lgl:gap-10 gap-6'>
          {
            navLinksdata.map(({ _id, title, link }) => (
              <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 '
                key={_id}>
                <Link activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link >
              </li>
            ))
          }
        </ul>
        {/* resposive menu */}
        <span
          onClick={() => setShowMenu(!showMenu)}
          className='cursor-pointer text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-poitner'>
          <FiMenu />
        </span>
        {showMenu && (
          <div className='w-[80%] h-screen overflow-scroll absolute top-0 -left-5 bg-gray-900 p-4 scrollbar-hide'>
            <div className='relative flex flex-col gap-8 p-2'>
              <div >
                <img src={logo} alt="logo" />
              </div>
              <div>
                <ul className='flex flex-col gap-4'>
                  {
                    navLinksdata.map((item) => (
                      <li key={item._id} className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
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
              <span
                onClick={() => setShowMenu(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer'>
                <MdClose />
              </span>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
