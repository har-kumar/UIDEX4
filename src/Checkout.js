import React from 'react';
import './Checkout.css'; 

const Checkout = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p className="total-amount">Total Amount: ${totalAmount}</p>
      <button className="checkout-btn" onClick={() => alert('Purchase Successful!')}>Buy Now</button>
    </div>
  );
};

export default Checkout;
