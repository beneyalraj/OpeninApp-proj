import React from 'react'
import {Chart as ChartJS,
ArcElement,
Tooltip,
Legend
} from "chart.js"
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend

)

const PieCharts = () => {
    const data = {
        datasets: [
          {
            data: [ 14, 31, 55],
            backgroundColor: ['#fca5a5', '#fde047', '#86efac'],
            
          },
        ],
      };
    
      return(
      <div className="w-40 h-30">
      
        <Pie data={data} />
      </div>)
    
}

export default PieCharts