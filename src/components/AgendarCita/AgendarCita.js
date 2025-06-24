import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './AgendarCita.css';
import { emailjsConfig } from '../../constants/Constants.js'

const AgendarCita = () => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    petName: "",
    petClase: "",
    date: "",
    hour: "",
  });

  const [showModal, setShowModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];
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
    //try {
    //  const response = await fetch("http://localhost:8000/api/citas", {
    //    method: "POST",
    //    headers: {
    //      "Content-Type": "application/json",
    //    },
    //    body: JSON.stringify(form),
    //  });
    //  if (response.ok) {
    //    alert("Cita agendada correctamente");
    //  } else {
    //    alert("Error al agendar la cita");
    //  }
    //} catch (error) {
    //  alert("Error de conexión");
    //}
    getEmailContent(form);
    setShowModal(true);
  };

  function getEmailContent({ name, lastName, email, phone, petName, petClase, date, hour }) {
    emailjs.send(
      emailjsConfig.serviceId, // Reemplaza por tu Service ID
      emailjsConfig.templateId, // Reemplaza por tu Template ID
      {
        to_email: email,
        to_name: name,
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        petName: petName,
        petClase: petClase,
        date: date,
        hour: hour,
      },
      emailjsConfig.userId
    );
  }

  function getGoogleCalendarUrl({ petName, date, hour, name, lastName }) {
    // Formato: YYYYMMDDTHHMMSSZ (hora UTC)
    const start = new Date(`${date}T${hour}:00`);
    const end = new Date(start.getTime() + 60 * 60000); // 30 minutos después

    function formatDate(d) {
      return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }

    const startStr = formatDate(start);
    const endStr = formatDate(end);

    const details = encodeURIComponent(`Cita agendada para ${petName} con ${name} ${lastName}`);
    const location = encodeURIComponent("Safarivet, TV 18 Bis #13 Sur 40, Bogotá");
    const text = encodeURIComponent(`Cita para ${petName} - Safarivet`);
    const guest = encodeURIComponent('safarivetbogota@gmail.com');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${startStr}/${endStr}&details=${details}&location=${location}&add=${guest}`;
  }

  const closeModal = () => setShowModal(false);

  return (
    <div>
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
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        )}
        <button type="submit">CONFIRMAR CITA</button>
      </form>

      {showModal && (
        <>
          {/* Fondo oscuro del modal */}
          <div className="custom-modal-backdrop modal-backdrop fade show"></div>
          {/* Modal */}
          <div className="custom-modal-overlay modal fade show" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">¡Cita Agendada!</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    La cita para <strong>{form.petName}</strong> fue agendada
                    para el día <strong>{form.date}</strong> a las{" "}
                    <strong>{form.hour}</strong>.
                  </p>
                  <p>Te hemos enviado un correo de confirmación.</p>
                </div>
                <div className="modal-footer">
                  <a
                    href={getGoogleCalendarUrl(form)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success"
                  >
                    Agregar a Google Calendar
                  </a>
                  <button  type="button" className="btn btn-primary" onClick={closeModal}>
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AgendarCita;