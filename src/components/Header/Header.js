import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../logo SafariVet1.png';
import './Header.css';
import { servicios } from '../../constants/Constants.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  const handleServiciosClick = () => {
    setServiciosOpen((prev) => !prev);
  };

  // Cierra el menú de servicios al hacer click fuera
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setServiciosOpen(false);
      }
    };
    if (serviciosOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [serviciosOpen]);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt='Logo' className='img'/>SAFARIVET
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={handleServiciosClick}
          >
            Servicios {serviciosOpen ? (
              // Icono de colapsar (chevron up)
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              // Icono de expandir (chevron down)
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
          {serviciosOpen && (
            <div className="dropdown-content">
              {servicios
                .filter(servicio => servicio.visual === 1)
                .map((servicio, index) => (
                  <Link 
                    key={index}
                    to={`/servicios/${servicio.value}`}
                    onClick={() => { 
                      setMenuOpen(false); 
                      setServiciosOpen(false); 
                    }}
                  >
                    {servicio.titulo}
                  </Link>
                ))
              }
            </div>
          )}
        </div>
        <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;