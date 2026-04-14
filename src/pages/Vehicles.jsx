import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Car, Bus, X } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryForm from '../components/EnquiryForm';

const Vehicles = () => {
  const [modal, setModal] = useState(null); // { vehicleType, seating, name }

  const categories = [
    {
      id: 'cars',
      label: 'Cars (Sedan & SUV)',
      icon: <Car size={24} />,
      list: [
        {
          name: "Sedan (Swift Dzire or similar)", seats: "4 Seater", img: "/images/swift_dzire_no_plate.png", vehicleType: "Car", seating: "4",
          desc: "Coimbatore's favourite sedan for city tours and airport transfers. Comfortable for up to 4 passengers with adequate luggage space."
        },
        {
          name: "Innova Crysta", seats: "7 Seater", img: "/images/innova_crysta_no_plate.png", vehicleType: "Car", seating: "7",
          desc: "The gold standard for family travel in India. Unmatched luxury, spacious seating, and premium safety on South Indian highways."
        }
      ]
    },
    {
      id: 'tempo',
      label: 'Tempo Travellers',
      icon: <Users size={24} />,
      list: [
        {
          name: "Standard Tempo Traveller", seats: "14 Seater", img: "/images/tempo_traveller_no_plate.png", vehicleType: "Tempo Traveller", seating: "14",
          desc: "Perfect group vehicle for Tamil Nadu tours. Spacious, fully air-conditioned with push-back seats and a great stereo system."
        },
        {
          name: "Premium Force Urbania", seats: "18 Seater", img: "/images/force_urbania_no_plate.png", vehicleType: "Tempo Traveller", seating: "18",
          desc: "Next-gen luxury travel in Coimbatore. Premium aesthetics, standing headroom, and superior comfort for long-distance group journeys."
        }
      ]
    },
    {
      id: 'buses',
      label: 'Luxury Coaches & Buses',
      icon: <Bus size={24} />,
      list: [
        {
          name: "Luxury Tourist Coach", seats: "18–52 Seater", img: "/images/tourist_bus_no_plate.png", vehicleType: "Bus", seating: "52",
          desc: "Large fleet of private tourist buses for weddings, corporate events, educational trips, and spiritual tours across South India. Features varying configurations."
        }
      ]
    }
  ];

  return (
    <div className="vehicles-page-v3">
      <style dangerouslySetInnerHTML={{
        __html: `
        .v-hero {
          background: linear-gradient(rgba(0,33,71,0.85), rgba(0,33,71,0.85)), url('/images/hero_new.png');
          background-size: cover; background-position: center;
          padding: 10rem 0 6rem; text-align: center; color: white;
        }

        .category-section {
          padding: 2.5rem 0;
          border-bottom: 1px solid #eee;
        }
        .category-section:last-child { border-bottom: none; }
        .category-header {
          display: flex; align-items: center; gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .category-header h2 { font-size: 2.2rem; font-weight: 800; margin: 0; }
        .category-icon { 
          width: 50px; height: 50px; background: var(--accent); color: var(--primary);
          border-radius: 12px; display: flex; align-items: center; justify-content: center; 
        }

        .indian-v-card {
          display: flex; flex-direction: column; height: 100%;
          background: white; border-radius: 16px; overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05); border: 1px solid #eee; transition: 0.3s;
        }
        .indian-v-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.08); border-color: var(--accent); }
        .v-img-container { height: 200px; overflow: hidden; background: #f8f9fa; }
        .v-img-container img { width: 100%; height: 100%; object-fit: cover; }
        .v-details { padding: 1.25rem; flex-grow: 1; display: flex; flex-direction: column; }
        .v-tag-seats {
          background: #fee2e2; color: #dc2626; padding: 0.3rem 0.8rem;
          border-radius: 8px; font-weight: 800; font-size: 0.8rem;
          margin-bottom: 0.75rem; align-self: flex-start;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .enquire-btn {
          width: 100%; padding: 0.9rem; border-radius: 10px;
          background: var(--accent); color: var(--primary);
          font-weight: 800; font-size: 1rem; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          transition: 0.2s; text-decoration: none;
        }
        .enquire-btn:hover { background: #e6c000; }

        /* Modal */
        .eq-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          z-index: 20000; display: flex; align-items: center; justify-content: center;
          padding: 1rem; backdrop-filter: blur(4px);
        }
        .eq-modal-box {
          background: white; border-radius: 20px; width: 100%;
          max-width: 600px; max-height: 92vh; overflow-y: auto;
          padding: 2.5rem; position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
        }
        .eq-modal-close {
          position: absolute; top: 1.2rem; right: 1.2rem;
          background: #f3f4f6; border: none; border-radius: 50%; width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.2s; color: #374151;
        }
        .eq-modal-close:hover { background: #fee2e2; color: #dc2626; }
        @media (max-width: 640px) { 
          .eq-modal-box { padding: 1.5rem; } 
          .v-img-container { height: 160px; }
          .v-details { padding: 1rem; }
          .v-tag-seats { font-size: 0.75rem; padding: 0.25rem 0.6rem; }
          .category-header h2 { font-size: 1.8rem; }
          .category-icon { width: 40px; height: 40px; }
          .enquire-btn { padding: 0.75rem; font-size: 0.9rem; }
        }
      `}} />

      {/* Hero */}
      <section className="v-hero">
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }}>Our Professional Fleet</h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto', fontWeight: 500 }}>
            Browse our selection of well-maintained cars, travellers, and buses. Expert drivers included with every ride.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {categories.map((cat, idx) => (
          <div key={cat.id} className="category-section">
            <motion.div className="category-header" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="category-icon">{cat.icon}</div>
              <h2>{cat.label}</h2>
            </motion.div>
            
            <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
              {cat.list.map((v, i) => (
                <motion.div key={i} className="indian-v-card"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="v-img-container">
                    <img src={v.img} alt={v.name} loading="lazy" />
                  </div>
                  <div className="v-details">
                    <div className="v-tag-seats"><Users size={16} /> {v.seats}</div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 800 }}>{v.name}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.5, flexGrow: 1 }}>{v.desc}</p>
                    <div style={{ marginTop: 'auto' }}>
                      <button className="enquire-btn"
                        onClick={() => setModal({ vehicleType: v.vehicleType, seating: v.seating, name: v.name })}>
                        <WhatsAppIcon size={20} /> ENQUIRE NOW
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div className="eq-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target.classList.contains('eq-modal-overlay')) setModal(null); }}>
            <motion.div className="eq-modal-box"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="eq-modal-close" onClick={() => setModal(null)}><X size={20} /></button>
              <h2 style={{ marginBottom: '0.4rem', fontSize: '1.6rem', paddingRight: '2rem', fontWeight: 800 }}>
                Enquire: {modal.name}
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Vehicle details are pre-filled. Add your trip details for an instant WhatsApp quote.
              </p>
              <EnquiryForm
                prefillVehicleType={modal.vehicleType}
                prefillSeating={modal.seating}
                onClose={() => setModal(null)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Vehicles;
