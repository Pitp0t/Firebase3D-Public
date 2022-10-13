import React,{useEffect, useRef} from "react";
import Cabeza from '../models/cabeza.glb'
import animationsvg from '../images/animationsvg.svg'



export default function HeroImg (){

    const modelViewerRef = useRef()

    useEffect(()=>{
        const widthOfScreen = window.screen.width;
        if(widthOfScreen>800) {
            modelViewerRef.current.setAttribute('camera-controls','')
        }
        else{
            modelViewerRef.current.removeAttribute('camera-controls')

        }

    },[])

    
    


    return(
        <div className="sigleProductContainer my-24 md:flex-row flex-col w-2/4">
            <div className="relative">
                <img  className="absolute  animationRotate" src={animationsvg}></img>
                <div className="singleProduct__model"> 
                    <model-viewer ref={modelViewerRef} className ='modelo scale-50'
                        src={Cabeza} loading="eager" 
                        powerPreference='low-power' 
                        disable-tap disable-pan disable-zoom
                        touch-action="pan-y"
                        slot="progress-bar"
                        camera-orbit="calc(-1rad + env(window-scroll-y) * 1rad) "
                        >
                        <div slot="interaction-prompt"></div>
                    </model-viewer>
                </div>
                
            </div>
        </div>
    )
}