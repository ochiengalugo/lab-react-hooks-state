import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Apple", category: "Produce" },
];

function ProductList({ category, onAddToCart }) {
  const filteredProducts = productsData.filter(p => 
    category === "All" || p.category === category
  );

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  );
}

export default ProductList;