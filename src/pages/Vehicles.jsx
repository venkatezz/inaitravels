import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Car, Bus, X } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryForm from '../components/EnquiryForm';

const Vehicles = () => {
  const [activeTab, setActiveTab] = useState('cars');
  const [modal, setModal] = useState(null); // { vehicleType, seating, name }

  const categories = [
    { id: 'cars',  label: 'Cars (Sedan/SUV)',  icon: <Car size={20} /> },
    { id: 'tempo', label: 'Tempo Traveller',   icon: <Users size={20} /> },
    { id: 'buses', label: 'Luxury Buses',      icon: <Bus size={20} /> }
  ];

  const vehicles = {
    cars: [
      {
        name: "Maruti Swift Dzire", seats: "4 Seater", img: "/images/swift_dzire.png",
        vehicleType: "Car", seating: "4",
        desc: "Coimbatore's favourite sedan for city tours and airport transfers. Comfortable for up to 4 passengers."
      },
      {
        name: "Toyota Innova Crysta", seats: "7 Seater", img: "/images/innova_crysta.png",
        vehicleType: "Car", seating: "7",
        desc: "The gold standard for family travel in India. Unmatched luxury and safety on South Indian highways."
      }
    ],
    tempo: [
      {
        name: "Force Tempo Traveller", seats: "14 Seater", img: "/images/tempo_traveller.png",
        vehicleType: "Tempo Traveller", seating: "14",
        desc: "Perfect group vehicle for Tamil Nadu tours. Spacious, fully air-conditioned with push-back seats."
      },
      {
        name: "Force Urbania Luxury", seats: "17 Seater", img: "/images/force_urbania.png",
        vehicleType: "Tempo Traveller", seating: "18",
        desc: "Next-gen luxury travel in Coimbatore. Premium aesthetics and superior comfort for long journeys."
      }
    ],
    buses: [
      {
        name: "Luxury Tourist Coach (18–52 Seater)", seats: "18–52 Seater", img: "/images/tourist_bus.png",
        vehicleType: "Bus", seating: "52",
        desc: "Large fleet of private tourist buses for weddings, corporate events, and spiritual tours across South India."
      }
    ]
  };

  return (
    <div className="vehicles-page-v2">
      <style dangerouslySetInnerHTML={{ __html: `
        .v-hero {
          background: linear-gradient(rgba(0,33,71,0.88), rgba(0,33,71,0.88)), url('/images/hero.png');
          background-size: cover; background-position: center;
          padding: 10rem 0 6rem; text-align: center; color: white;
        }
        .v-tabs-v2 {
          display: flex; justify-content: center; gap: 1rem;
          margin: -2.5rem 0 4rem; flex-wrap: wrap; padding-inline: 1rem;
        }
        .tab-btn-v2 {
          padding: 1.1rem 2rem; background: white; border: 1px solid #eee;
          border-radius: 12px; font-weight: 850; color: var(--primary);
          box-shadow: var(--shadow); cursor: pointer; transition: var(--transition);
          display: flex; align-items: center; gap: 0.75rem;
          min-width: 15rem; justify-content: center;
        }
        .tab-btn-v2.active { background: var(--accent); border-color: var(--accent); transform: translateY(-5px); }
        @media (max-width: 768px) { .tab-btn-v2 { min-width: 100%; border-radius: 14px; } }

        .indian-v-card {
          display: flex; flex-direction: column; height: 100%;
          background: white; border-radius: 20px; overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06); border: 1px solid #eee; transition: 0.3s;
        }
        .indian-v-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .v-img-container { height: 250px; overflow: hidden; background: #f8f9fa; }
        .v-img-container img { width: 100%; height: 100%; object-fit: cover; }
        .v-details { padding: 2.5rem; flex-grow: 1; display: flex; flex-direction: column; }
        .v-tag-seats {
          background: #fee2e2; color: #dc2626; padding: 0.4rem 1.2rem;
          border-radius: 8px; font-weight: 800; font-size: 0.85rem;
          margin-bottom: 1rem; align-self: flex-start;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .enquire-btn {
          width: 100%; padding: 1.1rem; border-radius: 12px;
          background: var(--accent); color: var(--primary);
          font-weight: 900; font-size: 1rem; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          transition: 0.2s; text-decoration: none;
        }
        .enquire-btn:hover { background: #e6c000; transform: scale(1.02); }

        /* Modal */
        .eq-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.6);
          z-index: 20000; display: flex; align-items: center; justify-content: center;
          padding: 1rem; backdrop-filter: blur(4px);
        }
        .eq-modal-box {
          background: white; border-radius: 24px; width: 100%;
          max-width: 680px; max-height: 92vh; overflow-y: auto;
          padding: 2.5rem; position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.25);
        }
        .eq-modal-close {
          position: absolute; top: 1.2rem; right: 1.2rem;
          background: #f3f4f6; border: none; border-radius: 50%; width: 38px; height: 38px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: 0.2s; color: #374151;
        }
        .eq-modal-close:hover { background: #fee2e2; color: #dc2626; }
        @media (max-width: 640px) { .eq-modal-box { padding: 1.5rem; } }
      `}} />

      {/* Hero */}
      <section className="v-hero">
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }}>Our Professional Fleet</h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto', fontWeight: 500 }}>
            The most trusted collection of Indian cars and coaches in Coimbatore. Expert drivers included with every ride.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Tabs */}
        <div className="v-tabs-v2">
          {categories.map((cat) => (
            <button key={cat.id} className={`tab-btn-v2 ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}>
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }}
            className="grid grid-3" style={{ marginBottom: '8rem' }}>
            {vehicles[activeTab].map((v, i) => (
              <div key={i} className="indian-v-card">
                <div className="v-img-container">
                  <img src={v.img} alt={v.name} loading="lazy" decoding="async" />
                </div>
                <div className="v-details">
                  <div className="v-tag-seats"><Users size={16} /> {v.seats}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{v.name}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.6, flexGrow: 1 }}>{v.desc}</p>
                  <div style={{ display: 'grid', gap: '0.75rem', marginTop: 'auto' }}>
                    {/* Enquire Now → opens modal with pre-filled fields */}
                    <button className="enquire-btn"
                      onClick={() => setModal({ vehicleType: v.vehicleType, seating: v.seating, name: v.name })}>
                      <WhatsAppIcon size={20} /> ENQUIRE NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
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
              <h2 style={{ marginBottom: '0.4rem', fontSize: '1.8rem', paddingRight: '2rem' }}>
                Enquire: {modal.name}
              </h2>
              <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '0.95rem' }}>
                Vehicle type and seating are pre-filled. Add your trip details and we'll send the best quote on WhatsApp.
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
