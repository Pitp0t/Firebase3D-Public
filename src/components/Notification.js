import React from "react";
import { useContext } from "react";
import {NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";


export default function Notification(){

    const {total} =useContext(CartContext)

    return(
        <div className={`alert shadow-lg bg-white fixed top-24 flex flex-row ${total>0 ? 'notification' : 'hidden'}`}  >
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                    <h3 className="font-bold text-black">New model added to your cart!</h3>
                    <div className="text-xl">{total} $</div>
                </div>
            </div>
            <div className="flex-none">
                <NavLink to ='/cart'><button className="btn">See</button></NavLink>
            </div>
        </div>
    )
}