import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useContext(CartContext);
  const [showBilling, setShowBilling] = useState(false);
  const [billingData, setBillingData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipcode: ''
  });

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="shop-btn">Go Shopping</Link>
        </div>
      </div>
    );
  }

  const total = getCartTotal();

  const handleBillingChange = (e) => {
    setBillingData({
      ...billingData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\n\nBilling Details:\nName: ${billingData.name}\nEmail: ${billingData.email}\nPhone: ${billingData.phone}\nAddress: ${billingData.address}\nCity: ${billingData.city}\nZip Code: ${billingData.zipcode}\n\nTotal: ₹${total}`);
    clearCart();
    setShowBilling(false);
    setBillingData({ name: '', email: '', phone: '', address: '', city: '', zipcode: '' });
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                  +
                </button>
              </div>
              
              <button 
                className="remove-btn" 
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total: ₹{total}</p>
        <button className="checkout-btn" onClick={() => setShowBilling(true)}>
          Checkout
        </button>
      </div>

      {showBilling && (
        <div className="billing-modal">
          <div className="billing-form-container">
            <h2>Billing Information</h2>
            <button className="close-btn" onClick={() => setShowBilling(false)}>×</button>
            
            <form onSubmit={handleCheckout}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={billingData.name}
                  onChange={handleBillingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={billingData.email}
                  onChange={handleBillingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={billingData.phone}
                  onChange={handleBillingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={billingData.address}
                  onChange={handleBillingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={billingData.city}
                  onChange={handleBillingChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipcode"
                  value={billingData.zipcode}
                  onChange={handleBillingChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Place Order</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
