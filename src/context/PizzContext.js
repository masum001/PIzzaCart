import React, { createContext,useReducer, useState } from "react";
import pizzaList from '../data.json'
import { cartReducer } from '../reducer/cartReducer'

export const CartContext = createContext()

const CartContextProvider=( props )=>{
   const [ pizzas, dispatch ] = useReducer(cartReducer, pizzaList)
   const [ cartItems, dispatch ] = useReducer(cartReducer,[ 
       {id: 1, name: "Chicago Pizza", price: 9, Qty: 1} 
       //hello 
   ])

    return(
        <CartContext.Provider value={{pizzas, dispatch, cartItems}}>
       
        {props.children}
        
        </CartContext.Provider>
    )
    

}

export default CartContextProvider;