import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  const phoneNumber = "919876543210";
  const waMessage = `Hello INAI Travels, I want to book a vehicle.\n\nPickup Location:\nDrop Location:\nDate:\nVehicle Type:`;
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="floating-actions">
      <style dangerouslySetInnerHTML={{ __html: `
        .floating-actions {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 9999;
        }
        .fab {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }
        .fab:hover {
          transform: scale(1.1) translateY(-5px);
        }
        .fab-call {
          background: var(--primary);
        }
        .fab-whatsapp {
          background: #25D366;
        }
        @media (max-width: 768px) {
          .floating-actions {
            bottom: 1.5rem;
            right: 1.5rem;
          }
          .fab {
            width: 55px;
            height: 55px;
          }
        }
      `}} />

      <a href={`tel:+${phoneNumber}`} className="fab fab-call" title="Call Now">
        <Phone size={28} />
      </a>
      
      <a href={waLink} target="_blank" rel="noreferrer" className="fab fab-whatsapp" title="WhatsApp Enquiry">
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default FloatingButtons;
