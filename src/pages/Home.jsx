import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle, ArrowRight, Clock, Award, Users, X, MapPin, Navigation, Train, Plane, Bus } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryForm from '../components/EnquiryForm';

const Home = () => {
  const phoneNumber = "916369284551";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello INAI Travels, I'm interested in booking a vehicle.")}`;
  const [modal, setModal] = useState(null);

  const fleet = [
    { name: "Sedan – Swift Dzire",      cap: "4 Seater",        img: "/images/swift_dzire.png",      vehicleType: "Car",             seating: "4"  },
    { name: "SUV – Innova Crysta",       cap: "7 Seater",        img: "/images/innova_crysta.png",    vehicleType: "Car",             seating: "7"  },
    { name: "Tempo Traveller",           cap: "14 Seater",       img: "/images/tempo_traveller.png",  vehicleType: "Tempo Traveller", seating: "14" },
    { name: "Force Urbania",             cap: "18 Seater",       img: "/images/force_urbania_clean.png", vehicleType: "Tempo Traveller", seating: "18" },
    { name: "Luxury Tourist Bus",        cap: "18–52 Seater",    img: "/images/tourist_bus.png",      vehicleType: "Bus",             seating: "52" },
  ];

  const destinations = [
    { name: "Ooty",      sub: "Queen of Hill Stations", img: "/images/ooty_dest.png",   km: "86 km" },
    { name: "Coonoor",   sub: "Tea Garden Paradise",    img: "/images/ooty_dest.png",   km: "76 km" },
    { name: "Valparai",  sub: "Misty Rainforest Town",  img: "/images/hills_dest.png",  km: "104 km" },
    { name: "Pollachi",  sub: "Gateway to Wildlife",    img: "/images/hills_dest.png",  km: "40 km" },
    { name: "Palakkad",  sub: "Kerala Border City",     img: "/images/ooty_dest.png",   km: "55 km" },
  ];

  const temples = [
    { name: "Marudamalai Temple",    sub: "Lord Murugan, Coimbatore",  img: "/images/temple_dest.png" },
    { name: "Isha Yoga Center",      sub: "Velliangiri Hills, CBE",    img: "/images/hills_dest.png"  },
    { name: "Palani Murugan Temple", sub: "Palani, 100 km from CBE",   img: "/images/temple_dest.png" },
  ];

  const transports = [
    { icon: <Train size={28} />, name: "Coimbatore Railway Station", sub: "All train pickups & drops" },
    { icon: <Plane size={28} />, name: "Coimbatore Airport (CJB)",  sub: "24/7 airport transfers" },
    { icon: <Bus  size={28} />, name: "Gandhipuram Bus Stand",       sub: "City & inter-city transfers" },
  ];

  return (
    <div className="homepage">
      <style dangerouslySetInnerHTML={{ __html: `
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
          background: linear-gradient(135deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 100%);
          z-index:1;
        }
        .hero-inner { position:relative; z-index:2; }
        .hero-heading {
          font-size: clamp(2.6rem, 7vw, 4.8rem);
          font-weight: 900; line-height: 1.08;
          margin-bottom: 1.2rem; color: #ffffff;
          text-shadow: 0 3px 18px rgba(0,0,0,0.55);
        }
        .hero-sub {
          font-size: clamp(1rem, 2.5vw, 1.35rem);
          color: rgba(255,255,255,0.92);
          margin-bottom: 2.5rem;
          max-width: 580px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          font-weight: 500;
        }
        .hero-cta-row { display:flex; gap:1rem; flex-wrap:wrap; }
        .hero-cta-pill {
          display:inline-flex; align-items:center; gap:0.5rem;
          padding:0.7rem 1.6rem; border-radius:50px; font-weight:700;
          font-size:0.95rem; text-decoration:none; transition:0.25s;
          backdrop-filter:blur(8px);
        }
        .hero-pill-call { background:rgba(255,255,255,0.18); border:2px solid rgba(255,255,255,0.6); color:white; }
        .hero-pill-call:hover { background:rgba(255,255,255,0.3); }
        .hero-pill-wa { background:#25D366; border:2px solid #25D366; color:white; }
        .hero-pill-wa:hover { background:#1ea853; }

        /* ── Fleet ── */
        .fleet-card {
          background:white; border-radius:20px; overflow:hidden;
          box-shadow:0 8px 30px rgba(0,0,0,0.07);
          border:1px solid #f0f0f0; display:flex; flex-direction:column;
          transition:0.3s;
        }
        .fleet-card:hover { transform:translateY(-8px); box-shadow:0 20px 50px rgba(0,0,0,0.12); }
        .fleet-img { height:210px; overflow:hidden; background:#f5f5f5; }
        .fleet-img img { width:100%; height:100%; object-fit:cover; }
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

        /* ── Destinations ── */
        .dest-card {
          border-radius:18px; overflow:hidden; position:relative;
          height:200px; cursor:pointer; transition:0.35s;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
        }
        .dest-card:hover { transform:translateY(-6px) scale(1.02); }
        .dest-card img { width:100%; height:100%; object-fit:cover; }
        .dest-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%);
          display:flex; flex-direction:column; justify-content:flex-end; padding:1.25rem;
        }
        .dest-name { color:white; font-size:1.3rem; font-weight:900; margin:0; }
        .dest-sub  { color:rgba(255,255,255,0.85); font-size:0.82rem; margin:0; }
        .dest-km   { position:absolute; top:0.9rem; right:0.9rem; background:var(--accent); color:var(--primary); padding:0.25rem 0.7rem; border-radius:20px; font-weight:800; font-size:0.78rem; }

        /* ── Temples ── */
        .temple-card {
          border-radius:18px; overflow:hidden; position:relative;
          height:220px; transition:0.35s;
          box-shadow:0 6px 25px rgba(0,0,0,0.1);
        }
        .temple-card:hover { transform:translateY(-6px); }
        .temple-card img { width:100%; height:100%; object-fit:cover; }
        .temple-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to top, rgba(120,40,0,0.75) 0%, transparent 60%);
          display:flex; flex-direction:column; justify-content:flex-end; padding:1.25rem;
        }
        .temple-name { color:white; font-size:1.2rem; font-weight:900; margin:0; }
        .temple-sub  { color:rgba(255,255,255,0.82); font-size:0.82rem; margin:0.2rem 0 0; }

        /* ── Transport ── */
        .transport-card {
          background:white; border-radius:18px; padding:2rem 1.75rem;
          border:1px solid #eee; display:flex; gap:1.5rem; align-items:center;
          box-shadow:0 4px 20px rgba(0,0,0,0.05); transition:0.3s;
        }
        .transport-card:hover { border-color:var(--accent); transform:translateY(-4px); }
        .t-icon { width:60px; height:60px; background:#f0f4f8; color:var(--primary); border-radius:14px; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:0.3s; }
        .transport-card:hover .t-icon { background:var(--accent); }

        /* ── Trust boxes ── */
        .trust-box { text-align:center; padding:2.5rem 2rem; border-radius:20px; background:white; border:1px solid #eee; transition:0.3s; }
        .trust-box:hover { border-color:var(--accent); transform:translateY(-5px); }
        .trust-icon { width:70px; height:70px; background:#f0f4f8; color:var(--primary); border-radius:15px; display:flex; align-items:center; justify-content:center; margin:0 auto 1.5rem; transition:0.3s; }
        .trust-box:hover .trust-icon { background:var(--accent); }

        /* ── Modal ── */
        .eq-modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:20000; display:flex; align-items:center; justify-content:center; padding:1rem; backdrop-filter:blur(4px); }
        .eq-modal-box { background:white; border-radius:24px; width:100%; max-width:680px; max-height:92vh; overflow-y:auto; padding:2.5rem; position:relative; box-shadow:0 30px 80px rgba(0,0,0,0.25); }
        .eq-modal-close { position:absolute; top:1.2rem; right:1.2rem; background:#f3f4f6; border:none; border-radius:50%; width:38px; height:38px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.2s; color:#374151; }
        .eq-modal-close:hover { background:#fee2e2; color:#dc2626; }

        /* ── Section label ── */
        .sec-label { font-size:0.82rem; font-weight:800; color:var(--primary); text-transform:uppercase; letter-spacing:2.5px; margin-bottom:0.6rem; opacity:0.65; }

        @media (max-width:768px) {
          .hero-v2 { text-align:center; }
          .hero-cta-row { justify-content:center; }
          .hero-sub { margin-inline:auto; }
          .eq-modal-box { padding:1.5rem; }
        }
      `}} />

      {/* ════ 1. HERO ════ */}
      <section className="hero-v2">
        <div className="container hero-inner">
          <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <p className="sec-label" style={{ color:'rgba(255,255,255,0.7)' }}>COIMBATORE'S TRUSTED TRAVEL PARTNER</p>
            <h1 className="hero-heading">
              Premium Travels<br />
              <span style={{ color:'var(--accent)' }}>Across Tamil Nadu</span>
            </h1>
            <p className="hero-sub">
              Safe, clean, and professional journeys with local experts. From airport pickups to Ooty hill tours — we've got you covered.
            </p>
            <div className="hero-cta-row">
              <a href={`tel:+${phoneNumber}`} className="hero-cta-pill hero-pill-call">
                <Phone size={16} /> +91 63692 84551
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="hero-cta-pill hero-pill-wa">
                <WhatsAppIcon size={16} /> Book on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════ 2. PREMIUM FLEET ════ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">OUR FLEET</p>
            <h2 style={{ fontSize:'2.8rem' }}>Premium Vehicles for Every Journey</h2>
            <p>Sedans, SUVs, Tempo Travellers, and Luxury Buses — all well-maintained with verified drivers.</p>
          </div>
          <div className="grid grid-3" style={{ gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))' }}>
            {fleet.map((v, i) => (
              <motion.div key={i} className="fleet-card"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.08 }}>
                <div className="fleet-img">
                  <img src={v.img} alt={v.name} loading="lazy" decoding="async" />
                </div>
                <div className="fleet-body">
                  <span className="cap-tag">👥 {v.cap}</span>
                  <h3 style={{ fontSize:'1.35rem', marginBottom:'1.25rem' }}>{v.name}</h3>
                  <button className="fleet-inquiry-btn"
                    onClick={() => setModal({ vehicleType:v.vehicleType, seating:v.seating, name:v.name })}>
                    <WhatsAppIcon size={18} /> ENQUIRE NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'3rem' }}>
            <Link to="/vehicles" className="btn btn-primary" style={{ padding:'1.1rem 2.5rem' }}>
              VIEW FULL FLEET <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════ 3. WHY CHOOSE US ════ */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">WHY INAI TRAVELS</p>
            <h2 style={{ fontSize:'2.8rem' }}>Trusted by Thousands<br />Across South India</h2>
          </div>
          <div className="grid grid-3">
            {[
              { i:<Clock size={35}/>,   t:"Punctual & Reliable",   d:"Time is precious. Our Coimbatore drivers are always on time, every single ride." },
              { i:<Award size={35}/>,   t:"Hygiene Guaranteed",     d:"Spotless interiors and sanitized vehicles for a safe and comfortable journey always." },
              { i:<Users size={35}/>,   t:"Local Route Experts",    d:"Our drivers know every route in Tamil Nadu, Kerala, and Karnataka for the smoothest trips." },
            ].map((item, i) => (
              <div key={i} className="trust-box">
                <div className="trust-icon">{item.i}</div>
                <h3 style={{ fontSize:'1.5rem', marginBottom:'1rem' }}>{item.t}</h3>
                <p style={{ color:'var(--text-light)', margin:0, fontSize:'1.05rem' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 4. POPULAR DESTINATIONS ════ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">POPULAR ROUTES</p>
            <h2 style={{ fontSize:'2.8rem' }}>Popular Destinations<br />Near Coimbatore</h2>
            <p>Day trips, weekend getaways, and multi-day tours to the most beloved spots in Tamil Nadu.</p>
          </div>
          <div className="grid grid-3" style={{ gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {destinations.map((d, i) => (
              <motion.div key={i} className="dest-card"
                initial={{ opacity:0, scale:0.96 }} whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }} transition={{ delay: i * 0.07 }}>
                <img src={d.img} alt={d.name} loading="lazy" />
                <div className="dest-overlay">
                  <p className="dest-name">{d.name}</p>
                  <p className="dest-sub">{d.sub}</p>
                </div>
                <span className="dest-km">{d.km}</span>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'3rem' }}>
            <a href={waLink} className="btn btn-whatsapp" style={{ padding:'1.1rem 2.5rem' }}>
              <WhatsAppIcon size={20} /> BOOK A TRIP NOW
            </a>
          </div>
        </div>
      </section>

      {/* ════ 5. TEMPLE & SPIRITUAL TRIPS ════ */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">SPIRITUAL TRAVEL</p>
            <h2 style={{ fontSize:'2.8rem' }}>Temple &amp; Spiritual Trips</h2>
            <p>We offer specially planned temple tour packages from Coimbatore. Comfortable, safe, and devotional.</p>
          </div>
          <div className="grid grid-3">
            {temples.map((t, i) => (
              <motion.div key={i} className="temple-card"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.1 }}>
                <img src={t.img} alt={t.name} loading="lazy" />
                <div className="temple-overlay">
                  <p className="temple-name">{t.name}</p>
                  <p className="temple-sub">{t.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'3rem' }}>
            <a href={waLink} className="btn btn-primary" style={{ padding:'1.1rem 2.5rem' }}>
              PLAN MY TEMPLE TRIP <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* ════ 6. HILL STATIONS ════ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems:'center', gap:'5rem' }}>
            <div>
              <p className="sec-label">HILL STATIONS</p>
              <h2 style={{ fontSize:'2.8rem', lineHeight:1.1, marginBottom:'1.5rem' }}>
                Escape to the <br />
                <span style={{ color:'var(--primary)', borderBottom:'4px solid var(--accent)' }}>Green Hills</span>
              </h2>
              <p style={{ color:'var(--text-light)', fontSize:'1.15rem', marginBottom:'2rem' }}>
                Experience the cool breeze of Ooty, the misty trails of Coonoor, and the hidden waterfalls of Valparai — all within reach from Coimbatore.
              </p>
              <div style={{ display:'grid', gap:'1rem', marginBottom:'2.5rem' }}>
                {["Ooty – 86 km from Coimbatore","Coonoor – 76 km from Coimbatore","Valparai – 104 km, Stunning Rainforests"].map((s, i) => (
                  <div key={i} style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
                    <CheckCircle size={22} style={{ color:'var(--whatsapp)', flexShrink:0 }} />
                    <p style={{ margin:0, fontWeight:700, fontSize:'1.05rem' }}>{s}</p>
                  </div>
                ))}
              </div>
              <a href={waLink} className="btn btn-whatsapp" style={{ padding:'1.2rem 2.5rem' }}>
                <WhatsAppIcon size={20} /> BOOK A HILL TRIP
              </a>
            </div>
            <motion.div initial={{ x:50, opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once:true }}>
              <div style={{ borderRadius:'28px', overflow:'hidden', boxShadow:'0 25px 60px rgba(0,0,0,0.15)' }}>
                <img src="/images/hills_dest.png" alt="Hill station Tamil Nadu" style={{ width:'100%', display:'block' }} loading="lazy" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ 7. TRANSPORT POINTS ════ */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="section-title">
            <p className="sec-label">PICKUP & DROP</p>
            <h2 style={{ fontSize:'2.8rem' }}>We Cover All Major<br />Transport Points</h2>
            <p>Reliable pickups and drops at all major transit hubs in Coimbatore — 24/7.</p>
          </div>
          <div className="grid grid-3">
            {transports.map((t, i) => (
              <motion.div key={i} className="transport-card"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay: i * 0.1 }}>
                <div className="t-icon">{t.icon}</div>
                <div>
                  <h3 style={{ fontSize:'1.15rem', marginBottom:'0.4rem' }}>{t.name}</h3>
                  <p style={{ margin:0, color:'var(--text-light)', fontSize:'0.95rem' }}>{t.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 8. QUICK ENQUIRY ════ */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems:'flex-start', gap:'5rem' }}>
            <div>
              <p className="sec-label">BOOK NOW</p>
              <h2 style={{ fontSize:'2.8rem', lineHeight:1.1, marginBottom:'1.5rem' }}>
                Get a Quote in<br />
                <span style={{ color:'var(--primary)', borderBottom:'4px solid var(--accent)' }}>2 Minutes</span>
              </h2>
              <p style={{ color:'var(--text-light)', fontSize:'1.15rem', marginBottom:'2rem' }}>
                Fill in your trip details and our team will send you the best available quote via WhatsApp instantly. No advance payment required.
              </p>
              <div style={{ display:'grid', gap:'1rem' }}>
                {[
                  "All vehicle types available",
                  "Verified drivers, clean records",
                  "No hidden charges",
                  "24/7 WhatsApp & Phone support",
                ].map((item, i) => (
                  <div key={i} style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
                    <CheckCircle size={22} style={{ color:'var(--whatsapp)', flexShrink:0 }} />
                    <p style={{ margin:0, fontWeight:700, fontSize:'1.05rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:'#f9fafb', borderRadius:'24px', padding:'2.5rem', border:'1px solid #f0f0f0', boxShadow:'0 10px 40px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom:'0.5rem', fontSize:'1.6rem' }}>Quick Booking Enquiry</h3>
              <p style={{ color:'#6B7280', marginBottom:'2rem', fontSize:'0.95rem' }}>We respond within minutes on WhatsApp.</p>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ════ 9. FINAL CTA ════ */}
      <section className="section-padding" style={{ background:'var(--primary)', textAlign:'center' }}>
        <div className="container">
          <h2 style={{ color:'white', fontSize:'3rem', marginBottom:'1.5rem', fontWeight:900 }}>Ready to Book Your Journey?</h2>
          <p style={{ opacity:0.9, fontSize:'1.2rem', marginBottom:'3.5rem', maxWidth:'700px', marginInline:'auto', fontWeight:500, color:'white' }}>
            Join thousands of happy South India travelers who trust INAI Travels. Call or WhatsApp us in seconds.
          </p>
          <div style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ padding:'1.4rem 3rem', fontSize:'1.15rem', minWidth:'260px' }}>
              <Phone size={22} /> CALL +91 63692 84551
            </a>
            <a href={waLink} className="btn btn-whatsapp" style={{ padding:'1.4rem 3rem', fontSize:'1.15rem', minWidth:'260px' }}>
              <WhatsAppIcon size={22} style={{ marginRight:'8px' }} /> CHAT ON WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* ════ VEHICLE ENQUIRY MODAL ════ */}
      <AnimatePresence>
        {modal && (
          <motion.div className="eq-modal-overlay"
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            onClick={e => { if (e.target.classList.contains('eq-modal-overlay')) setModal(null); }}>
            <motion.div className="eq-modal-box"
              initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }} exit={{ scale:0.9, opacity:0 }}>
              <button className="eq-modal-close" onClick={() => setModal(null)}><X size={20} /></button>
              <h2 style={{ marginBottom:'0.4rem', fontSize:'1.8rem', paddingRight:'2rem' }}>Enquire: {modal.name}</h2>
              <p style={{ color:'#6B7280', marginBottom:'2rem', fontSize:'0.95rem' }}>Vehicle type and seating are pre-filled. Add your trip details for an instant WhatsApp quote.</p>
              <EnquiryForm prefillVehicleType={modal.vehicleType} prefillSeating={modal.seating} onClose={() => setModal(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
