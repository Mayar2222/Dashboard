import React, { useState } from 'react';
import AddLocationForm from './AddLocationForm';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';

const Localisations = () => {
  const [locations, setLocations] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [locationToEdit, setLocationToEdit] = useState(null); // To track which location is being edited
  const [editIndex, setEditIndex] = useState(null); // To track index of the location being edited

  const handleAddLocation = (newLocation) => {
    if (locationToEdit) {
      const updatedLocations = [...locations];
      updatedLocations[editIndex] = newLocation; // Update the location at editIndex
      setLocations(updatedLocations);
      setLocationToEdit(null);
      setEditIndex(null);
    } else {
      setLocations([...locations, newLocation]);
    }
    setIsFormVisible(false);
  };

  const handleRemoveLocation = (index) => {
    const updatedLocations = locations.filter((_, i) => i !== index);
    setLocations(updatedLocations);
  };

  const handleEditLocation = (index) => {
    setLocationToEdit(locations[index]);
    setEditIndex(index);
    setIsFormVisible(true);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-1/4 bg-gray-100 dark:bg-gray-800">
        <SideBar />
      </div>
      <div className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 overflow-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-4 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Mes Localisations</h1>
          <button
            onClick={() => {
              setIsFormVisible(true);
              setLocationToEdit(null); // Clear form if adding new location
              setEditIndex(null);
            }}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Ajouter une adresse
          </button>

          {isFormVisible && (
            <AddLocationForm
              onAddLocation={handleAddLocation}
              initialData={locationToEdit} // Pass initial data if editing
            />
          )}

          {locations.length > 0 ? (
            <ul className="mt-4">
              {locations.map((location, index) => (
                <li key={index} className="border-b border-gray-300 dark:border-gray-700 py-2 text-gray-800 dark:text-gray-100">
                  <span className="font-semibold">{location.name}</span> - {location.city}
                  <div className="mt-2">
                    <button
                      onClick={() => handleEditLocation(index)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleRemoveLocation(index)}
                      className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 focus:ring-2 focus:ring-red-500"
                    >
                      Supprimer
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-gray-500 dark:text-gray-400">Aucune localisation ajoutée.</p>
          )}
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Localisations;
