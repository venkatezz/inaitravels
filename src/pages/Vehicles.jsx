import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Car, Bus, Info, ChevronRight, Phone } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Vehicles = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const phoneNumber = "916369284551";
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  const categories = [
    { id: 'cars', label: 'Cars (Sedan/SUV)', icon: <Car size={20} /> },
    { id: 'tempo', label: 'Tempo Traveller', icon: <Users size={20} /> },
    { id: 'buses', label: 'Luxury Buses', icon: <Bus size={20} /> }
  ];

  const vehicles = {
    cars: [
      { name: "Maruti Swift Dzire", seats: "4+1 Seats", img: "/images/swift_dzire.png", desc: "Coimbatore's favorite sedan for city tours and airport transfers. Extremely comfortable for up to 4 passengers." },
      { name: "Toyota Innova Crysta", seats: "6+1 / 7+1 Seats", img: "/images/innova_crysta.png", desc: "The gold standard for family travel in India. Experience unmatched luxury and safety on South Indian highways." }
    ],
    tempo: [
      { name: "Force Tempo Traveller", seats: "14+1 Seats", img: "/images/tempo_traveller.png", desc: "The perfect group vehicle for Tamil Nadu tours. Spacious, fully air-conditioned with push-back seats." },
      { name: "Force Urbania Luxury", seats: "13+1 / 17+1 Seats", img: "/images/force_urbania.png", desc: "Next-gen luxury travel in Coimbatore. Premium aesthetics and superior comfort for long-distance group journeys." }
    ],
    buses: [
      { name: "Luxury Tourist Coach", seats: "18 to 52 Seats", img: "/images/tourist_bus.png", desc: "Large fleet of private tourist buses for weddings, corporate events, and spiritual tours across South India." }
    ]
  };

  return (
    <div className="vehicles-page-v2">
      <style dangerouslySetInnerHTML={{ __html: `
        .v-hero {
          background: linear-gradient(rgba(0,33,71,0.85), rgba(0,33,71,0.85)), url('/images/hero.png');
          background-size: cover;
          background-position: center;
          padding: 10rem 0 6rem;
          text-align: center;
          color: white;
        }
        .v-tabs-v2 {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: -2.5rem 0 4rem;
          flex-wrap: wrap;
          padding-inline: 1rem;
        }
        .tab-btn-v2 {
          padding: 1.1rem 2rem;
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          font-weight: 850;
          color: var(--primary);
          box-shadow: var(--shadow);
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-width: 15rem;
          justify-content: center;
        }
        .tab-btn-v2.active {
          background: var(--accent);
          border-color: var(--accent);
          transform: translateY(-5px);
        }
        @media (max-width: 768px) { .tab-btn-v2 { min-width: 100%; border-radius: 14px; } }

        .indian-v-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid #eee;
          transition: 0.3s;
        }
        .indian-v-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .v-img-container { height: 250px; overflow: hidden; background: #f8f9fa; }
        .v-img-container img { width: 100%; height: 100%; object-fit: cover; }
        .v-details { padding: 2.5rem; flex-grow: 1; display: flex; flex-direction: column; }
        .v-tag-seats { background: #fee2e2; color: #dc2626; padding: 0.4rem 1.2rem; border-radius: 8px; font-weight: 800; font-size: 0.85rem; margin-bottom: 1rem; align-self: flex-start; display: flex; align-items: center; gap: 0.5rem; }
      `}} />

      <section className="v-hero">
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }}>Our Professional Fleet</h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto', fontWeight: 500 }}>The most trusted collection of Indian cars and coaches in Coimbatore. Expert drivers included with every ride.</p>
        </div>
      </section>

      <div className="container">
        {/* Modern Tabs */}
        <div className="v-tabs-v2">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className={`tab-btn-v2 ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-3"
            style={{ marginBottom: '8rem' }}
          >
            {vehicles[activeTab].map((v, i) => (
              <div key={i} className="indian-v-card">
                <div className="v-img-container">
                  <img src={v.img} alt={v.name} loading="lazy" decoding="async" />
                </div>
                <div className="v-details">
                  <div className="v-tag-seats"><Users size={16} /> {v.seats}</div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{v.name}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>{v.desc}</p>
                  
                  <div style={{ marginTop: 'auto', display: 'grid', gap: '1rem' }}>
                    <a 
                      href={`https://wa.me/${phoneNumber}?text=Hi%20INAI%20Travels,%20I'm%20interested%20in%20enquiring%20about%20the%20${v.name}.`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-whatsapp" 
                      style={{ width: '100%', justifyContent: 'center', fontWeight: '800', padding: '1.1rem' }}
                    >
                      <WhatsAppIcon size={22} className="mr-2" style={{ marginRight: '8px' }} /> BOOK ON WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Vehicles;
