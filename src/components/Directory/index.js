import React, { useEffect} from "react";
import Cabeza from '../../images/Cabezapng.png'
import InfititeTag from "../InfiniteTag";
import ModeloIndividual from "../Models";
import {NavLink} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import useFirestore from "../../hooks/useFirestore";
import SinlgeProduct from "../SingleProd";
import HeroImg from "../HeroImg";




export default function Directory (props){

    const {modelData, error, loading, getModelsData,modelTestData,renderDataStorage} = useFirestore()
    
    useEffect(()=>{
        console.log('OBTENIENDO DATA')
        renderDataStorage()
        getModelsData()
    },[])
    
    
    
    if(loading.getData || error || modelData.length === 0){
        return (
            <div className="flex flex-col items-center justify-center h-100%">
                <h1 className="text-bold font-bold text-center mt-64">Loading data...</h1>
                <progress className="progress w-56"></progress>
            </div>
        )

    }

    
    const modelsRender = modelData.map((valor)=>{
        return <ModeloIndividual  key={valor.modelid} src={modelTestData}id ={valor.modelid} price = {valor.data.price.toLocaleString('es-AR')} name={valor.data.name} description={valor.data.description}></ModeloIndividual>
        
    })

    return(
        <>
            <div>
                <section  className="homepage--hero">
                    <div >
                        <h1 className="homepage--hero--h1 font-bold text-black">Welcome to <br /> 3d models</h1>
                        <h3 className="homepage--hero--h3 text-black">Buy models in our store. Upload your 3d models <br/> and sell them through the web </h3>
                        <div className="buttonContainer">
                            <HashLink to="#products"><button className="button-1 bg-gray-100">Our products</button></HashLink>
                            <NavLink to="/register"><button className="button-2 bg-gray-100">Join Now</button></NavLink>
                            
                        </div>
                    </div>
                    <div className="homepage--hero--img ">
                        <img src={Cabeza}></img>
                    </div>
                </section>
                <InfititeTag/>
               
                <div  id ='products'className="abuelo">
                    {modelsRender}
                </div>
            </div>
        </>
    )
}