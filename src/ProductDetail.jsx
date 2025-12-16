import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductsData';
import { CartContext } from './CartContext';

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p._id === productId);
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="product-detail-container">
        <h1>Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) setQuantity(value);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">₹{product.price.toLocaleString()}</p>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity" value={quantity} onChange={handleQuantityChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <button
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

          {addedToCart && (
            <p className="success-message">✓ Added to cart successfully!</p>
          )}

          <div className="product-details-features">
            <h3>Why Choose This?</h3>
            <ul>
              <li>100% Authentic Product</li>
              <li>Free Shipping on Orders Above ₹500</li>
              <li>Easy 30-Day Returns</li>
              <li>24/7 Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
