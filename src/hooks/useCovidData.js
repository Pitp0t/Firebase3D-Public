import React,{useState, useEffect} from "react";


export default function useCovidData (){

    const [arrCities, setArrCities]=useState([])
    const [arrDeathPercentage, setArrDeathPercentage]=useState([])

    const [countrys,setCountrys]=useState([])
    const [population,setPopulation]=useState([])
   
    
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4d19e57425mshda9fe4ec37e0094p1c934fjsn0be597fb25cb',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        };
        fetch('https://covid-193.p.rapidapi.com/statistics', options)
        .then(response => response.json())
        .then(response =>{

            console.log('RESPUESTA THEN')
            const covidData =[...response.response]


            // DATOS DE SOUTH AMERICA ---- POBLACION Y NOMBRE DEL PAIS
            const southAmericaData =covidData.filter((valor)=>valor.continent ==="South-America")
            
            const countryName = southAmericaData.map((valor)=>valor.country)
            const countryDataPopulation =southAmericaData.map((valor)=>valor.cases.total)

            // DATOS DE SOUTH AMERICA ---- como objeto ...
            const namesAndPopulation = southAmericaData.map((valor)=>{
                return {name: valor.country, population: valor.cases.total}
            })







            setCountrys(countryName)
            setPopulation(countryDataPopulation)

        

            // DATOS DE MUERTES EN RELACION A LA POBLACION

            const [datosArgenitna] = covidData.filter((valor)=>valor.country === 'Argentina')
            const [datosBrasil] = covidData.filter((valor)=>valor.country === 'Brazil' )
            const [datosUsa] = covidData.filter((valor)=>valor.country === 'USA')
            const argentinaPopulation = datosArgenitna.population
            const argentinaCases = datosArgenitna.cases.total 
            const percentaageArg= Math.floor(argentinaPopulation/argentinaCases *100)
        
        
            const brasilPopulation = datosBrasil.population
            const brasilCases = datosBrasil.cases.total 
            const percentageBrasil= Math.floor(brasilPopulation/brasilCases *100)
        
        
            const usaPopulation = datosUsa.population
            const usaCases = datosUsa.cases.total 
            const percentaageUsa= Math.floor(usaPopulation/usaCases *100)
        
            setArrCities ([datosArgenitna.country, datosBrasil.country, datosUsa.country])
            setArrDeathPercentage([percentaageArg,percentageBrasil,percentaageUsa])

            

        })


        .catch(err => console.error(err));
    },[])



    return{
        arrCities,arrDeathPercentage,population, countrys
    }
}