import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item} is in your cart.</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;