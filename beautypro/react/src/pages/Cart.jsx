
// src/pages/Cart.jsx
import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const updateCart = (items) => {
    setCartItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const increaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    );
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    updateCart(updated);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="new-cart">
      <h1>Your Beauty Bag</h1>

      {cartItems.length === 0 ? (
        <p className="empty-msg">Your cart is feeling lonely 💔</p>
      ) : (
        <div className="cart-grid">
          {cartItems.map(item => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="card-details">
                <h3>{item.name}</h3>
                <p>₹{item.price} x {item.qty}</p>
                <div className="qty-control">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="checkout-bar">
          <h2>Total: ₹{total}</h2>
          <button className="checkout-button">Checkout Now</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
