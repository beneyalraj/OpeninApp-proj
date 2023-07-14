import React from 'react'
import Card from './Card'
import {PiDownloadBold} from 'react-icons/pi'
import {BsTags} from 'react-icons/bs'
import {FiThumbsUp} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'


const Cards = () => {
  return (
    <div className='flex lg:w-full sm,md:w-[221px] max-[900px]:flex-col max-[900px]:gap-3 pt-5 justify-between '>
    <div className='bg-green-100 rounded-2xl relative'>
    <PiDownloadBold className='right-2 absolute h-6 w-6 mt-5 mr-2'/>
        <Card name="Total Revenues" price="$21,29,430" />
        
    </div>
    <div className='bg-yellow-100 rounded-2xl relative'>
        <BsTags className='right-2 absolute h-6 w-6 mt-5 mr-2'/>
        <Card name="Total Transactions" price="1,520" />
    </div>
    <div className='bg-orange-100 rounded-2xl relative'>
        <FiThumbsUp className='right-2 absolute h-6 w-6 mt-5 mr-2'/>
        <Card name="Total Likes" price="9,721" />
    </div>

    <div className='bg-violet-100 rounded-2xl relative'>
        <FiUsers className='right-2 absolute h-6 w-6 mt-5 mr-2'/>
        <Card name="Total Users" price="892" />
    </div>
        
        
       
       
</div>
  )
}

export default Cards