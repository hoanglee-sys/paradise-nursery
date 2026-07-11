import React, { useState } from 'react';

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = (id) => {
    setAddedItems({ ...addedItems, [id]: true });
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#plants">Plants</a>
        <a href="#cart">Cart</a>
        <div className="cart-icon">Cart Items: {cartCount}</div>
      </nav>

      <div className="category-1">
        <h2>Ferns</h2>
        {[1, 2].map(id => (
          <div key={`fern-${id}`} className="product-card">
            <img src="fern.jpg" alt="Fern Thumbnail" />
            <h3>Fern {id}</h3>
            <p>$10.00</p>
            <button disabled={addedItems[`fern-${id}`]} onClick={() => handleAddToCart(`fern-${id}`)}>
              {addedItems[`fern-${id}`] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <div className="category-2">
        <h2>Succulents</h2>
        {[1, 2].map(id => (
          <div key={`suc-${id}`} className="product-card">
            <img src="succulent.jpg" alt="Succulent Thumbnail" />
            <h3>Succulent {id}</h3>
            <p>$15.00</p>
            <button disabled={addedItems[`suc-${id}`]} onClick={() => handleAddToCart(`suc-${id}`)}>
              {addedItems[`suc-${id}`] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>

      <div className="category-3">
        <h2>Palms</h2>
        {[1, 2].map(id => (
          <div key={`palm-${id}`} className="product-card">
            <img src="palm.jpg" alt="Palm Thumbnail" />
            <h3>Palm {id}</h3>
            <p>$20.00</p>
            <button disabled={addedItems[`palm-${id}`]} onClick={() => handleAddToCart(`palm-${id}`)}>
              {addedItems[`palm-${id}`] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
