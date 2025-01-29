import { Disclosure } from '@headlessui/react';
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

const ProduitPage = () => {
  const [formData, setFormData] = useState({
    nomProduit: '',
    description: '',
    prix: '',
    quantite: '',
    categorie: '',
    image: '',
  });

  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const categories = [
    {
      id: 1,
      name: 'Électronique',
      specificites: ['Marque'],
    },
    {
      id: 2,
      name: 'Vêtements',
      specificites: ['Taille', 'Couleur', 'Matériau'],
    },
    // Ajoutez d'autres catégories ici
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      nomProduit: '',
      description: '',
      prix: '',
      quantite: '',
      categorie: '',
      image: '',
    });
    setConfirmationMessage('Produit ajouté avec succès !');
    setShowForm(false);
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleModifyProduct = (index) => {
    const productToModify = products[index];
    setFormData(productToModify);
    handleRemoveProduct(index);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4 p-8 mx-auto overflow-y-auto">
        <button
          onClick={() => setShowForm(true)}
          className="w-full py-2 px-4 bg-[#6744ff] text-white rounded-md hover:bg-[#5b3ce0] focus:ring focus:ring-[#6744ff] mb-4"
        >
          Ajouter un produit
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 space-y-6">
            {['nomProduit', 'description', 'prix', 'quantite', 'categorie'].map((field, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-[#6744ff] dark:text-[#c3b4ff] bg-[#f4f7fe] dark:bg-gray-700 rounded-lg hover:bg-[#e0e7ff] dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-[#6744ff] focus-visible:ring-opacity-75">
                      <span>{field === 'nomProduit' ? 'Nom du produit' : field === 'description' ? 'Description' : field.charAt(0).toUpperCase() + field.slice(1)}</span>
                      <span>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-4 mt-2 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                      {field === 'description' ? (
                        <textarea
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-[#6744ff] dark:bg-gray-800 dark:text-gray-100"
                          placeholder="Description du produit"
                        />
                      ) : field === 'categorie' ? (
                        <select
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-[#6744ff] dark:bg-gray-800 dark:text-gray-100"
                        >
                          <option value="">Sélectionnez une catégorie</option>
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.name}>
                              {cat.name}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field === 'prix' || field === 'quantite' ? 'number' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-[#6744ff] dark:bg-gray-800 dark:text-gray-100"
                          placeholder={`Entrez le ${field}`}
                        />
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}

            {formData.categorie && (
              <div>
                {categories
                  .find((cat) => cat.name === formData.categorie)
                  .specificites.map((spec, index) => (
                    <input
                      key={index}
                      type="text"
                      name={spec}
                      value={formData[spec] || ''}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-[#6744ff] dark:bg-gray-800 dark:text-gray-100"
                      placeholder={`Entrez la ${spec}`}
                    />
                  ))}
              </div>
            )}

            <div>
              <input
                type="file"
                name="image"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setFormData({ ...formData, image: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring focus:ring-[#6744ff] dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#6744ff] text-white rounded-md hover:bg-[#5b3ce0] focus:ring focus:ring-[#6744ff]"
              >
                Ajouter le produit
              </button>
            </div>
          </form>
        )}

        {confirmationMessage && (
          <div className="mt-4 p-4 text-center text-white bg-green-500 rounded-lg shadow">
            {confirmationMessage}
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Liste des produits :</h2>
          <ul className="space-y-2">
            {products.map((product, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <strong>{product.nomProduit}</strong><br />
                Description: {product.description}<br />
                Prix: {product.prix} <br />
                Quantité: {product.quantite} <br />
                Catégorie: {product.categorie} <br />
                {product.image && <img src={product.image} alt="Produit" className="w-20 h-20 mt-2" />} <br />
                <button
                  onClick={() => handleModifyProduct(index)}
                  className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleRemoveProduct(index)}
                  className="mt-2 ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 focus:ring-2 focus:ring-red-500"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default ProduitPage;