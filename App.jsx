import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="landing-page-background">
      <header className="hero-section">
        <h1>Paradise Nursery</h1>
        <p>Your one-stop shop for beautiful houseplants! Bring life to your living space.</p>
        <button className="get-started-btn" onClick={() => console.log("Navigate to Products")}>
          Get Started
        </button>
      </header>
    </div>
  );
};

export default App;
