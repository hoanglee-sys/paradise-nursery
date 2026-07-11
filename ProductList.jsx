import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';

const plantsArray = [
  {
    category: "Ferns",
    plants: [
      { id: 1, name: "Fern 1", image: "fern1.jpg", price: 10 },
      { id: 2, name: "Fern 2", image: "fern2.jpg", price: 12 },
      { id: 3, name: "Fern 3", image: "fern3.jpg", price: 15 },
      { id: 4, name: "Fern 4", image: "fern4.jpg", price: 18 },
      { id: 5, name: "Fern 5", image: "fern5.jpg", price: 20 },
      { id: 6, name: "Fern 6", image: "fern6.jpg", price: 22 },
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 7, name: "Succulent 1", image: "suc1.jpg", price: 8 },
      { id: 8, name: "Succulent 2", image: "suc2.jpg", price: 9 },
      { id: 9, name: "Succulent 3", image: "suc3.jpg", price: 10 },
      { id: 10, name: "Succulent 4", image: "suc4.jpg", price: 12 },
      { id: 11, name: "Succulent 5", image: "suc5.jpg", price: 14 },
      { id: 12, name: "Succulent 6", image: "suc6.jpg", price: 15 },
    ]
  },
  {
    category: "Palms",
    plants: [
      { id: 13, name: "Palm 1", image: "palm1.jpg", price: 25 },
      { id: 14, name: "Palm 2", image: "palm2.jpg", price: 30 },
      { id: 15, name: "Palm 3", image: "palm3.jpg", price: 35 },
      { id: 16, name: "Palm 4", image: "palm4.jpg", price: 40 },
      { id: 17, name: "Palm 5", image: "palm5.jpg", price: 45 },
      { id: 18, name: "Palm 6", image: "palm6.jpg", price: 50 },
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart({ ...plant, quantity: 1 }));
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart</a>
        <div className="cart-icon">Cart Items: {totalQuantity}</div>
      </nav>

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h2>{category.category}</h2>
            <div className="plant-list">
              {category.plants.map((plant) => (
                <div key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button
                    disabled={cartItems.some(item => item.id === plant.id)}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {cartItems.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
