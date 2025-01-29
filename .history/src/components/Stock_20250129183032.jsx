// src/App.js
import React, { useState } from 'react';
import './../App.css';
import StockTable from './../components/StockTable';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';
const initialProducts = [
  {
    id: 1,
    name: 'Iphone',
    quantity: 12,
  },
 
  // Ajoutez d'autres produits ici
];

function Stock() {
  const [products, setProducts] = useState(initialProducts);

  const handleLoadStock = (productId) => {
    // Logique pour charger le stock du produit
    alert(`Charger le stock pour le produit avec l'ID ${productId}`);
    
    // Vous pouvez également mettre à jour la quantité de stock ici
    // const updatedProducts = products.map(product =>
    //   product.id === productId ? { ...product, quantity: product.quantity + 10 } : product
    // );
    // setProducts(updatedProducts);
  };

  return (
    <div className="app-container">
       <div className="w-1/4">
      <SideBar></SideBar>
      
        
      </div>
      <div className="main-content">
        <h1>Tableau de Stock</h1>
        <StockTable products={products} onLoadStock={handleLoadStock} />
      </div>
      <Header></Header>
    </div>
  );
}

export default Stock;
