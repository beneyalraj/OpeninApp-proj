import React from 'react'
import {Line} from 'react-chartjs-2';
import{
  Chart as ChartsJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,

} from 'chart.js';

ChartsJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

const Activities = () => {

  const data = {
    labels:[' ', 'week1','week2','week3','week4',' '],
    datasets:[{
      label:' ',
      data:[100,450,150,450,150,350],
      backgroundColor:'Whisper',
      borderColor:'light-green',
      pointBorderColor:'Whisper',
      pointStyle: 'circle', 
      CategoryScale:[0,100,200,300,400],
      tension:0.4
    },
    {
      label: '',
      data: [200, 400, 200, 300,250,400],
      borderColor: 'orange',
      pointBorderColor: 'Whisper',
      pointStyle: 'circle', 
      tension: 0.4
    }]
  }

  const options = {
    plugins:{
      legend:false
    },
    scales:{
      y:{
          min:0,
          max:500,
          ticks: {
            stepSize: 100
          }
      }
    },
    elements: {
      point: {
        radius: 0,
        pointStyle: 'circle',
        left:60
      }
    },
    layout: {
      padding: {
        left:50,
        right: 30,
        top: 0,
        bottom: 0
      }
    }
  
  }
  return (
    <div className='w-full bg-white rounded-xl h-[300px] mt-5'>
          <div className='flex justify-around  gap-80'>
          <div className='mt-4 ml-[-20px]'>
            <h1 className='font-bold text-lg'>Activities</h1>
            <select className='text-sm font-light text-grey-300 border-none ml-[-5px]'>
                  <option value="may">May - June 2021</option>
                  <option value="June">June - July 2021</option>
                  <option value="Aug">july - Aug 2021</option>

            </select>
            </div>
            <div className='flex items-baseline mt-5 gap-3 ml-40'>
                  <div className='w-[10px] h-[10px] rounded-2xl bg-[#fca5a5] items-end '>
                  </div>
                  <div>
                    <h1 className='text-md mt-2'>Guest</h1>
                  </div>
                  <div className='w-[10px] h-[10px] rounded-2xl bg-[#9BDD7C] items-end '>
                  </div>
                  <div>
                    <h1 className='text-md mt-2'>User</h1>
                  </div>
          </div>
          

      </div>
    <div className='w-full h-[360px] mt-5' >
      <Line
      data={data}
      options={options}
      className="w-full"
      width={1000}
      height={212}
    />
    </div>
    
    </div>
  )
}

export default Activities