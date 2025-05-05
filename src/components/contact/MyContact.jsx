import React from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'


function MyContact() {
    return (
        <section id='contact' className='w-full py-14 border-b-[1px] border-b-black '>
            <div className='justify-center items-center text-center'>
                <Title title="Contact" des="Contact With Me" />
            </div>
            <div className='w-full'>
                <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                    <ContactLeft />
                    <ContactRight />
                    
                   
                   
                    
                </div>
            </div>
        </section>
    )
}

export default MyContact
