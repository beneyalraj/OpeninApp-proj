import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'

const Header = () => {
  return (
    <div className='w-full h-[30px] flex justify-between max-[1024px]:hidden '>
        <div>
            <h1 className='font-bold text-2xl'>Dashboard</h1>
        </div>
        <div className='flex justify-between border-slate-100 space-between gap-5'>
                <div className='flex relative '>
                <input 
                    type='text'
                    placeholder='Search..'
                    name='searchbox'
                    className='border-none outline-none flex-grow text-start rounded-md p-2 font-sans md:lato'
                    />
                    <AiOutlineSearch className='absolute place-items-end top-2 bg-white right-2'/>
                   
                </div>

                <BsBell className='mt-2'/>

                <img src="https://media.licdn.com/dms/image/D4D03AQHnYrOPEV14CA/profile-displayphoto-shrink_400_400/0/1683759896741?e=1694649600&v=beta&t=w8AOLk1iYHarRWk-3aRgI5hPQhMu8gy2-XJjJDwstJs" alt=''
                className='rounded-2xl'></img>


           
        </div>
    </div>
  )
}

export default Header