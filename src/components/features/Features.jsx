import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from 'react-icons/ai'
import { FaBars, FaGlobe, FaMobile } from 'react-icons/fa'
import { SiAntdesign, SiProgress } from 'react-icons/si'

function Features() {
  return (
    <section id='features' className='w-full py-16  border-b-[1px] border-b-black'>
      <Title title="Features" des="what I Do" />
      <div className='grid grid-cols-1 md:grid-cols-2  lgl:grid-cols-3 gap-6 lgl:gap-20'>
        <Card 
        title="Business Strategy"
        des="Focused on delivering scalable, user-driven UI solutions. "
         icon={<FaBars />}/>
        <Card 
        title="App Development"
        des="Skilled in developing fast, responsive, web apps using modern frontend"
        icon={<AiFillAppstore/>} />
        <Card title="SEO Optimisation"
        des="Optimized apps for SEO to improve visibility and performance. " 
        icon={<SiProgress/>}/>
        <Card title="Mobile Devolopment"
        des="Experienced in building responsive, web applications for user experiences."
        icon={<FaMobile/>}/>
        <Card title="UX Desgine"
        des="Focused on creating intuitive and user-centered designs for seamless experiences. "
        icon={<SiAntdesign/>}/>
        <Card title="Hosting Website"
        des="Skilled in deploying websites on Vercel, Netlify, and AWS. "
        icon={<FaGlobe/>}/>
      </div>
    </section>
  )
}

export default Features
