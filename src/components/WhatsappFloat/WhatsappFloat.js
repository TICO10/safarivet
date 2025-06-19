import React from 'react';
import './WhatsappFloat.css';
import { WHATSAPP_NUMBER } from '../../constants/Constants.js';

export default function WhatsappFloat() {
  return (
    <div>
      <a
          href={WHATSAPP_NUMBER}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatea por WhatsApp"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
    </div>
  );
}