import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Clock, Award, Users, X, MapPin, Plane, Car, Calendar, ShieldCheck, Star, Headphones } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  const phoneNumber = "916369284551";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello INAI Travels, I'm interested in booking a vehicle.")}`;
  const [modal, setModal] = useState(null);

  const fleet = [
    { name: "Sedan", cap: "4 Seater", img: "/images/swift_dzire_no_plate.png", vehicleType: "Car", seating: "4" },
    { name: "Innova Crysta", cap: "7 Seater", img: "/images/innova_crysta_no_plate.png", vehicleType: "Car", seating: "7" },
    { name: "Tempo Traveller", cap: "14 Seater", img: "/images/tempo_traveller_no_plate.png", vehicleType: "Tempo Traveller", seating: "14" },
    { name: "Force Urbania", cap: "18 Seater", img: "/images/force_urbania_no_plate.png", vehicleType: "Tempo Traveller", seating: "18" },
    { name: "Luxury Tourist Bus", cap: "18–52 Seater", img: "/images/tourist_bus_no_plate.png", vehicleType: "Bus", seating: "52" },
  ];

  const services = [
    { icon: <Car size={26} />, title: "Local City Rental" , desc: "Affordable rides in Coimbatore for daily commutes and meetings." },
    { icon: <MapPin size={26} />, title: "Outstation Trips", desc: "Safe travels to Ooty, Munnar and long-distance destinations." },
    { icon: <Plane size={26} />, title: "Airport Transfers", desc: "Reliable 24/7 pick-up and drop-off to CJB Airport." },
    { icon: <Users size={26} />, title: "Corporate Fleet", desc: "Dedicated transport for employee commuting and business guests." },
    { icon: <Calendar size={26} />, title: "Wedding & Events", desc: "Premium luxury cars and coaches for special occasions." },
    { icon: <Award size={26} />, title: "Pilgrimage Tours", desc: "Specially curated packages for famous temple destinations." }
  ];

  const whyChooseUs = [
    { i: <Clock size={32} />, t: "Always On Time", d: "Punctuality is our core promise." },
    { i: <Award size={32} />, t: "Hygiene First", d: "Spotless interiors & sanitized vehicles." },
    { i: <Users size={32} />, t: "Expert Drivers", d: "Verified professional drivers." },
  ];

  const trustGauges = [
    { icon: <Users size={28} />, title: "100+ Happy Customers", desc: "Trusted by families & corporates" },
    { icon: <Star size={28} />, title: "Experienced Drivers", desc: "Professional & local experts" },
    { icon: <ShieldCheck size={28} />, title: "Clean & Maintained", desc: "Sanitized premium vehicles" },
    { icon: <Headphones size={28} />, title: "24/7 Support", desc: "We're always here to help" },
  ];

  return (
    <div className="homepage compact-page">
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Compact Reset ── */
        .compact-section { padding: 2.25rem 0; }
        .compact-section.bg-light { background-color: #f9fafb; }
        .compact-section.bg-white { background-color: #ffffff; }
        
        .section-title { margin-bottom: 2rem; text-align: left; }
        .section-title.center { text-align: center; }
        .section-title h2 { font-size: 2.2rem; margin-bottom: 0.5rem; }
        .section-title p { font-size: 1rem; color: #6b7280; }
        
        /* ── Hero ── */
        .hero-v2 {
          min-height: 85vh; position: relative;
          background: url('/images/hero_new.png') center/cover no-repeat;
          display: flex; align-items: center;
          color: white; text-align: left; padding-top: 4rem;
        }
        .hero-v2::before {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%);
          z-index:1;
        }
        .hero-inner { position:relative; z-index:2; padding-bottom: 2rem; }
        .hero-heading {
          font-size: clamp(2.4rem, 6vw, 4rem); font-weight: 900; line-height: 1.1;
          margin-bottom: 1rem; color: #ffffff; text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem); color: rgba(255,255,255,0.95);
          margin-bottom: 1.5rem; max-width: 600px; text-shadow: 0 2px 10px rgba(0,0,0,0.5); font-weight: 500;
        }
        .hero-cta-row { display:flex; gap:1rem; flex-wrap:wrap; }
        .hero-cta-pill {
          display:inline-flex; align-items:center; gap:0.6rem;
          padding:0.7rem 1.5rem; border-radius:50px; font-weight:800;
          font-size:0.95rem; text-decoration:none; transition:0.25s;
          backdrop-filter:blur(10px);
        }
        .hero-pill-call { background:rgba(255,255,255,0.2); border:2px solid rgba(255,255,255,0.7); color:white; }
        .hero-pill-call:hover { background:rgba(255,255,255,0.35); transform: translateY(-2px); }
        .hero-pill-wa { background:#25D366; border:2px solid #25D366; color:white; box-shadow: 0 4px 15px rgba(37,211,102,0.3); }
        .hero-pill-wa:hover { background:#1ea853; transform: translateY(-2px); }

        /* ── Trust Gauge ── */
        .trust-gauge-grid { 
          display: grid; gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .trust-gauge-card {
          padding: 1.25rem; background: white; border-radius: 16px;
          border: 1px solid #f0f0f0; text-align: center; transition: 0.3s;
          display: flex; flex-direction: column; align-items: center;
        }
        .trust-gauge-card:hover { border-color: var(--accent); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .tg-icon { color: var(--primary); margin-bottom: 0.75rem; }

        /* ── Fleet Prev ── */
        .fleet-card {
          background:white; border-radius:16px; overflow:hidden;
          border:1px solid #f0f0f0; display:flex; flex-direction:column;
          transition:0.3s;
        }
        .fleet-card:hover { box-shadow:0 10px 30px rgba(0,0,0,0.08); }
        .fleet-img { height:160px; overflow:hidden; background:#f5f5f5; }
        .fleet-img img { width:100%; height:100%; object-fit:cover; transition: 0.5s; }
        .fleet-card:hover .fleet-img img { transform: scale(1.05); }
        .fleet-body { padding:1.1rem; display:flex; flex-direction:column; flex-grow:1; }
        .cap-tag { background:#fff0f0; color:#c0392b; padding:0.25rem 0.6rem; border-radius:6px; font-weight:800; font-size:0.75rem; margin-bottom:0.5rem; display:inline-block; align-self: flex-start; }
        .fleet-inquiry-btn {
          width:100%; padding:0.65rem; margin-top:auto;
          background:var(--accent); color:var(--primary);
          border:none; border-radius:10px; font-weight:800; font-size:0.9rem;
          cursor:pointer; display:flex; align-items:center; justify-content:center;
          gap:0.5rem; transition:0.2s;
        }
        .fleet-inquiry-btn:hover { background:#e6c000; }

        /* ── Services ── */
        .service-row { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
        .service-item {
          padding: 1.15rem; background: white; border: 1px solid #eee;
          border-radius: 16px; display: flex; gap: 1rem; align-items: flex-start;
        }
        .srv-icon {
          width: 50px; height: 50px; background: #f0f4f8; color: var(--primary);
          border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .srv-text h4 { font-size: 1.1rem; margin-bottom: 0.25rem; font-weight: 800; }
        .srv-text p { font-size: 0.9rem; color: #6b7280; margin: 0; line-height: 1.4; }

        /* ── Why Choose Us ── */
        .trust-box { text-align:left; padding:1.5rem; border-radius:16px; background:white; border:1px solid #eee; display: flex; gap: 1rem; align-items: center; }
        .trust-icon { width:55px; height:55px; background:#f0f4f8; color:var(--primary); border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink: 0;}
        .trust-content h3 { font-size: 1.15rem; margin-bottom: 0.25rem; font-weight: 800; }
        .trust-content p { color: #6b7280; margin: 0; font-size: 0.95rem; line-height: 1.4; }

        /* ── Quick Explore ── */
        .quick-explore-banner {
          background: linear-gradient(rgba(0,33,71,0.85), rgba(0,33,71,0.85)), url('/images/coimbatore_scenic.png') center/cover;
          border-radius: 16px; padding: 1.75rem 2rem; color: white; display: flex;
          justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;
        }
        .btn-white-outline {
          border: 2px solid white; color: white; padding: 0.8rem 1.5rem; border-radius: 12px;
          text-decoration: none; font-weight: 800; display: inline-flex; align-items: center; gap: 0.5rem; transition: 0.3s;
        }
        .btn-white-outline:hover { background: white; color: var(--primary); }

        /* ── Enquiry ── */
        .enquiry-card { background: white; border-radius: 20px; padding: 2rem; border: 1px solid #f0f0f0; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        
        .sec-label { font-size:0.8rem; font-weight:900; color:var(--primary); text-transform:uppercase; letter-spacing:2px; margin-bottom:0.5rem; opacity:0.8; }
        
        /* Modal */
        .eq-modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:20000; display:flex; align-items:center; justify-content:center; padding:1rem; backdrop-filter:blur(4px); }
        .eq-modal-box { background:white; border-radius:20px; width:100%; max-width:600px; max-height:92vh; overflow-y:auto; padding:2rem; position:relative; }
        .eq-modal-close { position:absolute; top:1rem; right:1rem; background:#f3f4f6; border:none; border-radius:50%; width:36px; height:36px; display:flex; align-items:center; justify-content:center; cursor:pointer; }
        
        @media (max-width:768px) {
          .hero-v2 { text-align:center; padding-top: 3.5rem; }
          .hero-cta-row { display: none; } /* Sticky bottom bar takes over on mobile */
          .hero-sub { margin-inline:auto; font-size: 0.95rem; }
          .quick-explore-banner { flex-direction: column; text-align: center; padding: 1.5rem; gap: 1rem; }
          .quick-explore-banner h2 { font-size: 1.8rem !important; }
          .fleet-img { height: 140px; }
          .fleet-body { padding: 1rem; }
          .cap-tag { font-size: 0.7rem; padding: 0.2rem 0.5rem; }
          .fleet-inquiry-btn { padding: 0.6rem; font-size: 0.85rem; }
          .trust-box { padding: 1rem; gap: 0.8rem; }
          .trust-icon { width: 45px; height: 45px; }
          .service-item { padding: 1rem; gap: 0.8rem; }
          .srv-icon { width: 40px; height: 40px; }
        }
      `}} />

      {/* 1. HERO */}
      <section className="hero-v2">
        <div className="container hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="sec-label" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>COIMBATORE'S TRAVEL PARTNER</p>
            <h1 className="hero-heading">
              Premium Travels<br />
              <span style={{ color: 'var(--accent)' }}>Across South India</span>
            </h1>
            <p className="hero-sub">
              Safe, sanitized vehicles and professional local drivers for every journey. Airport drops to outstation tours.
            </p>
            <div className="hero-cta-row">
              <a href={`tel:+${phoneNumber}`} className="hero-cta-pill hero-pill-call">
                <Phone size={16} /> Call +91 63692 84551
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="hero-cta-pill hero-pill-wa">
                <WhatsAppIcon size={16} /> Instant Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST GAUGE (Compact) */}
      <section className="compact-section bg-light" style={{ padding: '1.5rem 0' }}>
        <div className="container">
          <div className="trust-gauge-grid">
            {trustGauges.map((tg, i) => (
              <motion.div key={i} className="trust-gauge-card"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="tg-icon">{tg.icon}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0 }}>{tg.title}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#6B7280' }}>{tg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FLEET PREVIEW */}
      <section className="compact-section bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">OUR FLEET</p>
            <h2>Excellence in Motion</h2>
            <p>From luxury sedans to spacious group coaches for a comfortable ride.</p>
          </div>
          <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {fleet.map((v, i) => (
              <motion.div key={i} className="fleet-card"
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="fleet-img">
                  <img src={v.img} alt={v.name} loading="lazy" />
                </div>
                <div className="fleet-body">
                  <span className="cap-tag">👤 {v.cap}</span>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 800 }}>{v.name}</h3>
                  <button className="fleet-inquiry-btn"
                    onClick={() => setModal({ vehicleType: v.vehicleType, seating: v.seating, name: v.name })}>
                    <WhatsAppIcon size={16} /> ENQUIRE
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
             <Link to="/vehicles" style={{ fontWeight: 800, color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
               View Full Fleet Details <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="compact-section bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">WHAT WE DO</p>
            <h2>Comprehensive Services</h2>
          </div>
          <div className="service-row">
            {services.map((s, i) => (
              <div key={i} className="service-item">
                <div className="srv-icon">{s.icon}</div>
                <div className="srv-text">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="compact-section bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">WHY INAI TRAVELS</p>
            <h2>The INAI Standard</h2>
          </div>
          <div className="grid grid-3" style={{ gap: '1.5rem' }}>
            {whyChooseUs.map((item, i) => (
              <div key={i} className="trust-box">
                <div className="trust-icon">{item.i}</div>
                <div className="trust-content">
                  <h3>{item.t}</h3>
                  <p>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUICK EXPLORE BANNER */}
      <section className="compact-section bg-white" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="quick-explore-banner">
            <div>
               <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', fontWeight: 900 }}>Explore Destinations</h2>
               <p style={{ opacity: 0.9, fontSize: '1.1rem', margin: 0, maxWidth: '500px' }}>Discover hill stations, temple tours, and top tourist routes across South India tailored for you.</p>
            </div>
            <div>
               <Link to="/explore" className="btn-white-outline">
                 Discover Routes <ArrowRight size={20} />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUICK ENQUIRY */}
      <section className="compact-section bg-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <div>
              <p className="sec-label">GET A QUOTE</p>
              <h2 style={{ fontSize: '2.5rem', lineHeight: 1.1, marginBottom: '1.2rem' }}>
                Instant Booking<br />
                <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>Simplified</span>
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Enter your trip details below. Our reservation team will respond with a quote via WhatsApp instantly. No hidden fees.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {[
                  "Transparent & Logical Billing",
                  "Verified Professional Chauffeurs",
                  "24/7 Dedicated Support"
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <CheckCircle size={22} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="enquiry-card">
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 800 }}>Trip Enquiry</h3>
              <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '0.95rem' }}>We'll message you on WhatsApp.</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE MODAL */}
      <AnimatePresence>
        {modal && (
          <motion.div className="eq-modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={e => { if (e.target.classList.contains('eq-modal-overlay')) setModal(null); }}>
            <motion.div className="eq-modal-box"
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
              <button className="eq-modal-close" onClick={() => setModal(null)}><X size={20} /></button>
              <h2 style={{ marginBottom: '0.5rem', fontSize: '1.6rem', paddingRight: '2rem', fontWeight: 800 }}>Enquiry: {modal.name}</h2>
              <p style={{ color: '#6B7280', marginBottom: '2rem', fontSize: '0.95rem' }}>Fill your details to get a WhatsApp quote.</p>
              <EnquiryForm prefillVehicleType={modal.vehicleType} prefillSeating={modal.seating} onClose={() => setModal(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
