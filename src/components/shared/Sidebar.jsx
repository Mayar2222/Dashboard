import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './../AuthContext';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';

const linkClasses =
  'flex items-center gap-2 px-4 py-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200';

const titleClasses = 'flex items-center gap-2 px-4 py-4 text-gray-900 dark:text-gray-100 text-2xl font-semibold';

export default function Sidebar() {
  const { pathname } = useLocation();
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [isGestionOpen, setIsGestionOpen] = useState(false);
  const { logout } = useAuth();

  const toggleCatalogue = (e) => {
    e.stopPropagation();
    setIsCatalogueOpen(prevState => !prevState);
  };

  const toggleGestion = (e) => {
    e.stopPropagation();
    setIsGestionOpen(prevState => !prevState);
  };

  return (
    <div className="bg-white dark:bg-gray-800 w-72 p-4 flex flex-col text-gray-900 dark:text-gray-100 h-full fixed shadow-lg">
      <div className={titleClasses}>
        
        <span>Massar</span>
      </div>
      <div className="flex-1 mt-6 space-y-4">
        <div>
          <button
            onClick={toggleCatalogue}
            className={`${linkClasses} ${isCatalogueOpen ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
          >
            <span className="text-xl" style={{ color: '#5f3aff' }}>📦</span>
            <span>Catalogue Produit</span>
            {isCatalogueOpen ? <AiOutlineDown style={{ color: '#5f3aff' }} /> : <AiOutlineRight style={{ color: '#5f3aff' }} />}
          </button>
          {isCatalogueOpen && (
            <div className="ml-6 mt-2 space-y-2">
              <Link to="/categories" className={linkClasses}>
                Catégories du produit
              </Link>
              <Link to="/produit" className={linkClasses}>
                Produit
              </Link>
              <Link to="/spf" className={linkClasses}>
                Spécificités
              </Link>
              <Link to="/historique" className={linkClasses}>
                Historique de stock
              </Link>
              <Link to="/stock" className={linkClasses}>
                Stock
              </Link>
              <Link to="/loc" className={linkClasses}>
                Mes localisations
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={toggleGestion}
            className={`${linkClasses} ${isGestionOpen ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
          >
            <span className="text-xl" style={{ color: '#5f3aff' }}>📋</span>
            <span>Gestion de commande</span>
            {isGestionOpen ? <AiOutlineDown style={{ color: '#5f3aff' }} /> : <AiOutlineRight style={{ color: '#5f3aff' }} />}
          </button>
          {isGestionOpen && (
            <div className="ml-6 mt-2 space-y-2">
              <Link to="/ajoutercomm" className={linkClasses}>
                Ajouter commande
              </Link>
              <Link to="/listecomm" className={linkClasses}>
                Liste des commandes
              </Link>
            </div>
          )}
        </div>

        {DASHBOARD_SIDEBAR_LINKS.filter(link => link.label !== "Catalogue Produit" && link.label !== "Gestion de commande").map(({ key, path, icon, label }) => (
          <Link
            key={key}
            to={path}
            className={`${linkClasses} ${pathname === path ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
          >
            {icon && <span className="text-xl" style={{ color: '#5f3aff' }}>{icon}</span>}
            <span>{label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(({ key, path, icon, label }) => (
          <Link
            key={key}
            to={path}
            className={`${linkClasses} ${pathname === path ? 'bg-gray-300 dark:bg-gray-700' : ''}`}
          >
            {icon && <span className="text-xl" style={{ color: '#5f3aff' }}>{icon}</span>}
            <span>{label}</span>
          </Link>
        ))}
        <button
          onClick={logout}
          className={`${linkClasses} mt-4 flex items-center justify-center w-full`} 
          style={{ backgroundColor: '#5f3aff', color: 'white' }}
        >
          <HiOutlineLogout className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}