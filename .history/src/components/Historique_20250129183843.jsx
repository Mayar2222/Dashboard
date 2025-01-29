// src/App.js
import React from 'react';
import './../App.css';
import StockTransactionsTable from './StockTransactionsTable ';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

const transactions = [
  {
    id: 1,
    orderNumber: 'CMD001',
    productName: ' Iphone',
    quantityAdjustment: '0',
    remainingQuantity: '0',
    message: 'Commande ajoutée',
    location: 'Sahloul',
    createdAt: '2024-07-29 10:00',
  },
  {
    id: 2,
    orderNumber: 'CMD001',
    productName: ' Iphone',
    quantityAdjustment: '+12',
    remainingQuantity: '12',
    message: 'Réception de stock',
    location: 'Sahloul',
    createdAt: '2024-07-29 10:00',
  },
 
  // Ajoutez d'autres transactions ici
];

function Historique() {
  return (
    
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/4 bg-gray-100">
        <SideBar />
      </div>
      <div className="w-3/4 flex flex-col items-center p-6">
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
  Transactions de Stock
</h1>
          <div className="overflow-x-auto">
            <StockTransactionsTable transactions={transactions} />
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default Historique;
