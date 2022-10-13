import React, { useContext, useRef, useEffect } from "react";
import Cabeza from '../models/cabeza.glb'
import Silla from '../models/silla1.glb'
import { CartContext } from "../context/CartContext";


export default function ModeloProfile(props){
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

    

    return(
        <>
            <div className="padre">
                <h3 className="padre--price">{props.price}$</h3>
                <div className="hijo">
                    <model-viewer className ='modelo' ref={modelViewerRef} src={Silla} loading="eager" powerPreference='low-power' disable-tap disable-pan disable-zoom slot="progress-bar">
                    <div slot="interaction-prompt"></div>
                    </model-viewer>
                </div>
                <p >{props.name}</p>
                <h4 className="text-black">Por <b>{props.description}</b></h4>
            </div>

        </>

    )
}