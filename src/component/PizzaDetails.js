import React, { useContext } from 'react'
import { Card, Badge, Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function PizzaDetails({ pizza }) {

    const { dispatch, cartItems } = useContext(CartContext);
    let index = cartItems.findIndex(item => item.id === parseInt(pizza.id))
    const addPizza = () => {

        console.log(index, pizza)
        dispatch({
            type: 'ADD_PIZZA', pizza: {
                id: pizza.id,
                name: pizza.name,
                price: parseFloat(pizza.price),
                Qty: pizza.Qty
            }
        })
    }
    const showAnyMessage = () => {
        alert("Hi")
    }

    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant='top' src={pizza.image} />
            <Card.Body className='d-flex flex-column'>
                <div className='d-flex mb-2 justify-content-between'>
                    <Card.Title className='mb-0 font-weight-bold'>{pizza.name}</Card.Title>
                    <Badge pill className='mb-1' variant='warning'>${pizza.price}</Badge>
                </div>
                <Card.Text className='text-secondary'>{pizza.desc}</Card.Text>

                <Button className="mt-auto font-weight-bold"
                    variant="success" block
                    onClick={index === -1 ? addPizza : showAnyMessage}>
                    {
                        index === -1 ? "Add to cart" : "View cart"
                    }
                </Button>
            </Card.Body>
        </Card>
    )
}

export default PizzaDetails
