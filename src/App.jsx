import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import AjouterCommande from "./components/AjouterCommande";
import Categories from "./components/Categories";
import Historique from "./components/Historique";
import ListComm from "./components/ListComm";
import Login from "./components/Login";
import Produit from "./components/Produit";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/shared/Layout";
import Specificites from "./components/Specificites";
import Stock from "./components/Stock";
import Localisations from "./components/Localisations"; // Import the new Localisations component
import { AuthProvider } from "./components/AuthContext";
import Register from "./components/Register";
import Reception from "./components/Reception";  // Import the new Reception component
import React from 'react';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Reception />} /> {/* Set Reception as the default route */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/produit" element={<Produit />} />
          <Route path="/spf" element={<Specificites />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/ajoutercomm" element={<AjouterCommande />} />
          <Route path="/listecomm" element={<ListComm />} />
          <Route path="/loc" element={<Localisations />} /> {/* Add route for localisations */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;