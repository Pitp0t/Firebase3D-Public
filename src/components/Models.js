import React, { useContext, useRef, useEffect } from "react";
import Cabeza from '../models/cabeza.glb'
import Silla from '../models/silla1.glb'
import { CartContext } from "../context/CartContext";


export default function ModeloIndividual(props){
    const{addItemsToCart} =useContext(CartContext)
    const modelViewerRef = useRef()
    
    useEffect(()=>{
        const widthOfScreen = window.screen.width;
        if(widthOfScreen>1200) {
            modelViewerRef.current.setAttribute('camera-controls','')
        }
        else{
            modelViewerRef.current.removeAttribute('camera-controls')
            modelViewerRef.current.setAttribute('camera-orbit',"calc(-1.5rad + env(window-scroll-y) * 4rad) ")
        }
    },[])

    const hanldeClick=(id)=>{
        return addItemsToCart(id)
    }   

    return(
        <>
        
            <div className="padre">
                <h3 className="padre--price">{props.price}$</h3>
                <div className="hijo">
                    <model-viewer className ='modelo' ref={modelViewerRef} src={Silla} loading="eager" powerPreference='low-power' disable-tap disable-pan disable-zoom slot="progress-bar">
                    <div slot="interaction-prompt"></div>
                    </model-viewer>
                </div>
                <p>{props.name}</p>
                <h4>Por <b className="text-black">{props.description}</b></h4>
                <button className="padre--boton  bg-gray-100 " onClick={()=>hanldeClick(props.id)}>Add to cart</button>
            </div>

        </>

    )
}