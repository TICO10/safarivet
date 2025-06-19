import React from 'react';
import './CarouselPlanes.css';

// Reemplaza estos imports por tus imágenes reales
import foto1 from '../../assets/planes/PlanCachorros.jpg';
import foto2 from '../../assets/planes/PlanPrevencion.jpg';
import foto3 from '../../assets/planes/PlanMamitas.jpg';
import foto4 from '../../assets/planes/PlanViejitos.jpg';

const fotos = [foto1, foto2, foto3, foto4];

const CarouselPlanes = () => (
  <div>
    <p className="title">PLANES</p>
    <div className="carousel-inner">
      {fotos.map((foto, idx) => (
        <div className={`carousel-item${idx === 0 ? " active" : ""}`} key={idx}>
          <img
            src={foto}
            className="d-block w-100 galeria-img"
            alt={`Plan ${idx + 1}`}
          />
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#planesCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Anterior</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#planesCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Siguiente</span>
    </button>
  </div>
);

export default CarouselPlanes;