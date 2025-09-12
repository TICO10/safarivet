import React from 'react';
import './Servicios.css';
import CarouselServicios from '../CarouselServicios/CarouselServicios';
import { useParams } from 'react-router-dom';
import { servicios } from '../../constants/Constants.js';

const Servicios = () => {
  const { value } = useParams();
  const serviciosFiltrados = value === 'todos' ? 
    servicios :
    servicios.filter(
      (servicio) => servicio.value === value
    );
  return (
    <div className="container my-5">
      <h1 className="title">{value === 'todos' ? 'SERVICIOS' : serviciosFiltrados[0].value.toUpperCase()}</h1>
      {serviciosFiltrados.length > 0 ? (
        <div className="row">
        {serviciosFiltrados
        .filter(servicio => servicio.value !== 'todos')
        .map((servicio, idx) => (
          <div className="col-12 col-md-6 mb-4" key={idx}>
            <div className="card h-100">
              <img src={servicio.img} className="card-img-top" alt={servicio.titulo} />
              <div className="card-body">
                <h5 className="card-title title">{servicio.titulo}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: servicio.text }}></p>
              </div>
            </div>
          </div>
        ))}
        </div>
      ) : (
        <p>No se encontró el servicio solicitado.</p>
      )}
    </div>
  );
};

export default Servicios;