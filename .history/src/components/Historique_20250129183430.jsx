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
    quantityAdjustment: '+12',
    remainingQuantity: '12',
    message: 'Réception de stock',
    location: 'Localisation 1',
    createdAt: '2024-07-29 10:00',
  },
  {
    id: 2,
    orderNumber: 'CMD002',
    productName: 'montaux',
    quantityAdjustment: '+5',
    remainingQuantity: '95',
    message: 'Réception de stock',
    location: 'Entrepôt 2',
    createdAt: '2024-07-30 11:15',
  },
  {
    id: 3,
    orderNumber: 'CMD003',
    productName: 'iphone',
    quantityAdjustment: '-3',
    remainingQuantity: '87',
    message: 'Retrait de stock',
    location: 'Entrepôt 1',
    createdAt: '2024-07-31 09:45',
  },
  {
    id: 4,
    orderNumber: 'CMD004',
    productName: 'casque blutooth',
    quantityAdjustment: '+20',
    remainingQuantity: '110',
    message: 'Réception de stock',
    location: 'Entrepôt 3',
    createdAt: '2024-08-01 14:30',
  },
  {
    id: 5,
    orderNumber: 'CMD005',
    productName: 'souris sans fil',
    quantityAdjustment: '-10',
    remainingQuantity: '80',
    message: 'Retrait de stock pour commande client',
    location: 'Entrepôt 2',
    createdAt: '2024-08-02 16:00',
  },
  {
    id: 6,
    orderNumber: 'CMD006',
    productName: 'Produit F',
    quantityAdjustment: '+15',
    remainingQuantity: '95',
    message: 'Réception de stock après commande fournisseur',
    location: 'Entrepôt principal',
    createdAt: '2024-08-03 13:20',
  }
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
          <h1 className="text-2xl font-bold mb-6 text-center">Transactions de Stock</h1>
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
