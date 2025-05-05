import React from 'react'
import Title from '../layouts/Title'
import {projectOne, projectTwo, projectThree} from "../../assets/index"
import ProjectCard from './ProjectCard'
function Projects() {
    return (
        <section id='projects' className='w-full py-16 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="Visit My Portfolio and Keep your Feedback" des="My Projects" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols lgl:grid-cols-3 lgl:gap-10 gap-4 '>
                <ProjectCard
                 title="Social Media Clone"
                 des="Built a fully responsive social media app clone with React and Tailwind CSS.  "
                 src={projectOne} />
                <ProjectCard title="E-Commerce WebSite"
                 des="Developed a responsive e-commerce app clone using React and Tailwind CSS.  "
                 src={projectTwo} />
                <ProjectCard title="Chatting App"
                 des="Created a real-time chatting app using React and Firebase with responsive UI.  "
                 src={projectThree} />
                <ProjectCard title="Social Media Clone"
                 des="Built a fully responsive social media app clone with React and Tailwind CSS.   "
                 src={projectThree} />
                <ProjectCard title="E-Commerce WebSite"
                 des="Developed a responsive e-commerce app clone using React and Tailwind CSS.  "
                 src={projectTwo} />
                <ProjectCard title="Chatting App"
                 des="Created a real-time chatting app using React and Firebase with responsive UI. "
                 src={projectOne} />
                 
            </div>
        </section>
    )
}

export default Projects
