import React from 'react'
import {FiPieChart} from 'react-icons/fi'
import {BsTags} from 'react-icons/bs'
import {TbCalendarStats} from 'react-icons/tb'
import {FaRegUserCircle} from 'react-icons/fa'
import {MdOutlineSettings } from 'react-icons/md'

const Navigation = () => {
  return (
    <div className='flex flex-col h-full justify-around pr-5'>
    <div className='flex lg:flex-col sm:flex-row items-start justify-start h-4/5 gap-8 mt-20  md:w-auto'>
        <div className='flex font-bold text-3xl sm:justify-start  mb-4'>
          <h1>Board.</h1>
        </div>
        <div className='flex gap-3 items-start'>
        <FiPieChart className='align-center justify-center w-4 h-4 mt-1'/>
        <p>Dashboard</p>
        </div>

        <div className='flex gap-3'>
        <BsTags className='mt-1'/>
        <p>Transactions</p>
        </div>
        
        <div className='flex gap-3'>
        <TbCalendarStats className='mt-1'/>
        <p>Schedules</p>
        </div>
        
        <div className='flex gap-3'>
        <FaRegUserCircle className='mt-1'/>
        <p>Users</p>
        </div>
        <div className='flex gap-3'>
        <MdOutlineSettings className='mt-1'/>
        <p>Settings</p>
        </div>
        
        
    </div>
    <div className='flex flex-col w-full gap-3 p-4 mb-4 pr-5'>
        <p>Help</p>
        <p>Contact Us</p>
    </div>
    


</div>
  )
}

export default Navigation