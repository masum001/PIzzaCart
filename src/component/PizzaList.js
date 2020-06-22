import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import PizzaDetails from './PizzaDetails';
import { Container, Row, Col } from 'react-bootstrap';

function PizzaList() {

 const {  pizzas }  = useContext(CartContext);
    return (

    <Container>
      <Row >
      {pizzas.map(pizza=>(
          <Col xs={3} className="mb-5" key={pizza.id} >
            <PizzaDetails  pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
    )
}

export default PizzaList
