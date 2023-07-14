import React from 'react'
import PieCharts from './Piecharts'


const Product = () => {
  return (
<div className='lg:w-[480px] max-[900px]:w-full h-[256px] bg-white rounded-xl mt-5'>
        <div className='w-full flex justify-between px-6 py-4'>
            <h1 className='font-bold text-lg'>Top products</h1>
            <select className='text-sm font-light text-grey-300 border-none'>
                <option value="may">May - June 2021</option>
                <option value="June">June - July 2021</option>
                <option value="Aug">july - Aug 2021</option>

            </select>
        </div>
        <div className='flex w-full h-full justify-evenly'>
            <PieCharts className="justify-center place-content-center"/>
            <div className=' items-center place-items-center pt-4 gap-y-5'>
                <span className='flex space-x-4'>
                    <div className='w-[10px] h-[10px] rounded-2xl bg-[#86efac] place-items-center mt-2'></div>
                    <div>
                        <p className='font-bold'>Basic Tees</p>
                        <p className='text-sm font-light text-grey-300'>55%</p>
                    </div>
                    
                </span>
                <span className='flex space-x-4'>
                    <div className='w-[10px] h-[10px] rounded-2xl bg-[#fde047] items-center mt-2'></div> 
                    <div>
                        <p className='font-bold'>Custom Short Pant</p>
                        <p className='text-sm font-light text-grey-300'>31%</p>
                    </div>
                    
                </span>
                <span className='flex space-x-4'>
                    <div className='w-[10px] h-[10px] rounded-2xl bg-[#fca5a5] items-center mt-2'></div>
                    <div>
                        <p className='font-bold'>Super Hoodies</p>
                        <p className='text-sm font-light text-grey-300'>14%</p>
                    </div>
                    
                </span>
            </div>
        </div>

    </div>
  )
}

export default Product