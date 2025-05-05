import React from 'react'
import { bannerImg } from "../../assets/index"
function RightSide() {
    return (
        
            <div className='flex justify-center items-center relative mr-3 lgl:ml-1 ml-3 w-[300px] h-[400px] lgl:w-[450px] lgl:h-[500px]'>
                <img className='z-10 w-[300px] h-[400px] lgl:w-[450px] lgl:h-[500px]' src={bannerImg}  alt="" />
                <div 
                className='absolute bottom-0 w-[110%] h-[70%] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center '>
                </div>
            </div>
        
    )
}

export default RightSide
