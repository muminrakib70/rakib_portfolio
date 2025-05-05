import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import MyResume from './components/resume/MyResume'
import Testimonial from './components/testimonial/Testimonial'
import MyContact from './components/contact/MyContact'
import MyFooter from './components/footer/MyFooter'
import FotterBottom from './components/footer/FotterBottom'




function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-5'>
        <Navbar />
      <div className='max-w-screen-xl mx-auto lgl:px-16'>
        <Banner />
        <Features />
        <Projects />
        <MyResume />
        <Testimonial />
        <MyContact />
        <MyFooter/>
        <FotterBottom />
      </div>
    </div>
  )
}

export default App
