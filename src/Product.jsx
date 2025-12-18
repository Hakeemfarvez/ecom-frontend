import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "./ProductsData";
import { CartContext } from "./CartContext";

function Product() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <div className="products-header">
        <h1>Our Products</h1>
      </div>

      <div className="products-container">
        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="product-card">
                <Link to={`/product/${product._id}`} className="card-link">
                  <div className="card-img">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><rect fill='%23f3f4f6' width='100%25' height='100%25'/><text x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-size='22'>Image%20unavailable</text></svg>";
                      }}
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <Link to={`/product/${product._id}`} className="product-name-link">
                    <h3>{product.name}</h3>
                  </Link>
                  <div className="card-price">₹{product.price.toLocaleString()}</div>
                  <p className="product-desc">{product.description}</p>
                  <div className="card-actions">
                    <button 
                      className="buy-now-btn" 
                      onClick={(e) => handleBuyNow(e, product)}
                    >
                      Buy Now
                    </button>
                    <button 
                      className="add-cart-btn" 
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>Nothing here yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
