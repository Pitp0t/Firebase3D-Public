
import React, { useEffect } from "react"
import useFirestore from "../hooks/useFirestore"
import Cart from "../pages/Cart"


export const CartContext = React.createContext()


const CartProvider = (props)=>{
    
    const{modelData, error, loading, getModelsData}=useFirestore()
    const [cart, setCart] =React.useState( localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [])
    const [total, setTotal] =React.useState()
    
    useEffect(() => {
        console.log('setData')
        localStorage.setItem('cart', JSON.stringify(cart));
        

    },[cart])

   
   
    useEffect(()=>{
        console.log('PIDIENDO DATA')
        getModelsData()
        console.log(cart)
    },[cart])
    


    


    

    const addItemsToCart = (id)=>{
        
        const [filteredItem] = modelData.filter((valor)=>valor.modelid ===id)
        const allIds = cart.map((item)=>item.modelid)
        
        if(!allIds.includes(id)){
            setCart((prev)=>{
                return[
                    ...prev,
                    filteredItem
                ]
            })
        }
        else{
            return alert('Model already in your cart!')
        }
        
    }


    const removeItemsCart=(id)=>{
        const filteredItemRemove = cart.filter((valor)=>valor.modelid !==id)
        setCart(filteredItemRemove)
    }


    useEffect(()=>{
        const allPrices = cart.map(valor=>valor.data.price)
        const totalPrice = allPrices.reduce((acc, prev)=>acc +prev,0)
        return setTotal(totalPrice)
        
    },[cart])


    const removeAll = ()=>{
        setCart([])
    }



    

    return(
        <CartContext.Provider value={{cart,addItemsToCart, removeItemsCart, removeAll, total }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
