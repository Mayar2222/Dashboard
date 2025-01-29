import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

const CommandeForm = () => {
  const [formData, setFormData] = useState({
    nomPrenom: '',
    telephone: '',
    genre: '',
    adresse: '',
    produits: [],
    quantites: [],
    promotion: '',
    adressePickup: ''
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [commandes, setCommandes] = useState([]);

  const produitsDisponibles = [
    "iPhone 15", "Samsung Galaxy S23", "MacBook Pro", "AirPods Pro", "iPad Air"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProductChange = (index, e) => {
    const { value } = e.target;
    const updatedProduits = [...formData.produits];
    updatedProduits[index] = value;
    setFormData({
      ...formData,
      produits: updatedProduits
    });
  };

  const handleQuantityChange = (index, e) => {
    const { value } = e.target;
    const updatedQuantites = [...formData.quantites];
    updatedQuantites[index] = value;
    setFormData({
      ...formData,
      quantites: updatedQuantites
    });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      produits: [...formData.produits, ''],
      quantites: [...formData.quantites, '']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommandes([...commandes, { ...formData, id: Date.now() }]);
    setFormData({
      nomPrenom: '', telephone: '', genre: '', adresse: '',
      produits: [], quantites: [], promotion: '', adressePickup: ''
    });
    setConfirmationMessage('Commande confirmée !');
    setTimeout(() => setConfirmationMessage(''), 3000);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="w-1/4 bg-gray-100 dark:bg-gray-800">
        <SideBar />
      </div>
      <div className="w-3/4 p-8 mx-auto overflow-y-auto">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 space-y-6">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Nom et prénom:</span>
            <input type="text" name="nomPrenom" value={formData.nomPrenom} onChange={handleChange} className="w-full p-2 mt-1 border rounded-lg dark:bg-gray-600 dark:text-gray-100" />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Numéro de téléphone:</span>
            <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className="w-full p-2 mt-1 border rounded-lg dark:bg-gray-600 dark:text-gray-100" />
          </label>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800">
                  <span>Produits</span>
                  <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                  {formData.produits.map((produit, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-2">
                      <select value={produit} onChange={(e) => handleProductChange(index, e)} className="w-1/2 p-2 border rounded-lg dark:bg-gray-600 dark:text-gray-100">
                        <option value="">Sélectionnez un produit</option>
                        {produitsDisponibles.map((p, i) => (
                          <option key={i} value={p}>{p}</option>
                        ))}
                      </select>
                      <input type="number" value={formData.quantites[index] || ''} onChange={(e) => handleQuantityChange(index, e)} className="w-1/4 p-2 border rounded-lg dark:bg-gray-600 dark:text-gray-100" placeholder="Quantité" />
                    </div>
                  ))}
                  <button type="button" onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Ajouter un produit</button>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Confirmer la commande</button>
        </form>
        {confirmationMessage && <div className="mt-4 p-4 text-center text-white bg-green-500 rounded-lg shadow">{confirmationMessage}</div>}
      </div>
      <Header />
    </div>
  );
};

export default CommandeForm;
