import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skill from './Skill'
import Achivement from './Achivement'
import Experience from './Experience'

function MyResume() {
    const [educationData, setEducationdata] = useState(true);
    const [skillData, setSkilldata] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achivementData, setAchivemenData] = useState(false);
    return (
        <section id='resume' className='w-full lgl:py-16 py-10 pb-16 border-b-[1px] border-b-black '>
            <div className='justify-center items-center text-center'>
                <Title title="2+ Years Of Experience " des="My Resume" />
            </div>
            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 '>
                    <li
                        onClick={() =>
                            setEducationdata(true) &
                            setSkilldata(false) &
                            setExperienceData(false) &
                            setAchivemenData(false)
                        }
                        className={`${educationData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}>Education
                    </li>
                    <li
                        onClick={() => 
                        setEducationdata(false) & 
                        setSkilldata(true) &
                        setExperienceData(false) &
                        setAchivemenData(false)
                    } 
                    className={`${skillData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}>
                        Professional Skill
                    </li>
                    <li 
                    onClick={() => 
                        setEducationdata(false) & 
                        setSkilldata(false) &
                        setExperienceData(true) &
                        setAchivemenData(false)
                    } 
                    className={`${experienceData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}>Experience </li>
                    <li 
                    onClick={() => 
                        setEducationdata(false) & 
                        setSkilldata(false) &
                        setExperienceData(false) &
                        setAchivemenData(true)
                    } 
                    className={`${achivementData ? "border-designColor rounded-lg":"border-transparent"} resumeLi`}>Achivement </li>
                </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skill />}
            {achivementData && <Achivement />}
            {experienceData && <Experience />}

            
        </section>
    )
}

export default MyResume
