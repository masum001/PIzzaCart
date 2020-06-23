import React,{ useContext} from 'react'
import { Card , Button, Badge } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function CartDetails({cartItem}) {
  const { dispatch } = useContext(CartContext);
const handlePlus=()=>dispatch({type: 'UPDATE_QTY', id : cartItem.id, Qty: cartItem.Qty + 1})
const handleMinus=()=>dispatch({type: 'UPDATE_QTY', id : cartItem.id, Qty : cartItem.Qty - 1 })

    return (
        <Card>
        <Card.Header as="h5">Items  Cart</Card.Header>
        <Card.Body>
        <div className='d-flex mb-2 justify-content-between'>
          <Card.Title>{cartItem.name}</Card.Title>
          <Badge pill className='mb-1' variant='warning'>${parseFloat(cartItem.price * cartItem.Qty)}</Badge> 
        </div>
            <button onClick={handleMinus} disabled={cartItem.Qty<=1}>-</button>
            <h5>Quantity : {parseInt(cartItem.Qty)}</h5>
            <button onClick={handlePlus}>+</button>
          <Button variant="primary">Remove Item</Button>
        </Card.Body>
      </Card>
    )
}

export default CartDetails
