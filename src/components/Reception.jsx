import React from 'react';
import { Link } from 'react-router-dom';
import image3 from './../components/image3.jpg';

export default function Reception() {
  return (
    <div
      style={{
        margin: 0,
        fontFamily: "'Poppins', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        minHeight: '100vh',
        backgroundImage: `url(${image3})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Align items to the left
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Navbar */}
      <nav className="bg-transparent text-[#C4A484] p-4 w-full absolute top-0 left-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Reception
          </Link>
          <div>
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-[#0039F5] text-white hover:bg-[#b69b77] transition-colors duration-200" // Button color set to #C4A484
            >
              Connect
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-6 max-w-md w-full text-left" style={{ marginLeft: '20px' }}>
        <div className="text-4xl font-bold mb-4 flex flex-col items-start justify-center">
          <span className="text-shadow">
            Votre logisticien préféré enfin trouvé.
          </span>
        </div>
        <p className="text-lg font-light text-shadow">
          Des solutions e-commerce de la stratégie de marque à la livraison au dernier kilomètre.
        </p>
      </div>

      {/* CSS for text shadow */}
      <style jsx>{`
        .text-shadow {
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}