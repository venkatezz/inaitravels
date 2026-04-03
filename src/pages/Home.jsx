import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Clock, Award, Users, X, MapPin, Navigation, Train, Plane, Bus, Star, ShieldCheck, Headphones } from 'lucide-react';
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

  const destinations = [
    { name: "Ooty", sub: "Queen of Hill Stations", img: "/images/ooty_unique.png", km: "86 km" },
    { name: "Coonoor", sub: "Tea Garden Paradise", img: "/images/coonoor_unique.png", km: "76 km" },
    { name: "Valparai", sub: "Misty Rainforest Town", img: "/images/valparai_unique.png", km: "104 km" },
    { name: "Pollachi", sub: "Gateway to Wildlife", img: "/images/pollachi_unique.png", km: "40 km" },
    { name: "Palakkad", sub: "Kerala Border City", img: "/images/palakkad_unique.png", km: "55 km" },
  ];

  const temples = [
    { name: "Marudamalai Temple", sub: "Lord Murugan, Coimbatore", img: "/images/temple_dest.png" },
    { name: "Isha Yoga Center", sub: "Adiyogi Statue, Velliangiri", img: "/images/isha_yoga.png" },
    { name: "Palani Murugan Temple", sub: "Palani, Hill Temple view", img: "/images/palani_temple.png" },
  ];

  const reviews = [
    { name: "Rajesh Kumar", text: "Very punctual and clean vehicle. Driver was polite and knew the Ooty routes perfectly. Highly recommended!", rating: 5 },
    { name: "Suresh Pillai", text: "Best travel service in Coimbatore for family trips. Booked an Innova for a temple tour, very smooth experience.", rating: 5 },
    { name: "Anjali Devi", text: "Booked a tempo traveller for our group trip to Valparai. The vehicle was well-maintained and the journey was very comfortable.", rating: 5 },
  ];

  const transports = [
    { icon: <Train size={28} />, name: "Coimbatore Railway Station", sub: "All train pickups & drops" },
    { icon: <Plane size={28} />, name: "Coimbatore Airport (CJB)", sub: "24/7 airport transfers" },
    { icon: <Bus size={28} />, name: "Gandhipuram Bus Stand", sub: "City & inter-city transfers" },
  ];

  const trustGauges = [
    { icon: <Users size={32} />, title: "100+ Happy Customers", desc: "Trusted by families & corporates" },
    { icon: <Star size={32} />, title: "Experienced Drivers", desc: "Professional & local experts" },
    { icon: <ShieldCheck size={32} />, title: "Clean & Maintained", desc: "Sanitized premium vehicles" },
    { icon: <Headphones size={32} />, title: "24/7 Support", desc: "We're always here to help" },
  ];

  return (
    <div className="homepage">
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── Hero ── */
        .hero-v2 {
          min-height: 100vh;
          position: relative;
          background: url('/images/hero_new.png') center/cover no-repeat;
          display: flex; align-items: center;
          color: white; text-align: left; padding-top: 5rem;
        }
        .hero-v2::before {
          content:'';
          position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%);
          z-index:1;
        }
        .hero-inner { position:relative; z-index:2; }
        .hero-heading {
          font-size: clamp(2.6rem, 7vw, 4.8rem);
          font-weight: 900; line-height: 1.08;
          margin-bottom: 1.2rem; color: #ffffff;
          text-shadow: 0 4px 20px rgba(0,0,0,0.6);
        }
        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          color: rgba(255,255,255,0.95);
          margin-bottom: 2rem;
          max-width: 600px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
          font-weight: 500;
        }
        .urgency-line {
          font-weight: 800; font-size: 0.95rem; color: var(--accent);
          text-transform: uppercase; letter-spacing: 1px;
          margin-bottom: 2.5rem; display: block;
        }
        
        .hero-cta-row { display:flex; gap:1.2rem; flex-wrap:wrap; }
        .hero-cta-pill {
          display:inline-flex; align-items:center; gap:0.6rem;
          padding:0.8rem 1.8rem; border-radius:50px; font-weight:800;
          font-size:0.95rem; text-decoration:none; transition:0.25s;
          backdrop-filter:blur(10px);
        }
        .hero-pill-call { background:rgba(255,255,255,0.2); border:2.5px solid rgba(255,255,255,0.7); color:white; }
        .hero-pill-call:hover { background:rgba(255,255,255,0.35); transform: translateY(-2px); }
        .hero-pill-wa { background:#25D366; border:2.5px solid #25D366; color:white; box-shadow: 0 4px 15px rgba(37,211,102,0.3); }
        .hero-pill-wa:hover { background:#1ea853; transform: translateY(-2px); }

        /* ── Trust Gauge ── */
        .trust-gauge-grid { 
          display: grid; gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        .trust-gauge-card {
          padding: 2rem; background: white; border-radius: 20px;
          border: 1px solid #f0f0f0; text-align: center;
          transition: 0.3s;
        }
        .trust-gauge-card:hover { border-color: var(--accent); transform: translateY(-5px); }
        .tg-icon { color: var(--primary); margin-bottom: 1.25rem; display: inline-block; }

        /* ── Fleet ── */
        .fleet-card {
          background:white; border-radius:20px; overflow:hidden;
          box-shadow:0 8px 30px rgba(0,0,0,0.07);
          border:1px solid #f0f0f0; display:flex; flex-direction:column;
          transition:0.3s;
        }
        .fleet-card:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(0,0,0,0.12); }
        .fleet-img { height:210px; overflow:hidden; background:#f5f5f5; }
        .fleet-img img { width:100%; height:100%; object-fit:cover; transition: 0.5s; }
        .fleet-card:hover .fleet-img img { transform: scale(1.05); }
        .fleet-body { padding:1.5rem 1.75rem; display:flex; flex-direction:column; flex-grow:1; }
        .cap-tag { background:#fff0f0; color:#c0392b; padding:0.3rem 0.9rem; border-radius:6px; font-weight:800; font-size:0.78rem; margin-bottom:0.75rem; display:inline-block; }
        .fleet-inquiry-btn {
          width:100%; padding:0.9rem; margin-top:auto;
          background:var(--accent); color:var(--primary);
          border:none; border-radius:12px; font-weight:900; font-size:0.95rem;
          cursor:pointer; display:flex; align-items:center; justify-content:center;
          gap:0.5rem; transition:0.2s;
        }
        .fleet-inquiry-btn:hover { background:#e6c000; transform:scale(1.02); }

        /* ── Reviews ── */
        .review-card {
          background: white; padding: 2.5rem; border-radius: 20px;
          border: 1px solid #f0f0f0; box-shadow: 0 5px 20px rgba(0,0,0,0.03);
          display: flex; flex-direction: column; gap: 1rem;
        }
        .star-box { color: #f39c12; display: flex; gap: 3px; }

        /* ── Destinations ── */
        .dest-card {
          border-radius:18px; overflow:hidden; position:relative;
          height:200px; cursor:pointer; transition:0.35s;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
        }
        .dest-card:hover { transform:translateY(-6px) scale(1.02); }
        .dest-card img { width:100%; height:100%; object-fit:cover; transition: 0.5s; }
        .dest-card:hover img { transform: scale(1.1); }
        .dest-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%);
          display:flex; flex-direction:column; justify-content:flex-end; padding:1.25rem;
        }
        .dest-name { color:white; font-size:1.3rem; font-weight:900; margin:0; }
        .dest-sub  { color:rgba(255,255,255,0.9); font-size:0.82rem; margin:0; }
        .dest-km   { position:absolute; top:0.9rem; right:0.9rem; background:var(--accent); color:var(--primary); padding:0.25rem 0.7rem; border-radius:20px; font-weight:800; font-size:0.78rem; }

        /* ── Temples ── */
        .temple-card {
          border-radius:18px; overflow:hidden; position:relative;
          height:220px; transition:0.35s;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
        }
        .temple-card:hover { transform:translateY(-6px); }
        .temple-card img { width:100%; height:100%; object-fit:cover; transition: 0.5s; }
        .temple-card:hover img { transform: scale(1.08); }
        .temple-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(120,40,0,0.8) 0%, transparent 60%);
          display:flex; flex-direction:column; justify-content:flex-end; padding:1.25rem;
        }
        .temple-name { color:white; font-size:1.2rem; font-weight:900; margin:0; }
        .temple-sub  { color:rgba(255,255,255,0.85); font-size:0.82rem; margin:0.2rem 0 0; }

        /* ── Transport ── */
        .transport-card {
          background:white; border-radius:18px; padding:2rem 1.75rem;
          border:1px solid #eee; display:flex; gap:1.5rem; align-items:center;
          box-shadow:0 4px 20px rgba(0,0,0,0.05); transition:0.3s;
        }
        .transport-card:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08); }
        .t-icon { width:60px; height:60px; background:#f0f4f8; color:var(--primary); border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:0.3s; }
        .transport-card:hover .t-icon { background:var(--accent); }

        /* ── Trust boxes ── */
        .trust-box { text-align:center; padding:2.5rem 2rem; border-radius:20px; background:white; border:1px solid #eee; transition:0.3s; }
        .trust-box:hover { border-color:var(--accent); transform:translateY(-5px); box-shadow: 0 10px 40px rgba(0,0,0,0.06); }
        .trust-icon { width:70px; height:70px; background:#f0f4f8; color:var(--primary); border-radius:15px; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; transition:0.3s; }
        .trust-box:hover .trust-icon { background:var(--accent); }

        /* ── Modal ── */
        .eq-modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:20000; display:flex; align-items:center; justify-content:center; padding:1rem; backdrop-filter:blur(4px); }
        .eq-modal-box { background:white; border-radius:24px; width:100%; max-width:680px; max-height:92vh; overflow-y:auto; padding:2.5rem; position:relative; box-shadow:0 30px 80px rgba(0,0,0,0.25); }
        .eq-modal-close { position:absolute; top:1.2rem; right:1.2rem; background:#f3f4f6; border:none; border-radius:50%; width:38px; height:38px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.2s; color:#374151; }
        .eq-modal-close:hover { background:#fee2e2; color:#dc2626; }

        /* ── Section label ── */
        .sec-label { font-size:0.85rem; font-weight:900; color:var(--primary); text-transform:uppercase; letter-spacing:3px; margin-bottom:0.75rem; opacity:0.8; }
        
        .section-cta-row { text-align: center; margin-top: 4rem; }
        .btn-big-wa { 
          display: inline-flex; align-items: center; gap: 1rem;
          background: var(--accent); color: var(--primary);
          padding: 1.4rem 3.5rem; border-radius: 15px;
          font-weight: 900; font-size: 1.25rem; text-decoration: none;
          box-shadow: 0 10px 25px rgba(255,204,0,0.3);
          transition: 0.3s;
        }
        .btn-big-wa:hover { transform: translateY(-3px); box-shadow: 0 15px 35px rgba(255,204,0,0.4); }

        @media (max-width:768px) {
          .hero-v2 { text-align:center; padding-top: 3rem; }
          .hero-cta-row { justify-content:center; }
          .hero-sub { margin-inline:auto; }
          .eq-modal-box { padding:1.5rem; }
        }
      `}} />

      {/* 1. HERO */}
      <section className="hero-v2">
        <div className="container hero-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="sec-label" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>COIMBATORE'S TRUSTED TRAVEL PARTNER</p>
            <h1 className="hero-heading">
              Premium Travels<br />
              <span style={{ color: 'var(--accent)' }}>Across South India</span>
            </h1>
            <p className="hero-sub">
              Experience the true spirit of travel with Coimbatore's most reliable experts. Safe, sanitized vehicles and professional local drivers for every journey.
            </p>
            <p className="urgency-line">Quick booking available. Limited vehicles during weekends.</p>
            <div className="hero-cta-row">
              <a href={`tel:+${phoneNumber}`} className="hero-cta-pill hero-pill-call">
                <Phone size={16} /> +91 63692 84551
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="hero-cta-pill hero-pill-wa">
                <WhatsAppIcon size={16} /> Instant Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PREMIUM FLEET */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">OUR FLEET</p>
            <h2 style={{ fontSize: '2.8rem' }}>Excellence in Motion</h2>
            <p>From luxury sedans to spacious group coaches—no number plates, no hassle, just pure professional service.</p>
          </div>
          <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {fleet.map((v, i) => (
              <motion.div key={i} className="fleet-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <div className="fleet-img">
                  <img src={v.img} alt={v.name} loading="lazy" decoding="async" />
                </div>
                <div className="fleet-body">
                  <span className="cap-tag">👤 {v.cap}</span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 800 }}>{v.name}</h3>
                  <button className="fleet-inquiry-btn"
                    onClick={() => setModal({ vehicleType: v.vehicleType, seating: v.seating, name: v.name })}>
                    <WhatsAppIcon size={18} /> ENQUIRE NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta-row">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-big-wa">
              <WhatsAppIcon size={24} /> BOOK YOUR VEHICLE NOW
            </a>
          </div>
        </div>
      </section>

      {/* 3. TRUST GAUGE */}
      <section className="section-padding bg-light" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="trust-gauge-grid">
            {trustGauges.map((tg, i) => (
              <motion.div key={i} className="trust-gauge-card"
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="tg-icon">{tg.icon}</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 850, marginBottom: '0.4rem' }}>{tg.title}</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#6B7280' }}>{tg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HILL STATIONS ESCAPE */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <p className="sec-label">NATURE CALLS</p>
              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '2rem' }}>
                Refresh in the <br />
                <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>Evergreen Hills</span>
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                From the misty hairpins of Valparai to the sprawling tea estates of Ooty, let us take you through the most scenic routes of South India in absolute comfort.
              </p>
              <div style={{ display: 'grid', gap: '1.2rem', marginBottom: '3rem' }}>
                {["Private Hill Station Packages", "Customizable Sightseeing Tours", "Premium Group Travel Support"].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <CheckCircle size={22} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>{s}</p>
                  </div>
                ))}
              </div>
              <a href={waLink} className="btn-big-wa" style={{ width: 'auto' }}>
                <WhatsAppIcon size={24} /> PLAN YOUR HILL TRIP
              </a>
            </div>
            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 70px rgba(0,0,0,0.18)' }}>
                <img src="/images/hills_dest.png" alt="Tamil Nadu Hill Station" style={{ width: '100%', display: 'block' }} loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR DESTINATIONS */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">POPULAR ROUTES</p>
            <h2 style={{ fontSize: '2.8rem' }}>Unique Hill Station Escapes</h2>
            <p>Hand-picked routes near Coimbatore for your next perfect getaway.</p>
          </div>
          <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {destinations.map((d, i) => (
              <motion.div key={i} className="dest-card"
                initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="dest-overlay">
                  <p className="dest-name">{d.name}</p>
                  <p className="dest-sub">{d.sub}</p>
                </div>
                <span className="dest-km">{d.km}</span>
              </motion.div>
            ))}
          </div>
          <div className="section-cta-row">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-big-wa">
              <WhatsAppIcon size={24} /> ENQUIRE ABOUT A TRIP
            </a>
          </div>
        </div>
      </section>

      {/* 6. SPIRITUAL JOURNEYS */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">SPIRITUAL JOURNEYS</p>
            <h2 style={{ fontSize: '2.8rem' }}>Temple & Divine Tours</h2>
            <p>Peaceful and professional travel to the region's most sacred destinations.</p>
          </div>
          <div className="grid grid-3">
            {temples.map((t, i) => (
              <motion.div key={i} className="temple-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <div className="temple-overlay">
                  <p className="temple-name">{t.name}</p>
                  <p className="temple-sub">{t.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta-row">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-big-wa">
              <WhatsAppIcon size={24} /> PLAN MY TEMPLE TRIP
            </a>
          </div>
        </div>
      </section>

      {/* 7. TRANSPORT POINTS */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">EASY TRANSFERS</p>
            <h2 style={{ fontSize: '2.8rem' }}>Airport & City Links</h2>
            <p>Seamless connectivity to every transit hub in Coimbatore with our 24/7 fleet.</p>
          </div>
          <div className="grid grid-3">
            {transports.map((t, i) => (
              <motion.div key={i} className="transport-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="t-icon">{t.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem', fontWeight: 800 }}>{t.name}</h3>
                  <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.95rem' }}>{t.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="section-cta-row">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-big-wa">
              <WhatsAppIcon size={24} /> BOOK AIRPORT PICKUP
            </a>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">WHY CHOOSE US</p>
            <h2 style={{ fontSize: '2.8rem' }}>The INAI Travels Standard</h2>
          </div>
          <div className="grid grid-3">
            {[
              { i: <Clock size={35} />, t: "Always On Time", d: "Our Coimbatore-based experts value your time as much as you do. Punctuality is our core promise." },
              { i: <Award size={35} />, t: "Hygiene First", d: "Spotless interiors, fresh covers, and sanitized vehicles for a premium travel experience every time." },
              { i: <Users size={35} />, t: "Expert Drivers", d: "Fully verified professional drivers with deep knowledge of every South Indian route." },
            ].map((item, i) => (
              <div key={i} className="trust-box">
                <div className="trust-icon">{item.i}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800 }}>{item.t}</h3>
                <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>{item.d}</p>
              </div>
            ))}
          </div>
          <div className="section-cta-row">
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-big-wa">
              <WhatsAppIcon size={24} /> WHATSAPP FOR QUICK QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER REVIEWS */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">TESTIMONIALS</p>
            <h2 style={{ fontSize: '2.8rem' }}>What Our Happy Travelers Say</h2>
          </div>
          <div className="grid grid-3">
            {reviews.map((r, i) => (
              <motion.div key={i} className="review-card"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="star-box">
                  {[...Array(5)].map((_, j) => <Star key={j} size={18} fill="#f39c12" />)}
                </div>
                <p style={{ fontStyle: 'italic', color: '#4B5563', lineHeight: 1.6 }}>"{r.text}"</p>
                <p style={{ margin: 0, fontWeight: 900, fontSize: '1.1rem', color: 'var(--primary)', marginTop: 'auto' }}>- {r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. QUICK ENQUIRY */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            <div>
              <p className="sec-label">GET A QUOTE</p>
              <h2 style={{ fontSize: '2.8rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Instant Booking<br />
                <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>Simplified</span>
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Enter your trip details below. Our reservation team will provide you the best quote on WhatsApp within minutes. No hidden surprises.
              </p>
              <div style={{ display: 'grid', gap: '1.3rem' }}>
                {[
                  "Transparent & Logical Billing",
                  "Verified Professional Chauffeurs",
                  "Well-Maintained Premium Fleet",
                  "24/7 Dedicated Journey Support",
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <CheckCircle size={24} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '28px', padding: '3rem', border: '1px solid #f0f0f0', boxShadow: '0 15px 50px rgba(0,0,0,0.06)' }}>
              <h3 style={{ marginBottom: '0.6rem', fontSize: '1.8rem', fontWeight: 800 }}>Trip Enquiry</h3>
              <p style={{ color: '#6B7280', marginBottom: '2.5rem', fontSize: '1rem' }}>We'll get back to you instantly on WhatsApp.</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="section-padding" style={{ background: 'var(--primary)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 900 }}>Your Journey Starts Here</h2>
          <p style={{ opacity: 0.95, fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '750px', marginInline: 'auto', fontWeight: 500, color: 'white', lineHeight: 1.6 }}>
            Join the growing family of happy travelers who choose INAI Travels for every mile across South India. Simple booking, professional travel.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ padding: '1.5rem 3.5rem', fontSize: '1.2rem', fontWeight: 900 }}>
              <Phone size={24} /> CALL +91 63692 84551
            </a>
            <a href={waLink} className="btn-big-wa" style={{ border: 'none' }}>
              <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> CHAT ON WHATSAPP
            </a>
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
              <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem', paddingRight: '2rem', fontWeight: 800 }}>Enquiry: {modal.name}</h2>
              <p style={{ color: '#6B7280', marginBottom: '2.5rem', fontSize: '1rem' }}>Fill in your travel details to get your personalized quotation via WhatsApp.</p>
              <EnquiryForm prefillVehicleType={modal.vehicleType} prefillSeating={modal.seating} onClose={() => setModal(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
