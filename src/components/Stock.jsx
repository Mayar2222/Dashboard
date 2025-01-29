import React, { useState } from 'react';
import './../App.css';
import StockTable from './../components/StockTable';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

const initialProducts = [
  {
    id: 1,
    name: 'Iphone',
    quantity: 0,
  },
  // Ajoutez d'autres produits ici
];

function Stock() {
  const [products, setProducts] = useState(initialProducts);

  const handleLoadStock = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: 12 } : product
      )
    );
  };

  return (
    <div className="app-container">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="main-content">
        <h1>Tableau de Stock</h1>
        <StockTable products={products} onLoadStock={handleLoadStock} />
      </div>
      <Header />
    </div>
  );
}

export default Stock;
