import React, { useContext } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function PizzaDetails({ pizza }) {

    const { dispatch ,cartItems } = useContext(CartContext);
    const addPizza = () =>
        { 
            let index = cartItems.findIndex(item=> item.id===parseInt(pizza.id))
            console.log(index)
        dispatch({type: 'ADD_PIZZA', pizza: {
        name: pizza.name,
        price: parseFloat(pizza.price),
        Qty: pizza.Qty
    }})}
    
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant='top' src={pizza.image} />
             <Card.Body className='d-flex flex-column'>
               <div className='d-flex mb-2 justify-content-between'>
                    <Card.Title className='mb-0 font-weight-bold'>{pizza.name}</Card.Title>
                    <Badge pill className='mb-1' variant='warning'>${pizza.price}</Badge> 
               </div>
               <Card.Text className='text-secondary'>{pizza.desc}</Card.Text>

               <Button className="mt-auto font-weight-bold" variant="success" block onClick={addPizza}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default PizzaDetails
