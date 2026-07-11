import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="landing-page-background">
      <header className="hero-section">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful houseplants! Bring life to your living space.</p>
        <button className="get-started-btn" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </header>
    </div>
  );
};

export default App;
