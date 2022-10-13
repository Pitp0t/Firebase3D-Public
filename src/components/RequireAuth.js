import React, { useContext } from "react";
import { UserContext } from "../context/AuthContex";
import { Navigate } from "react-router-dom";


export default function RequireAuth ({children}){
    const {user} = useContext(UserContext) 
    if(!user){
        return <Navigate to={'/login'}/>
    }

    return children
}