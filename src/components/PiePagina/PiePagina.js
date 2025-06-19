import React, { useState } from 'react';
import logo from './../../logo SafariVet1.png';
import { WHATSAPP_NUMBER, ADDRESS, PHONE, INSTAGRAM_URL, MAIL_URL, EMAIL, INSTAGRAM } from '../../constants/Constants';
import './PiePagina.css';

function PiePagina() {
  return (
    <footer className="footer  text-light py-4 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo y nombre */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex align-items-center">
            <img src={logo} alt="Safarivet Logo" style={{ width: 50, height: 50, marginRight: 12 }} />
            <span className="fs-5 fw-bold">Safarivet</span>
          </div>
          {/* Información de contacto */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
                {ADDRESS}
              </li>
              <li>
                <i className="bi bi-whatsapp me-2 text-success"></i>
                {PHONE}
              </li>
              <li>
                <i className="bi bi-instagram me-2" style={{ color: '#E1306C' }}></i>
                {INSTAGRAM}
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                {EMAIL}
              </li>
            </ul>
          </div>
          {/* Redes sociales */}
          <div className="col-12 col-md-4 text-md-end">
            <a href={WHATSAPP_NUMBER} target="_blank" rel="noopener noreferrer" className="text-success me-3 fs-4">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-danger me-3 fs-4">
              <i className="bi bi-instagram"></i>
            </a>
            <a href={MAIL_URL} className="text-primary fs-4">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-3 small">
          &copy; {new Date().getFullYear()} Safarivet. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default PiePagina;