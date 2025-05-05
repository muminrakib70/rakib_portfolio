import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'





function Banner() {

    return (
        <section id='home' className='w-full py-16 flex flex-col lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont'>
            <LeftSide />
            <RightSide />
        </section>
    )
}

export default Banner
