
import React, { useState, useEffect, useMemo } from "react";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement, Title,Tooltip,Legend,} from "chart.js";
import { Bar } from "react-chartjs-2";

import useFirestore from '../hooks/useFirestore'

import useCovidData from '../hooks/useCovidData'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
export default function BarChartApi() {
 


  const {arrCities,arrDeathPercentage, population,countrys} = useCovidData()
  
  
  
  
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState({
    datasets: [],
  });



  
  useEffect(() => {
    setChartData({
      labels: countrys,
      borderRadius:.5,
      datasets: [
        {
          label: "PORCENTAGE DE MUERTES EN FUNCION DE LA POBLACION",
          data: population,
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
          text: "DATOS FETCH",
        },
      },
    });
  }, [population]);


  if(arrCities.length===0 ||arrDeathPercentage.length===0 ) return <h1>loading...</h1>
 
  return(
    <div className = ' w-100% md:w-3/4 mx-auto my-10 max-w-screen-xl'>
      <Bar  options={chartOptions} data={chartData} />
    </div>
  )
  
}
 