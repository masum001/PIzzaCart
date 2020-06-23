import React, { createContext,useReducer, useState } from "react";
import pizzaList from '../data.json'
import { cartReducer } from '../reducer/cartReducer'

export const CartContext = createContext()

const CartContextProvider=( props )=>{
    const [ pizzas ] = useState(pizzaList)
    const [ cartItems, dispatch ] = useReducer(cartReducer,[ 
        
       //hello 
   ])

    return(
        <CartContext.Provider value={{pizzas, dispatch, cartItems}}>
       
        {props.children}
        
        </CartContext.Provider>
    )
    

}

export default CartContextProvider;