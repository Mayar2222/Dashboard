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
    setCommandes([
      ...commandes,
      {
        ...formData,
        id: Date.now()
      }
    ]);

    setFormData({
      nomPrenom: '',
      telephone: '',
      genre: '',
      adresse: '',
      produits: [],
      quantites: [],
      promotion: '',
      adressePickup: ''
    });

    setConfirmationMessage('Commande confirmée !');

    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  const handleRemoveCommande = (id) => {
    setCommandes(commandes.filter((commande) => commande.id !== id));
  };

  const handleModifyCommande = (id) => {
    const commande = commandes.find((commande) => commande.id === id);
    setFormData(commande);
    handleRemoveCommande(id); // Remove it first before editing
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="w-1/4 bg-gray-100 dark:bg-gray-800">
        <SideBar />
      </div>
      <div className="w-3/4 p-8 mx-auto overflow-y-auto">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 space-y-6">
          {/* Form sections */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>Formulaire d'ajout de commande</span>
                  <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                  {/* Form fields */}
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Nom et prénom:</span>
                    <input
                      type="text"
                      name="nomPrenom"
                      value={formData.nomPrenom}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Numéro de téléphone:</span>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Genre:</span>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                    >
                      <option value="">Sélectionnez un genre</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Adresse:</span>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                    />
                  </label>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Products Section */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 mt-2 text-sm font-medium text-left text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>Produits</span>
                  <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="space-y-4">
                    {formData.produits.map((produit, index) => (
                      <div key={index} className="flex items-center space-x-4 mb-2">
                        <input
                          type="text"
                          value={produit}
                          onChange={(e) => handleProductChange(index, e)}
                          className="w-1/2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                          placeholder="Nom du produit"
                        />
                        <input
                          type="number"
                          value={formData.quantites[index] || ''}
                          onChange={(e) => handleQuantityChange(index, e)}
                          className="w-1/4 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                          placeholder="Quantité"
                        />
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={handleAddProduct}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                    >
                      Ajouter un produit
                    </button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Promotion Section */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 mt-2 text-sm font-medium text-left text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>Promotion</span>
                  <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Promotion (%):</span>
                    <input
                      type="number"
                      name="promotion"
                      value={formData.promotion}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                    />
                  </label>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Pickup Address Section */}
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 mt-2 text-sm font-medium text-left text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>Adresse de pickup</span>
                  <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                  <label className="block">
                    <span className="text-gray-700 dark:text-gray-300">Adresse de pickup:</span>
                    <select
                      name="adressePickup"
                      value={formData.adressePickup}
                      onChange={handleChange}
                      className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-blue-200 dark:bg-gray-600 dark:text-gray-100"
                    >
                      <option value="">Sélectionnez une adresse</option>
                      <option value="Adresse 1">Localisation 1</option>
                      <option value="Adresse 2">Adresse 2</option>
                    </select>
                  </label>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Confirmer la commande
            </button>
          </div>
        </form>

        {confirmationMessage && (
          <div className="mt-4 p-4 text-center text-white bg-green-500 rounded-lg shadow">
            {confirmationMessage}
          </div>
        )}

        {/* Display list of commandes */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Commandes</h3>
          {commandes.map((commande) => (
            <div key={commande.id} className="bg-gray-100 p-4 rounded-lg shadow mt-4">
              <p><strong>Nom et prénom:</strong> {commande.nomPrenom}</p>
              <p><strong>Produits:</strong> {commande.produits.join(', ')}</p>
              <p><strong>Promotion:</strong> {commande.promotion}%</p>
              <p><strong>Adresse Pickup:</strong> {commande.adressePickup}</p>
              <div className="flex space-x-4 mt-2">
                <button
                  onClick={() => handleModifyCommande(commande.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleRemoveCommande(commande.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Header />
    </div>
  );
};

export default CommandeForm;
