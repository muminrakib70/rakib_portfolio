import React, { useState } from 'react'
import Title from '../layouts/Title'
import Slider from "react-slick";
import { quote, testimonialOne, testimonialTwo } from '../../assets/index';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

// Arrows 
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-4 flex justify-center items-center absolute md:top-0 -top-5 md:right-20 right-1 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-4 flex justify-center items-center absolute md:top-0 -top-5 md:right-40 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}


function Testimonial() {
    const [dotActive, setDotActive] = useState(0)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },

        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",

                }}
            >
                <ul style={{
                    display: 'flex',
                    gap: '15px',
                    justifyContent: "center",
                    marginTop: "20px"
                }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive ? {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer",
                        marginTop: "20px"
                    } : {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                        marginTop: "20px"
                    }
                }
            >

            </div>
        )
    };
    return (
        <section id='testimonial' className='w-full lg:py-14 py-6 border-b-[1px] border-b-black '>
            <div className='justify-center items-center text-center'>
                <Title title="What Clients Says" des="Testimonial" />
            </div>

            <div className='max-w-6xl mx-auto '>
                <Slider {...settings}>
                    {/* 1st slider */}
                    <div className='w-full'>
                        <div className='w-full h-auto flex flex-col lgl:flex-row  justify-between'>
                            <div className='flex flex-col md:flex-row lgl:flex-col justify-center md:justify-start lgl:justify-center gap-8 p-8 w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'>
                                <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={testimonialOne} alt="" />
                                <div className='flex flex-col justify-end'>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Bound-Torolola</p>
                                    <h3 className='text-xl md:text-2xl font-bold '>John Doe</h3>
                                    <p className='text-base tracking wide text-gray-500'>Operation Office</p>
                                </div>
                            </div>
                            <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between  '>
                                <img className='w-20 lgl:w-32' src={quote} alt="" />
                                <div className='w-full h-[70%] lgl:py-10 py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col lgl:gap-8 gap-2 p-8 rounded-lg shadow-shadowOne'>
                                    <div className='flex flex-col lgl:flex-row justify-between lgl:items-center lgl:py-6 py-2 border-b-2 border-b-gray-900 items-start gap-2 lgl:gap-0 '>
                                        <div>
                                            <h3 className='text-xl md:text-2xl font-medium tracking-wide'>
                                                Travel Mobile App Desgin
                                            </h3>
                                            <p className='text-base text-gray-400 mt-3'>
                                                Via Upwork -march4, 2024 - Aug 30,2021 test

                                            </p>
                                        </div>
                                        <div className='text-yellow-500 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, in.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* 2nd slider */}
                    <div className='w-full'>
                        <div className='w-full h-[500px] flex justify-between flex-col lgl:flex-row'>
                            <div className='flex flex-col md:flex-row lgl:flex-col justify-center md:justify-start lgl:justify-center  gap-8 p-8 w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'>
                                <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={testimonialTwo} alt="" />
                                <div className='flex flex-col justify-end'>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Bound-Torolola</p>
                                    <h3 className='text-xl md:text-2xl font-bold '>John Doe</h3>
                                    <p className='text-base tracking wide text-gray-500'>Operation Office</p>
                                </div>
                            </div>
                            <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between  '>
                                <img className='w-20 lgl:w-32' src={quote} alt="" />
                                <div className='w-full h-[70%] lgl:py-10 py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col lgl:gap-8 gap-2  lgl:px-8 px-4 rounded-lg shadow-shadowOne'>
                                    <div className='flex items-start gap-2 lgl:gap-0 lgl:py-6 py-2 border-b-2 border-b-gray-900 flex-col lgl:flex-row justify-between lgl:items-center'>
                                        <div>
                                            <h3 className='text-xl md:text-2xl font-medium tracking-wide'>
                                                Travel Mobile App Desgin
                                            </h3>
                                            <p className='text-base text-gray-400 mt-3'>
                                                Via Upwork -march4, 2024 - Aug 30,2021 test

                                            </p>
                                        </div>
                                        <div className='text-yellow-500 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, in.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* 3rd slider */}
                    <div className='w-full'>
                        <div className='w-full h-auto flex justify-between flex-col lgl:flex-row'>
                            <div className='flex flex-col md:flex-row lgl:flex-col justify-center md:justify-start lgl:justify-center gap-8 p-8 w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne'>
                                <div>
                                    <img className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover' src={testimonialOne} alt="" />
                                </div>
                                <div className='flex flex-col justify-end'>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>Bound-Torolola</p>
                                    <h3 className='text-xl md:text-2xl font-bold '>John Doe</h3>
                                    <p className='text-base tracking wide text-gray-500'>Operation Office</p>
                                </div>
                            </div>
                            <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between  '>
                                <img className='w-20 lgl:w-32' src={quote} alt="" />
                                <div className='w-full h-[70%] lgl:py-10 py-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col lgl:gap-8 gap-2 p-8 rounded-lg shadow-shadowOne'>
                                    <div className='flex flex-col lgl:flex-row justify-between lgl:items-center items-start gap-2 lgl:gap-0 lgl:py-6 py-2 border-b-2 border-b-gray-900 '>
                                        <div>
                                            <h3 className='text-xl md:text-2xl font-medium tracking-wide'>
                                                Travel Mobile App Desgin
                                            </h3>
                                            <p className='text-base text-gray-400 mt-3'>
                                                Via Upwork -march4, 2024 - Aug 30,2021 test

                                            </p>
                                        </div>
                                        <div className='text-yellow-500 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, in.
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>



                </Slider>
            </div>
        </section>
    )
}

export default Testimonial
