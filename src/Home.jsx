import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to E-com Shopping</h1>
        <p>Find the best products at great prices</p>
        <Link to="/products" className="shop-btn">Shop Now</Link>
      </div>

      <div className="categories-section">
        <h2>Browse Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <span className="category-icon">📱</span>
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <span className="category-icon">👗</span>
            <h3>Fashion</h3>
          </div>
          <div className="category-card">
            <span className="category-icon">🏠</span>
            <h3>Home</h3>
          </div>
          <div className="category-card">
            <span className="category-icon">⌚</span>
            <h3>Accessories</h3>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="feature">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick shipping on all orders</p>
        </div>
        <div className="feature">
          <h3>🔒 Secure Payment</h3>
          <p>Your payment is safe with us</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
