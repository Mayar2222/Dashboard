import React, { useState } from 'react';
import { HiOutlineTag, HiOutlineFolder } from 'react-icons/hi';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

const Specificites = () => {
  const [formState, setFormState] = useState({
    specificiteName: '',
    category: '',
    isColor: false,
  });

  const [specificitesList, setSpecificitesList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const categories = ['Electronique', 'Meubles'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedList = [...specificitesList];
      updatedList[editIndex] = formState;
      setSpecificitesList(updatedList);
      setIsEditing(false);
    } else {
      setSpecificitesList([...specificitesList, formState]);
    }

    setFormState({
      specificiteName: '',
      category: '',
      isColor: false,
    });
  };

  const handleEdit = (index) => {
    setFormState(specificitesList[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setSpecificitesList(specificitesList.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <div className="w-1/4 bg-gray-100 dark:bg-gray-800">
        <SideBar />
      </div>
      <div className="w-3/4 flex justify-center items-center p-6">
        <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
            {isEditing ? 'Modifier une Spécificité' : 'Ajouter une Spécificité'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center">
              <HiOutlineTag className="text-gray-500 dark:text-gray-300 mr-2" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nom de la spécificité:
                </label>
                <input
                  type="text"
                  name="specificiteName"
                  value={formState.specificiteName}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="flex items-center">
              <HiOutlineFolder className="text-gray-500 dark:text-gray-300 mr-2" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Catégorie:
                </label>
                <select
                  name="category"
                  value={formState.category}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-100"
                >
                  <option value="">Sélectionner une catégorie</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isColor"
                checked={formState.isColor}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Couleur
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {isEditing ? 'Modifier' : 'Ajouter'}
            </button>
          </form>

          {specificitesList.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Liste des spécificités ajoutées :
              </h3>
              <ul className="space-y-4">
                {specificitesList.map((specificite, index) => (
                  <li key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                    <div className="font-semibold text-gray-800 dark:text-gray-100">
                      {specificite.specificiteName}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Catégorie: {specificite.category}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {specificite.isColor ? 'Couleur: Oui' : 'Couleur: Non'}
                    </div>
                    <div className="mt-2 flex justify-between">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                      >
                        Supprimer
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Specificites;
