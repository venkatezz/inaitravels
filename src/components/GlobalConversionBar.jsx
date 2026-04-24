import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const GlobalConversionBar = () => {
  const phoneNumber = "916369284551";
  const waBase = "Hello INAI Tours & Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Disable CTAs when Mobile Menu is Open */
        body.menu-open .mobile-bottom-bar {
          display: none !important;
        }

        .mobile-bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          display: flex;
          padding: 0.5rem;
          gap: 0.5rem;
          box-shadow: 0 -8px 25px rgba(0,0,0,0.12);
          z-index: 10010;
          border-top: 2px solid #f0f0f0;
        }

        @media (min-width: 769px) {
          .mobile-bottom-bar { display: none; }
        }

        .bottom-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 800;
          font-size: 0.85rem;
          color: white;
          text-decoration: none;
          transition: 0.2s;
          text-transform: uppercase;
        }
        .bottom-btn:active { transform: scale(0.96); }

        .bb-call { 
          background: var(--primary); 
          box-shadow: 0 5px 15px rgba(0,33,71,0.2);
        }
        .bb-wa { 
          background: #25D366; 
          box-shadow: 0 5px 15px rgba(37,211,102,0.2);
        }
      `}} />

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="mobile-bottom-bar">
         <a href={`tel:+${phoneNumber}`} className="bottom-btn bb-call">
            <Phone size={20} /> CALL NOW
         </a>
         <a href={waLink} className="bottom-btn bb-wa">
            <WhatsAppIcon size={22} /> WHATSAPP NOW
         </a>
      </div>
    </>
  );
};

export default GlobalConversionBar;
