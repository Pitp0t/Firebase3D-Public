import React from "react";
import { Navigate } from "react-router-dom";


export default function NotFound(){
    return(
        <div className="my-72 flex flex-col content-center justify-center">
            <h2 className="text-4xl  text-center font-bold">ERROR 404</h2>
            <h2 className="text-4xl  text-center">Sorry, page not found...</h2>
        
        </div>
    )
}