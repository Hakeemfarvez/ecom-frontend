import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./ProductsData";

function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["All", "Electronics", "Audio", "Wearables", "Fashion", "Home", "Gaming", "Accessories", "Storage", "Fitness"];

  let filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <div className="product-page">
      {/* Header */}
      <div className="products-header">
        <h1>Our Products</h1>
        <p>Discover our amazing collection of premium products</p>
      </div>

      {/* Filters Section */}
      <div className="filters-section">
        <div className="filter-container">
          <div className="filter-group">
            <label>Category:</label>
            <div className="category-filter">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Sort By:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          <div className="filter-info">
            Showing {filteredProducts.length} products
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product._id}
                to={`/product/${product._id}`}
                className="product-card"
              >
                <div className="product-card-inner">
                  {/* Image Section */}
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><rect fill='%23f3f4f6' width='100%25' height='100%25'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-size='22'>Image%20unavailable</text></svg>";
                      }}
                    />
                    <div className="product-overlay">
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="product-info">
                    <div className="product-category">{product.category}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    
                    {/* Rating */}
                    <div className="product-rating">
                      <div className="stars">
                        {'⭐'.repeat(Math.round(product.rating || 0))}
                      </div>
                      <span className="rating-text">
                        {product.rating || 0} ({product.reviews || 0} reviews)
                      </span>
                    </div>

                    {/* Footer */}
                    <div className="product-footer">
                      <div className="product-price">₹{product.price.toLocaleString()}</div>
                      <button className="add-to-cart-quick">+</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-products">
              <p>No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
