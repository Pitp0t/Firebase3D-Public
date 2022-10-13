import React, { useContext } from "react";
import {Link, Navigate, NavLink} from 'react-router-dom'
import { UserContext } from "../context/AuthContex";
import UserLogo from '../images/userLogo.svg'
import { CartContext } from "../context/CartContext";



export default function Header(){
    
    const {signOutUser, user, userPhoto} = useContext(UserContext)
    const {cart,total}=useContext(CartContext)
    
    const handleSignOut = async ()=>{
        try{
            await signOutUser()
        }catch (error){
            alert(error)
        }

    }

    return(
        <header className="navbar  px-5  py-6 shadow  text-3xl fixed top-0 bg-white z-50 opacity-100  md:py-5">
            <div className="flex-1">
                <NavLink className="btn btn-ghost normal-case text-3xl text-black"to="/">3D MODELS</NavLink>
            </div>
        
            <div className="flex gap-8 md:gap-5">
                <label className="swap swap-rotate " >
                    <input type="checkbox" />
                    <svg className="swap-on fill-black w-10 h-10 scale-150 md:scale-125" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    <svg className="swap-off fill-black w-9 h-9 scale-150 md:scale-125" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
                </label>
    

                <div className="dropdown dropdown-end scale-150 md:scale-125">
                    <label tabIndex={0} className="btn btn-ghost btn-circle ">
                    <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className=" w-8" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item w-5 h-5">{cart !==null ? cart.length: 0}</span>
                        </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-white shadow">
                        <div className="card-body">
                            <span className="font-bold text-2xl">{cart!==null ? cart.length: 0} Items</span>
                            <span className="text-info text-xl">Subtotal: ${total}</span>
                            <div className="card-actions">
                                <NavLink to ='/cart'><button className="btn text-white font-bold btn-block ">View cart</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
               

                <div className="dropdown dropdown-end w-30 h-30 scale-150 md:scale-125">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    { user && <div className="w-5 h-5 absolute top-0 right-0 bg-lime-500 rounded-full border-2 border-solid border-white"></div>}
                    <div className="w-30 rounded-full">
                        <img src={UserLogo}></img>
                    </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                    
                    <li><NavLink  className="text-xl" to="/singleProduct">Product</NavLink></li>

                    {! user && <li><NavLink  className="text-xl" to="/login"> Login</NavLink></li>}
                    {! user && <li><NavLink  className="text-xl" to="/register">Register</NavLink></li>}
                    { user && <li><NavLink  className="text-xl" to="/micuenta">Profile</NavLink></li>}
                    {user && <li onClick={handleSignOut}><NavLink  className="text-xl" to="/">Log Out</NavLink></li>}
                    </ul>
                </div>
            </div>

        </header>

    )

}