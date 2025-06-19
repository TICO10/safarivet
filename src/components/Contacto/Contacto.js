import React from 'react';
import './Contacto.css';
import { useParams, Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center-contacto">
        <i className="bi bi-envelope-at-fill me-2 text-primary"></i>Contáctanos
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <ul className="list-group mb-4">
            <li className="list-group-item">
              <i className="bi bi-whatsapp me-2" style={{ color: '#25d366' }}></i>
              <strong>Teléfono:</strong> +57 314 467 1515
            </li>
            <li className="list-group-item">
              <i className="bi bi-instagram me-2" style={{ color: '#E1306C' }}></i>
              <strong>Instagram:</strong> @safarivetbogota
            </li>
            <li className="list-group-item">
              <i className="bi bi-geo-alt-fill me-2 text-danger"></i>
              <strong>Dirección:</strong> TV 18 Bis #13 Sur 40, Bogotá
            </li>
            <li className="list-group-item">
              <i className="bi bi-envelope-fill me-2 text-primary"></i>
              <strong>Correo:</strong> safarivetbogota@gmail.com
            </li>
            <li className="list-group-item">
              <i className="bi bi-clock-fill me-2 text-warning"></i>
              <strong>Horario:</strong> 
              <p>Lunes a Sábado 9:00am - 7:00pm</p>
              <p>Domingos y festivos 9:00am - 3:00pm</p>
            </li>
          </ul>
          <div className="mb-3">
            <iframe
              title="Mapa Safarivet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.0482637765855!2d-74.09832534392267!3d4.586563746931517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99d5c84e016b%3A0x41e39f0c6c4ca15d!2sSafarivet!5e0!3m2!1ses-419!2sco!4v1750260335096!5m2!1ses-419!2sco"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;