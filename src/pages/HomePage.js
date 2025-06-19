import React from 'react';
import './HomePage.css';
import Carousel from '../components/Carousel/Carousel'
import AgendarCita from '../components/AgendarCita/AgendarCita'
import CarouselPlanes from '../components/CarouselPlanes/CarouselPlanes'
import CarouselServicios from '../components/CarouselServicios/CarouselServicios'
import ServiciosLista from '../components/ServiciosLista/ServiciosLista';

export default function HomePage() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="form-section">
        <p>EN SAFARIVET PUEDES RESERVAR UNA CONSULTA MÉDICA EN LÍNEA</p>
        <AgendarCita />
      </div>
      <div className="form-section row align-items-center">
        <div id="serviciosLista" className="col-12 col-md-6">
          <ServiciosLista />
        </div>
        <div
          id="serviciosCarousel"
          className="carousel slide col-12 col-md-6"
          data-bs-ride="carousel"
        >
          <CarouselServicios />
        </div>
        
      </div>
      <div className="d-flex justify-content-center">
  
      <div className="carousel slide form-section-planes"
        id="planesCarousel"
        data-bs-ride="carousel">
        <CarouselPlanes />
      </div>
      </div>
    </div>
  );
}