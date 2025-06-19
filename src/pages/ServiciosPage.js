import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Servicios from '../components/Servicios/Servicios';
import ServiciosLista from '../components/ServiciosLista/ServiciosLista';

export default function ServiciosPage() {
  const { value } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  return (
    
    <div className="container py-4">
      <Servicios value={value} />
      <ServiciosLista />
    </div>
  );
}