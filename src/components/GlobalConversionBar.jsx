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
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          display: flex;
          padding: 0.75rem 1rem;
          gap: 1rem;
          box-shadow: 0 -10px 30px rgba(0,33,71,0.1);
          z-index: 10010;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        @media (min-width: 769px) {
          .mobile-bottom-bar { display: none; }
        }

        .bottom-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 850;
          font-size: 1.1rem;
          color: white;
          text-decoration: none;
          transition: 0.2s;
        }
        .bottom-btn:active { transform: scale(0.95); }

        .bb-call { 
          background: var(--primary); 
          box-shadow: 0 5px 15px rgba(0,33,71,0.25);
        }
        .bb-wa { 
          background: var(--whatsapp); 
          box-shadow: 0 5px 15px rgba(37,211,102,0.25);
        }
      `}} />

      {/* Floating WA Button */}
      <a href={waLink} className="floating-wa-btn" title="Contact Us on WhatsApp">
        <WhatsAppIcon size={32} />
      </a>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="mobile-bottom-bar">
         <a href={`tel:+${phoneNumber}`} className="bottom-btn bb-call">
            <Phone size={22} /> CALL
         </a>
         <a href={waLink} className="bottom-btn bb-wa">
            <WhatsAppIcon size={24} /> BOOK
         </a>
      </div>
    </>
  );
};

export default GlobalConversionBar;
