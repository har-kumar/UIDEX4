import React from 'react';
import './Cart.css'; // New CSS file for the cart

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button className="remove" onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
