import React from 'react'
import { Card , Button, Badge } from 'react-bootstrap'

function CartDetails({cartItem}) {
    return (
        <Card>
        <Card.Header as="h5">Items  Cart</Card.Header>
        <Card.Body>
        <div className='d-flex mb-2 justify-content-between'>
          <Card.Title>{cartItem.name}</Card.Title>
          <Badge pill className='mb-1' variant='warning'>${cartItem.price}</Badge> 
        </div>
            
        <button>-</button> <h5>Quantity : {cartItem.Qty}</h5>   <button>+</button>
          
          <Button variant="primary">Remove Item</Button>
        </Card.Body>
      </Card>
    )
}

export default CartDetails
