import React from 'react';
import './Planes.css';
import CarouselPlanes from '../../components/CarouselPlanes/CarouselPlanes';

// Reemplaza estos imports por tus imágenes reales
import foto1 from '../../assets/planes/PlanCachorros.jpg';
import foto2 from '../../assets/planes/PlanPrevencion.jpg';
import foto3 from '../../assets/planes/PlanMamitas.jpg';
import foto4 from '../../assets/planes/PlanViejitos.jpg';

const fotos = [foto1, foto2, foto3, foto4];

const Planes = () => (
  <div>
  <div className="row align-items-center">
    <div className="galeria-grid col-12 col-md-6">
      {fotos.map((foto, idx) => (
        <div className="d-flex flex-column gap-3">
          <img key={idx} src={foto} alt={`Galería ${idx + 1}`} className="galeria-img-plan"/>
        </div>
      ))}
    </div>
    <div
      id="planesCarousel"
      className="carousel slide col-12 col-md-6"
      data-bs-ride="carousel"
    >
      <CarouselPlanes />
    </div>
  </div>
  </div>
  
);

export default Planes;