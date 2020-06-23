import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartDetails from './CartDetails'
import { Container, Row} from 'react-bootstrap'

function CartItems() {
 
    const { cartItems  } = useContext(CartContext);
    
    const grandTotal = cartItems.reduce( (total, cartItem )=>(
        total + cartItem.price * cartItem.Qty
    ), 0)
    
    return (
        <div>
       
        {cartItems.map(cartItem=>(
            
              <CartDetails cartItem={cartItem} key ={cartItem.id} />
           
          ))}

          <h3>Grand Total {parseFloat(grandTotal)}</h3>
        
      </div>
    )
}

export default CartItems
