import React from 'react';
import ProductCard from './ProductCard';

// The tests expect 'Apple' to be under 'Fruits'
const productsData = [
  { id: 1, name: "Apple", category: "Fruits" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Bread", category: "Bakery" },
];

function ProductList({ category, onAddToCart }) {
  const filteredProducts = productsData.filter(p => 
    category === "All" || p.category === category
  );

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p>No products available</p> 
      ) : (
        filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))
      )}
    </div>
  );
}

export default ProductList;