import React from 'react';
import './CarouselServicios.css';
import { servicios } from '../../constants/Constants.js';

const CarouselServicios = () => (
  <div>
    <div className="carousel-inner">
      {servicios.map((servicio, idx) => (
        <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
          <div className="carousel-caption d-none d-md-block text-center">
            <h5>{servicio.titulo}</h5>
          </div>
          <img
            src={servicio.img}
            className="d-block w-100 galeria-img"
            alt={servicio.titulo}
          />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#serviciosCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#serviciosCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
);

export default CarouselServicios;