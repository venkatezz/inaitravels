import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const GlobalConversionBar = () => {
  const phoneNumber = "919876543210";
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .floating-wa-btn {
          position: fixed; bottom: 5rem; right: 2rem; width: 65px; height: 65px;
          background: var(--whatsapp); color: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px rgba(37,211,102,0.4); z-index: 9999;
          transition: 0.3s;
        }
        .floating-wa-btn:hover { transform: scale(1.1); }
        @media (max-width: 768px) { .floating-wa-btn { display: none; } }

        .mobile-bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          display: flex;
          padding: 0.85rem;
          gap: 0.85rem;
          box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
          z-index: 10002;
        }

        @media (min-width: 768px) {
          .mobile-bottom-bar { display: none; }
        }

        .bottom-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.9rem;
          border-radius: 12px;
          font-weight: 850;
          font-size: 1rem;
          color: white;
          text-decoration: none;
        }

        .bb-call { background: var(--primary); }
        .bb-wa { background: var(--whatsapp); }
      `}} />

      {/* Floating WA for Desktop */}
      <a href={waLink} className="floating-wa-btn" title="Contact Us on WhatsApp">
        <MessageCircle size={35} />
      </a>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="mobile-bottom-bar">
         <a href={`tel:+${phoneNumber}`} className="bottom-btn bb-call">
            <Phone size={20} /> CALL NOW
         </a>
         <a href={waLink} className="bottom-btn bb-wa">
            <MessageCircle size={20} /> WHATSAPP
         </a>
      </div>
    </>
  );
};

export default GlobalConversionBar;
