import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const GlobalConversionBar = () => {
  const phoneNumber = "916369284551";
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .floating-wa-btn {
          position: fixed; 
          bottom: 2rem; 
          right: 2rem; 
          width: 65px; 
          height: 65px;
          background: var(--whatsapp); 
          color: white; 
          border-radius: 50%;
          display: flex; 
          align-items: center; 
          justify-content: center;
          box-shadow: 0 10px 30px rgba(37,211,102,0.4); 
          z-index: 10005;
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .floating-wa-btn:hover { transform: scale(1.1) rotate(5deg); }
        
        @media (max-width: 768px) { 
          .floating-wa-btn { 
            bottom: 5.5rem; 
            right: 1.5rem;
            width: 55px;
            height: 55px;
          } 
        }

        .mobile-bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          display: flex;
          padding: 0.6rem 0.8rem;
          gap: 0.8rem;
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
          gap: 0.6rem;
          padding: 0.85rem;
          border-radius: 12px;
          font-weight: 900;
          font-size: 0.95rem;
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

      {/* Floating WA Button (Desktop/Tablet) */}
      <a href={waLink} className="floating-wa-btn" title="Contact Us on WhatsApp">
        <WhatsAppIcon size={32} />
      </a>

      {/* Sticky Bottom Bar for Mobile */}
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
