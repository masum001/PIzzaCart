import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartDetails from './CartDetails'
import { Container, Row} from 'react-bootstrap'

function CartItems() {
 
    const { cartItems  } = useContext(CartContext);
    console.log(cartItems)
    
    return (
        <Container>
       
        {cartItems.map(cartItem=>(
            
              <CartDetails cartItem={cartItem} key ={cartItem.id} />
           
          ))}
        
      </Container>
    )
}

export default CartItems
