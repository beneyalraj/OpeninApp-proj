import React from 'react'
import Navigation from '../Subcomponents/Navigation'
import Header from '../Subcomponents/Header'
import Cards from '../Subcomponents/Cards'
import Activities from '../Subcomponents/Activities'
import Product from '../Subcomponents/Product'
import Schedule from '../Subcomponents/Schedule'

const Dashboard = () => {
  return (
    <div className='lg:flex w-screen h-screen bg-slate-300 justify-around '>
        <div className='flex  lg:w-[280px] sm,md:w-full lg:h-[96%] justify-center items-center mt-4 bg-black rounded-3xl text-white'>
        <Navigation/>
        </div>
        <div className='lg:w-[1000px]  h-full py-10  lg:justify-center '>
            <Header/>
            <Cards/>
            <Activities/>

            <div className='lg:flex justify-between max-[900px]:justify-center
            '>
                <Product/>
                <Schedule/>
            </div>
        </div>


    </div>
  )
}

export default Dashboard