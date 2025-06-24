import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import PiePagina from './components/PiePagina/PiePagina';
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import AgendarCitaPage from './pages/AgendarCitaPage';
import PlanesPage from './pages/PlanesPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios/:value" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/agendar-cita" element={<AgendarCitaPage />} />
        <Route path="/planes" element={<PlanesPage />} />
      </Routes>
      <WhatsappFloat />
      <PiePagina />
    </>
  );
}

export default App;
