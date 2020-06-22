import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CartContextProvider from './context/CartContext';
import Navbar from './component/Navbar';
import PizzaList from './component/PizzaList';
import CartItems from './component/CartItems';

function App() {
  
  return (
    <div className="App">
  
      <CartContextProvider>
      <Navbar/>
      <PizzaList />
      <CartItems />
      </CartContextProvider>
     
      </div>
  );
}

export default App;
