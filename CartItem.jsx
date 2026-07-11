import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItemFromCart({ id: item.id }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItemFromCart({ id: item.id }));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="shopping-cart-page">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <div>
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total Cost for this plant: ${calculateTotalCost(item)}</p>

            <div className="quantity-controls">
              <button className="decrease-btn" onClick={() => handleDecrement(item)}> - </button>
              <span> Quantity: {item.quantity} </span>
              <button className="increase-btn" onClick={() => handleIncrement(item)}> + </button>
            </div>

            <button className="delete-btn" onClick={() => handleRemove(item)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="continue-shopping-btn" onClick={(e) => onContinueShopping(e)}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
