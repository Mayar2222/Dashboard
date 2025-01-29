// src/components/AddLocationForm.jsx
import React, { useState } from 'react';

const AddLocationForm = ({ onAddLocation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = { name, phone, city, postalCode, address };
    onAddLocation(newLocation);
    // Reset form
    setName('');
    setPhone('');
    setCity('');
    setPostalCode('');
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-medium">Nom de la localisation:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Numéro de téléphone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Ville:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Code postal:</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Adresse:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Enregistrer
      </button>
    </form>
  );
};

export default AddLocationForm;