import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
      
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>

      <Cart cartItems={cart} />
      <ProductList category={category} onAddToCart={addToCart} />
    </div>
  );
}

export default App;