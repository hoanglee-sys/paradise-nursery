import React from 'react';

const CartItem = () => {
  return (
    <div className="shopping-cart-page">
      <h2>Total Cart Amount: $100.00</h2>
      
      <div className="cart-item">
        <img src="thumbnail.jpg" alt="Plant Thumbnail" />
        <h3>Beautiful Fern</h3>
        <p>Unit Price: $10.00</p>
        <p>Total Cost for this plant: $20.00</p>
        
        <div className="quantity-controls">
          <button className="decrease-btn"> Decrease - </button>
          <span> Quantity: 2 </span>
          <button className="increase-btn"> Increase + </button>
        </div>
        
        <button className="delete-btn">Delete</button>
      </div>

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={() => console.log('Back to products')}>
          Continue Shopping
        </button>
        <button className="checkout-btn">
          Checkout (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default CartItem;
