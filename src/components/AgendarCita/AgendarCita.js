import React, { useState } from 'react';
import './AgendarCita.css';

const AgendarCita = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    petName: '',
    petClase: '',
    date: '',
    hour: '',
  });

  const today = new Date().toISOString().split('T')[0];
  const hours = [];
  for (let h = 9; h <= 18; h++) {
    hours.push(`${h.toString().padStart(2, "0")}:00`);
    if (h !== 18) hours.push(`${h.toString().padStart(2, "0")}:30`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Solo permite números
      if (!/^\d*$/.test(value)) return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert('Cita agendada correctamente');
      } else {
        alert('Error al agendar la cita');
      }
    } catch (error) {
      alert('Error de conexión');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <input
        name="name"
        placeholder="Nombre*"
        type="text"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        placeholder="Apellido*"
        type="text"
        value={form.lastName}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email*"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Teléfono*"
        type="tel"
        value={form.phone}
        onChange={handleChange}
        required
        pattern="[0-9]+"
        inputMode="numeric"
      />
      <input
        name="petName"
        placeholder="Nombre de la mascota*"
        type="text"
        value={form.petName}
        onChange={handleChange}
        required
      />
      <select
        name="petClase"
        value={form.petClase}
        onChange={handleChange}
        required
      >
        <option value="">Clase de Mascota*</option>
        <option value="PERRO">Perro</option>
        <option value="GATO">Gato</option>
        <option value="OTRO">Otro</option>
      </select>
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        min={today}
        required
      />
      {form.date && (
        <select
          name="hour"
          value={form.hour}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una hora</option>
          {hours.map((hour) => (
            <option key={hour} value={hour}>{hour}</option>
          ))}
        </select>
      )}
      <button type="submit">CONFIRMAR CITA</button>
    </form>
  );
};

export default AgendarCita;