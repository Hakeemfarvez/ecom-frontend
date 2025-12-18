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

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <span className="detail-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">₹{product.price.toLocaleString()}</p>
          <p className="detail-description">{product.description}</p>
          
          <div className="qty-section">
            <label>Qty</label>
            <div className="qty-controls">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {addedToCart && (
            <p className="cart-success">Added ✓</p>
          )}

          <div className="simple-info">
            <span>✓ Free shipping over ₹500</span>
            <span>✓ 30-day returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
