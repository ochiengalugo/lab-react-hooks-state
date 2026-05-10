import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card" data-testid={`product-${product.id}`}>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <button onClick={() => onAddToCart(product.name)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;