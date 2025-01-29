import React, { useState } from 'react';
import { FaTag } from 'react-icons/fa'; // Import an icon
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

function Categories() {
  // State to manage the list of categories
  const [categories, setCategories] = useState([]);
  // State to manage the input value
  const [categoryName, setCategoryName] = useState('');
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Function to handle form submission (add or edit category)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      if (isEditing) {
        // Update the category
        const updatedCategories = [...categories];
        updatedCategories[editIndex] = categoryName.trim();
        setCategories(updatedCategories);
        setIsEditing(false);
      } else {
        // Add the new category
        setCategories([...categories, categoryName.trim()]);
      }
      setCategoryName(''); // Clear the input field
    }
  };

  // Handle editing a category
  const handleEdit = (index) => {
    setCategoryName(categories[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle removing a category
  const handleDelete = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className="dark:bg-gray-900">
      <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
        <div className="w-1/4 bg-gray-100 dark:bg-gray-800">
          <SideBar />
        </div>
        <div className="w-3/4 p-6 flex items-center justify-center">
          <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
            <h1 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-gray-200 flex items-center">
              <FaTag className="mr-3 text-[#6744ff]" />
              Catégories du produit
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <label className="block flex items-center">
                <span className="mr-4 text-gray-700 dark:text-gray-200 font-medium">Nom de la catégorie:</span>
                <input
                  type="text"
                  name="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-[#6744ff] focus:border-[#6744ff] dark:bg-gray-700 dark:text-gray-200"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-[#6744ff] text-white p-4 rounded-lg shadow-md hover:bg-[#5b3ce0] focus:outline-none focus:ring-2 focus:ring-[#6744ff] transition duration-200"
              >
                {isEditing ? 'Modifier' : 'Ajouter'}
              </button>
            </form>

            {/* Display the list of categories */}
            {categories.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Catégories ajoutées:
                </h2>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index} className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                      <span>{category}</span>
                      <div className="ml-4 flex">
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 mr-2"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
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
    </div>
  );
}

export default Categories;
