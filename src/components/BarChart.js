
import React, { useState, useEffect, useMemo } from "react";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement, Title,Tooltip,Legend,} from "chart.js";
import { Bar } from "react-chartjs-2";

import useFirestore from '../hooks/useFirestore'
 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
export default function BarChart() {
 


  const {userModelData,getUserModelData} = useFirestore()
  const barNames = userModelData.map((valores)=>valores.data.name)
  const barPrices = userModelData.map((valores)=>valores.data.price)
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  
  



  useEffect(() => {
    getUserModelData()
    setChartData({
      labels: barNames,
      borderRadius:.5,
      datasets: [
        {
          label: "💪 Price",
          data: barPrices,
          borderColor: "rgb(255, 200, 0)",
          backgroundColor: "rgba(255, 200, 0, 0.4)",
          borderRadius:0,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "This are yout models",
        },
      },
    });
  }, [userModelData]);



 


 
  return(
    <div className = ' w-100% md:w-3/4 mx-auto my-10 max-w-screen-xl'>
      <Bar  options={chartOptions} data={chartData} />
    </div>
  )
 
  
  
  
  
}
 