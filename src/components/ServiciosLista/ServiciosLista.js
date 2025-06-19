import React from 'react';
import './ServiciosLista.css';
import { useParams, Link } from 'react-router-dom';
import { servicios } from '../../constants/Constants.js';

const ServiciosLista = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 title-services">Servicios Veterinarios</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <ul className="list-group mb-5">
            {servicios.length > 0 ? (
              servicios.map((servicio, idx) => (
                <li className="list-group-item" id={servicio.value} key={idx}>
                  <Link className="text-decoration-none" to={`/servicios/${servicio.value}`}>
                    {servicio.titulo}
                  </Link>
                </li>
              ))
            ) : (
              <p>No se encontró el servicio solicitado.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiciosLista;