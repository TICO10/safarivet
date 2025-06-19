import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/SafariVet.jpg';
import img2 from '../../assets/SafariVet2.jpg';
import './Carousel.css'; // Asegúrate de tener los estilos

const images = [img1, img2];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="hero"
      style={{
        background: `url(${images[current]}) center/cover no-repeat`,
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="hero-content">
        <h1>20% DE DESCUENTO EN VACUNACIÓN</h1>
        <p>TODOS LOS MIÉRCOLES</p>
        <button className="hero-btn" onClick={() => navigate("/agendar-cita")}>
          AGENDAR UNA CITA
        </button>
        <button className="hero-btn" onClick={() => navigate("/planes")}>
          VER PLANES
        </button>
      </div>
      <div className="carousel-controls">
        <button
          className="btn btn-dark"
          onClick={goToPrev}
          aria-label="Anterior"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="btn btn-dark"
          onClick={goToNext}
          aria-label="Siguiente"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;