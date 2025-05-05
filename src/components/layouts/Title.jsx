import React from 'react'

const Title = ({title,des}) => {
  return (
    
      <div className='mb-14 flex flex-col gap-4 font-titleFont'>
        <h3 className='text-sm uppercase font-light text-designColor tracking-wide'>
          {title}
        </h3>
        <h1 className='text-3xl lgl:text-5xl text-gray-300 font-bold capitalize'>
          {des}
        </h1>
      </div>
    
  )
}

export default Title
