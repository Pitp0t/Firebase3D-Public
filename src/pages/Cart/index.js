import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import {NavLink } from "react-router-dom";

export default function Cart (){
    
    
    const{cart,removeItemsCart, removeAll, total}=useContext(CartContext)
    
    const handleClick=(id)=>{
        return removeItemsCart(id)

    }
    const handleDeleteAll=()=>{
        return removeAll()

    }
 
    useEffect(()=>{
        console.log('cart rendered')
    },[])

   


    const allItems = cart.map((valor)=>{
        return(
            <div key={valor.modelid}>
                <div className="flex items-center justify-between  ">
                    
                    <div  >
                        <h1 className="font-bold w-60">{valor.data.name}</h1>
                        <h3>{valor.data.description}</h3>
                    </div>
                    <h3 >${valor.data.price}</h3>
                    <button className="btn btn-circle btn-outline " onClick={()=>handleClick(valor.modelid)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            
            </div>
           
        )
    })




    if(cart.length ===0) return (
        <div className="text-center content-center justify-center flex flex-col my-96 gap-24">
            <h1 className="  font-bold text-3xl">Empty Cart!</h1>
            <NavLink to='/' className=' mx-auto '>
                <div className="button-2 bg-gray-100 px-10 py-5 rounded-xl mx-auto flex  items-center justify-center w-100%">
                    <svg className ='scale-50'xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m24 31.3 2.1-2.1-3.7-3.7h9.1v-3h-9.1l3.7-3.7-2.1-2.1-7.3 7.3ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
                    Continue Shopping
                </div>
            </NavLink>
            
        </div>
        
    
    )

    return(
        
        <div className="  flex-col flex mx-auto content-center justify-center gap-24 my-60 max-w-screen-xl w-100% sm:flex-row sm:w-4/5 md:flex-row md:w-4/5 ">
            <div className="flex flex-col gap-10  content-center justify-center p-10 w-100% sm:w-9/12 md:w-9/12" >
                <h1 className="font-bold text-3xl"> Shopping Cart</h1>
                <div className="flex  border-b-2 justify-between">
                    <h2 className="w-40">Products</h2>
                    <h2>Price</h2>
                    <h2></h2> 
                </div>
                {allItems}
               
                <div className="flex  justify-between  font-bold mt-10  rounded-lg">
                    <h2 className="text-3xl w-60">Total: </h2>
                    <h2 className="text-3xl">$ {total}</h2>
                    <button  onClick={handleDeleteAll}>Remove all</button>
                </div>
                
            </div>

            <div className=" w-100%  flex flex-col justify-between rounded-lg gap-10 sm:w-4/12 md:w-4/12">
                <div className="flex p-10 flex-col gap-5 bg-gray-100">
                    <h1 className="font-bold text-3xl mb-5">Payment Info</h1>
                    <div className="flex items-center justify-start ">
                        <input  type="checkbox"  className="checkbox" />
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M21.5 6.3v11.4q0 .75-.525 1.275-.525.525-1.275.525H4.3q-.75 0-1.275-.525Q2.5 18.45 2.5 17.7V6.3q0-.75.525-1.275Q3.55 4.5 4.3 4.5h15.4q.75 0 1.275.525.525.525.525 1.275ZM4 8.4h16V6.3q0-.1-.1-.2t-.2-.1H4.3q-.1 0-.2.1t-.1.2Zm0 3.2v6.1q0 .1.1.2t.2.1h15.4q.1 0 .2-.1t.1-.2v-6.1ZM4 18V6v12Z"/></svg>
                        <h2 className="font-medium text-xl">Credit card</h2>
                    </div>
           
                    <h2 className="font-bold mt-96 ">Total: {total}$</h2>


                </div>
                <button onClick={()=>alert('ChekOut en Proceso')}className="button-2 bg-black px-24 py-5 rounded z-50 border-slate-900 font-bold text-white">CheckOut</button>

            </div>
          

        
        </div>
       
       
    )
}
