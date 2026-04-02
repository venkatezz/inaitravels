import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Clock, Award, Users, X } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  const phoneNumber = "916369284551";
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null); // { vehicleType, seating, name }
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fleet = [
    { name: "Sedan (Swift Dzire)", cap: "4 Seater",        img: "/images/swift_dzire.png",   vehicleType: "Car",             seating: "4"  },
    { name: "Innova Crysta",       cap: "7 Seater",        img: "/images/innova_crysta.png", vehicleType: "Car",             seating: "7"  },
    { name: "Tempo Traveller",     cap: "14 Seater",       img: "/images/tempo_traveller.png", vehicleType: "Tempo Traveller", seating: "14" },
    { name: "Luxury Tourist Bus",  cap: "18 to 52 Seater", img: "/images/tourist_bus.png",   vehicleType: "Bus",             seating: "52" }
  ];

  return (
    <div className="homepage-new-optimized">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-v2 {
          height: 100vh;
          position: relative;
          background: url('/images/hero.png');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
          text-align: left;
          padding-top: 5rem;
        }
        .hero-v2::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to right, rgba(0,33,71,0.85), rgba(0,33,71,0.4));
          z-index: 1;
        }
        .hero-heading { 
          font-size: clamp(2.8rem, 8vw, 4.5rem); 
          font-weight: 900; 
          line-height: 1.1; 
          margin-bottom: 1.5rem; 
          text-shadow: 0 4px 15px rgba(0,0,0,0.5); 
        }
        .hero-sub { 
          font-size: 1.4rem; 
          opacity: 1; 
          margin-bottom: 3.5rem; 
          max-width: 650px; 
          font-weight: 600; 
          text-shadow: 0 2px 8px rgba(0,0,0,0.5);
        }
        
        .indian-card {
          background: white; border-radius: 20px; overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08); transition: 0.3s;
          border: 1px solid #f0f0f0; display: flex; flex-direction: column; height: 100%;
        }
        .indian-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
        .vehicle-img-box { height: 230px; position: relative; overflow: hidden; background: #f5f5f5; }
        .vehicle-img-box img { width: 100%; height: 100%; object-fit: cover; }
        .vehicle-card-body { padding: 2rem; display: flex; flex-direction: column; flex-grow: 1; }
        .v-cap-tag { background: #fee2e2; color: #dc2626; padding: 0.4rem 1rem; border-radius: 5px; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.75rem; display: inline-block; }

        .trust-box { text-align: center; padding: 2.5rem 2rem; border-radius: 20px; background: white; border: 1px solid #eee; transition: 0.3s; }
        .trust-box:hover { border-color: var(--accent); transform: translateY(-5px); }
        .trust-icon { width: 70px; height: 70px; background: #f0f4f8; color: var(--primary); border-radius: 15px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; transition: 0.3s; }
        .trust-box:hover .trust-icon { background: var(--accent); color: var(--primary); }

        @media (max-width: 768px) {
          .hero-v2 { text-align: center; padding-top: 2rem; }
          .hero-v2::before { background: rgba(0,33,71,0.82); }
          .hero-sub { margin-inline: auto; font-size: 1.1rem; }
          .hero-heading { font-size: 2.5rem; color: #ffffff !important; }
        }
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

      {/* Hero Section */}
      <section className="hero-v2">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="hero-heading">Premium Travels in <br /><span style={{ color: 'var(--accent)' }}>Coimbatore</span></h1>
            <p className="hero-sub">The most reliable travel partner for Tamil Nadu. Experience safe, clean, and professional journeys with local experts.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }}>
              <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ minWidth: '220px', padding: '1.2rem 2rem' }}>
                <Phone size={22} /> CALL +91 63692 84551
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ minWidth: '220px', padding: '1.2rem 2rem' }}>
                <WhatsAppIcon size={22} className="mr-2" style={{ marginRight: '8px' }} /> BOOK ON WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Conviction (Why Us) */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-3">
            {[
              { i: <Clock size={35} />, t: "Punctual & Reliable", d: "Time is precious. Our drivers are Coimbatore's most punctual experts, ensuring you never wait." },
              { i: <Award size={35} />, t: "Hygiene Guaranteed", d: "Spotless interiors and sanitized vehicles for a safe and comfortable journey every single time." },
              { i: <Users size={35} />, t: "Local Route Experts", d: "Our drivers know every corner of Tamil Nadu, Kerala, and Karnataka, providing the smoothest routes." }
            ].map((item, i) => (
              <div key={i} className="trust-box">
                <div className="trust-icon">{item.i}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.t}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: 0, fontSize: '1.05rem' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Fleet Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.8rem' }}>Our Premium Fleet</h2>
            <p>From luxury sedans to large group coaches—we have the perfect vehicle for your journey.</p>
          </div>
          <div className="grid grid-4">
            {fleet.map((v, i) => (
              <motion.div key={i} className="indian-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="vehicle-img-box">
                  <img src={v.img} alt={v.name} loading="lazy" decoding="async" />
                </div>
                <div className="vehicle-card-body">
                  <span className="v-cap-tag">{v.cap}</span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{v.name}</h3>
                  <div style={{ marginTop: 'auto' }}>
                    <button onClick={() => setModal({ vehicleType: v.vehicleType, seating: v.seating, name: v.name })}
                      className="btn btn-whatsapp" style={{ width: '100%', fontSize: '0.95rem', border: 'none', cursor: 'pointer' }}>
                      <WhatsAppIcon size={18} style={{ marginRight: '6px' }} /> ENQUIRE NOW
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <Link to="/vehicles" className="btn btn-primary" style={{ padding: '1.2rem 2.5rem' }}>
                EXPLORE ALL VEHICLES <ArrowRight size={22} />
             </Link>
          </div>
        </div>
      </section>

      {/* Services Context */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <h2 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '2rem' }}>Coimbatore Local & <br /><span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>South India Tours</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>Explore the beauty of the South with the region's top-rated travel planners. From temple tours to hill station getaways, we've got you covered.</p>
              <div style={{ display: 'grid', gap: '1.2rem', marginBottom: '3rem' }}>
                {[
                  "Airport Transfers (Coimbatore CJB)",
                  "Outstation Spiritual & Temple Tours",
                  "Corporate & Event Group Transport",
                  "Wedding Fleet Management"
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--whatsapp)' }}><CheckCircle size={22} /></div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>{s}</p>
                  </div>
                ))}
              </div>
              <a href={waLink} className="btn btn-whatsapp" style={{ padding: '1.25rem 2.5rem', width: 'auto' }}>
                <WhatsAppIcon size={24} className="mr-3" style={{ marginRight: '10px' }} /> INSTANT QUOTE ON WHATSAPP
              </a>
            </div>
            <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.15)', position: 'relative' }}>
               <img src="/images/coimbatore_scenic.png" alt="Tamil Nadu Scenic Highway" style={{ width: '100%', display: 'block' }} loading="lazy" />
               <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'white', padding: '0.5rem 1rem', borderRadius: '10px', fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', boxShadow: 'var(--shadow)' }}>
                  South India Experts
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            <div>
              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>Book Your Trip in <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>2 Minutes</span></h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>Fill the form and get an instant WhatsApp quote from our team. No advance payment  — just confirm your trip and we'll handle the rest.</p>
              <div style={{ display: 'grid', gap: '1.2rem' }}>
                {[
                  "All vehicle types available instantly",
                  "Verified drivers with clean records",
                  "No hidden charges, transparent billing",
                  "24/7 support on WhatsApp & Phone"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--whatsapp)', flexShrink: 0 }}><CheckCircle size={22} /></div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#f9fafb', borderRadius: '24px', padding: '2.5rem', border: '1px solid #f0f0f0', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.6rem' }}>Quick Booking Enquiry</h3>
              <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '0.95rem' }}>We respond within minutes on WhatsApp.</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
         <div className="container">
            <h2 style={{ color: 'white', fontSize: '3.2rem', marginBottom: '1.5rem', fontWeight: 900 }}>Ready to Book Your Journey?</h2>
            <p style={{ opacity: 0.9, fontSize: '1.3rem', marginBottom: '4rem', maxWidth: '750px', marginInline: 'auto', fontWeight: 500 }}>Join thousands of happy travelers who trust INAI Travels for their Coimbatore journeys. Click below to book in seconds.</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
               <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem', minWidth: '280px' }}>
                  <Phone size={24} /> CALL +91 63692 84551
               </a>
               <a href={waLink} className="btn btn-whatsapp" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem', minWidth: '280px' }}>
                  <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> CHAT ON WHATSAPP
               </a>
            </div>
         </div>
      </section>

      {/* Vehicle Enquiry Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div className="eq-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target.classList.contains('eq-modal-overlay')) setModal(null); }}>
            <motion.div className="eq-modal-box"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="eq-modal-close" onClick={() => setModal(null)}><X size={20} /></button>
              <h2 style={{ marginBottom: '0.4rem', fontSize: '1.8rem', paddingRight: '2rem' }}>Enquire: {modal.name}</h2>
              <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '0.95rem' }}>Vehicle type and seating are pre-filled. Add your trip details to get an instant WhatsApp quote.</p>
              <EnquiryForm prefillVehicleType={modal.vehicleType} prefillSeating={modal.seating} onClose={() => setModal(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
