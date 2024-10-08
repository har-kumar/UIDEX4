import React, { useState } from 'react';
import './ProductList.css'; // Separate CSS for the product list

const ProductList = ({ addToCart }) => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999, img: 'https://www.digitaltrends.com/wp-content/uploads/2021/11/macbook-pro-2021-16.jpg?fit=1500%2C1000&p=1' },
    { id: 2, name: 'Phone', price: 499, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAw83BANxgyk_rSg-ucz7GeZsHGy2QbEIg3w&s' },
    { id: 3, name: 'Headphones', price: 199, img: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww' },
  ]);

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
