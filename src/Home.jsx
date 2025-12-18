import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-intro">
        <div className="hero-overlay">
          <div className="hero-content-center">
            <span className="hero-badge">New Arrivals</span>
            <h1 className="main-heading">
              Your Premier Online<br />Shopping Destination
            </h1>
            <p className="main-subtext">
              Explore thousands of quality products across multiple categories.<br />
              From electronics to fashion, we've got you covered.
            </p>
            <Link to="/products" className="btn-primary">Shop Now</Link>
          </div>
        </div>
      </section>

      <section className="featured-categories">
        <div className="container">
          <div className="section-title">
            <h2>Browse Collections</h2>
            <p>Discover our handpicked categories</p>
          </div>
          <div className="categories-row">
            <Link to="/products" className="category-item">
              <div className="category-icon-box">📱</div>
              <h4>Electronics</h4>
              <span className="category-count">120+ items</span>
            </Link>
            <Link to="/products" className="category-item">
              <div className="category-icon-box">👕</div>
              <h4>Fashion</h4>
              <span className="category-count">85+ items</span>
            </Link>
            <Link to="/products" className="category-item">
              <div className="category-icon-box">🏠</div>
              <h4>Home & Living</h4>
              <span className="category-count">95+ items</span>
            </Link>
            <Link to="/products" className="category-item">
              <div className="category-icon-box">⌚</div>
              <h4>Accessories</h4>
              <span className="category-count">60+ items</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="info-banner">
        <div className="container">
          <div className="info-cards">
            <div className="info-item">
              <div className="info-number">2.5k+</div>
              <div className="info-label">Products Available</div>
            </div>
            <div className="info-item">
              <div className="info-number">500+</div>
              <div className="info-label">Happy Customers</div>
            </div>
            <div className="info-item">
              <div className="info-number">98%</div>
              <div className="info-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="services-row">
            <div className="service-box">
              <div className="service-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>Get your orders delivered quickly and efficiently</p>
            </div>
            <div className="service-box">
              <div className="service-icon">🔒</div>
              <h3>Secure Payment</h3>
              <p>All transactions are protected and encrypted</p>
            </div>
            <div className="service-box">
              <div className="service-icon">♻️</div>
              <h3>Easy Returns</h3>
              <p>30-day hassle-free return policy on all items</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to Start Shopping?</h2>
          <p>Join thousands of satisfied customers today</p>
          <Link to="/products" className="cta-large-btn">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
