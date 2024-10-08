import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id)); // Ensure unique products with id
  };

  return (
    <div className="App">
      <header>
        <h1>E-Commerce Store</h1>
      </header>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Checkout cartItems={cartItems} />
      <footer className="footer">
        <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
