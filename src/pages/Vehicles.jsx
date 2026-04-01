import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Car, Bus, Info, ChevronRight, MessageCircle, Phone } from 'lucide-react';

const Vehicles = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const phoneNumber = "919876543210";
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  const categories = [
    { id: 'cars', label: 'Cars', icon: <Car size={20} /> },
    { id: 'tempo', label: 'Tempo Traveller', icon: <Users size={20} /> },
    { id: 'buses', label: 'Buses', icon: <Bus size={20} /> }
  ];

  const vehicles = {
    cars: [
      { name: "Sedan (Swift Dzire)", seats: "4+1 Seats", img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "Coimbatore's most popular choice for city and outstation travel. Well-maintained and fuel-efficient." },
      { name: "7 Seater SUV", seats: "6+1 / 7+1 Seats", img: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "Perfect for family groups. High performance and extra legroom for long highway journeys." },
      { name: "Toyota Innova Crysta", seats: "6+1 / 7+1 Seats", img: "https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "The ultimate premium SUV for long-distance family travel. Crystal clean interiors and superior ride quality." }
    ],
    tempo: [
      { name: "14 Seater Tempo Traveller", seats: "14+1 Seats", img: "https://images.pexels.com/photos/15239833/pexels-photo-15239833.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "The gold standard for group tours. Full AC, comfortable push-back seats, and ample luggage space." },
      { name: "Force Urbania", seats: "13+1 / 17+1 Seats", img: "https://images.pexels.com/photos/15239833/pexels-photo-15239833.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "Experience luxury travel in Coimbatore. Premium interiors, extra-wide views, and business-class comfort." }
    ],
    buses: [
      { name: "18 Seater Mini Bus", seats: "18+1 Seats", img: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "Perfect for corporate groups and family outings with many people. High roof for extra comfort." },
      { name: "22 Seater Mini Bus", seats: "22+1 Seats", img: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "Indian road-ready, comfortable for long spiritual journeys across Tamil Nadu." },
      { name: "52 Seater Luxury Coach", seats: "52+1 Seats", img: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1000", desc: "Large group transport for weddings and corporate events. Professional audio system and powerful AC." }
    ]
  };

  return (
    <div className="vehicles-page-v2">
      <style dangerouslySetInnerHTML={{ __html: `
        .v-hero {
          background: linear-gradient(rgba(0,33,71,0.85), rgba(0,33,71,0.85)), url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2000');
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
          padding: 1rem 2rem;
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          font-weight: 800;
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
        @media (max-width: 768px) { .tab-btn-v2 { min-width: 100%; } }

        .indian-v-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border: 1px solid #eee;
        }
        .v-img-container { height: 250px; overflow: hidden; }
        .v-img-container img { width: 100%; height: 100%; object-fit: cover; }
        .v-details { padding: 2.5rem; flex-grow: 1; display: flex; flex-direction: column; }
        .v-tag-seats { background: #fee2e2; color: #dc2626; padding: 0.4rem 1.2rem; border-radius: 8px; font-weight: 800; font-size: 0.85rem; margin-bottom: 1rem; align-self: flex-start; }
      `}} />

      <section className="v-hero">
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }}>Our Local Fleet</h1>
          <p style={{ opacity: 0.8, fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>Choose from highly maintained Indian cars, tempo travellers, and buses for all your Coimbatore travel needs.</p>
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
                  <img src={v.img} alt={v.name} />
                </div>
                <div className="v-details">
                  <div className="v-tag-seats"><Users size={16} /> {v.seats}</div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{v.name}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>{v.desc}</p>
                  
                  <div style={{ marginTop: 'auto', display: 'grid', gap: '1rem' }}>
                    <a 
                      href={`https://wa.me/${phoneNumber}?text=Hi%20INAI%20Travels,%20I'm%20interested%20in%20enquiring%20about%20the%20${v.name}.`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-whatsapp" 
                      style={{ width: '100%', justifyContent: 'center', fontWeight: '800' }}
                    >
                      <MessageCircle size={22} /> BOOK ON WHATSAPP
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
