import React from 'react';
import './CarouselServicios.css';

// Reemplaza estos imports por tus imágenes reales
import foto1 from '../../assets/servicios/CIRUJIAS.jpg';
import foto2 from '../../assets/servicios/CONSULTAGENERAL.jpg';
import foto3 from '../../assets/servicios/CONSULTANOCONVENCIONALES.jpg';
import foto4 from '../../assets/servicios/CONSULTASESPECIALIZADAS.jpg';
import foto5 from '../../assets/servicios/HOSPITALIZACION.jpg';
import foto6 from '../../assets/servicios/ORTOPEDIA.jpg';
import foto7 from '../../assets/servicios/PROFILAXIS.jpg';
import foto8 from '../../assets/servicios/RADIOGRAFIA.jpg';
import foto9 from '../../assets/servicios/URGENCIAS.jpg';

const servicios = [
  { img: foto1, titulo: 'Cirugías' },
  { img: foto2, titulo: 'Consulta General' },
  { img: foto3, titulo: 'Consulta No Convencionales' },
  { img: foto4, titulo: 'Consultas Especializadas' },
  { img: foto5, titulo: 'Hospitalización' },
  { img: foto6, titulo: 'Ortopedia' },
  { img: foto7, titulo: 'Profilaxis' },
  { img: foto8, titulo: 'Radiografía' },
  { img: foto9, titulo: 'Urgencias' },
];

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