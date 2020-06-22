import React from 'react'

import { Jumbotron, Container } from 'react-bootstrap';
function Navbar() {

  
    
    return (
    <Jumbotron fluid className="bg-danger">
        <Container>
          <h1>!!! Pizzas !!!!</h1>
          <p>
            Select your most favourite pizza from our authentic collection !!!
          </p>
        </Container>
    </Jumbotron>
    )
}

export default Navbar
