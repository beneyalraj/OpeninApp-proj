import React from 'react'

const Card = ({name,price}) => {
  return (
    <div className='w-56 h-24 flex flex-col px-5 gap-1 rounded-lg justify-end mb-5'>
        <h2 className='font-sans md:lato font-normal text-sm'>{name}</h2>
        <p className='font-sans md:OpenSans font-bold text-2xl'>{price}</p>
    </div>
  )
}

export default Card