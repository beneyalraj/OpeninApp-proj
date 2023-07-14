import React from 'react'
import {BiChevronRight} from 'react-icons/bi'

const Schedule = () => {
  return (
<div className='lg:w-[480px] h-[256px] max-[900px]:w-full rounded-xl bg-white mt-5'>
      <div className='flex justify-between w-full px-6 py-5'>
        <h1>Today's schedule</h1>
        <div className='flex flex-row '>
          <span><p className='text-sm font-light text-grey-300'>See All</p></span>
          <span className='mt-1'><BiChevronRight/></span>
        </div>
        
      </div>
      <div className='ml-4 gap-y-10 space-between mt-2'>
              <div className='flex w-full ml-7 gap-4'>
                  <div className=' h-15 bg-lime-400 w-[4px]'>
                  </div>
                  <div>
                    <h1 className='text-md'>Meeting with suppliers from Kuta Bali</h1>
                    <p className='text-sm text-slate-400 font-5'>14.00-15.00</p>
                    <p className='text-sm text-slate-400 font-5'>at Sunset Road,Kuta,Bali</p>
                  </div>
              </div>
        <br/>
        <div className='flex w-full ml-7 gap-4'>
              <div className='h-15 w-[4px]  bg-red-400'>

              </div>
              <div>
                <h1 className='text-md'>Check operation at Giga Factory 1</h1>
                <p className='text-sm text-slate-400 font-5'>18.00-20.00</p>
                <p className='text-sm text-slate-400 font-5'>at Central Jakarta</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule