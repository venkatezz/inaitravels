import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Plane, Car, Users, CheckCircle, Search, ArrowRight, MessageSquare, Menu, X, Navigation, Award, Clock } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Home = () => {
  const phoneNumber = "919876543210";
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fleet = [
    { name: "Sedan (Swift Dzire)", cap: "4+1 Seater", img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1000" },
    { name: "Innova Crysta", cap: "6-7 Seater", img: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1000" },
    { name: "Tempo Traveller", cap: "14 Seater (Force Urbania)", img: "https://images.pexels.com/photos/15239833/pexels-photo-15239833.jpeg?auto=compress&cs=tinysrgb&w=1000" },
    { name: "Luxury Buses", cap: "18 to 52 Seater", img: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=1000" }
  ];

  return (
    <div className="homepage-new-optimized">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-v2 {
          height: 100vh;
          background: linear-gradient(rgba(0,33,71,0.65), rgba(0,33,71,0.65)), url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
          text-align: left;
          padding-top: 5rem;
        }
        .hero-heading { font-size: clamp(2.5rem, 8vw, 4.2rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.5rem; text-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        .hero-sub { font-size: 1.3rem; opacity: 0.95; margin-bottom: 3.5rem; max-width: 650px; font-weight: 500; }
        
        .indian-card {
          background: white; border-radius: 20px; overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08); transition: 0.3s;
          border: 1px solid #f0f0f0; display: flex; flex-direction: column; height: 100%;
        }
        .indian-card:hover { transform: translateY(-8px); }
        .vehicle-img-box { height: 230px; position: relative; overflow: hidden; }
        .vehicle-img-box img { width: 100%; height: 100%; object-fit: cover; }
        .vehicle-card-body { padding: 2rem; display: flex; flex-direction: column; flex-grow: 1; }
        .v-cap-tag { background: #fee2e2; color: #dc2626; padding: 0.4rem 1rem; border-radius: 5px; font-weight: 700; font-size: 0.8rem; margin-bottom: 0.75rem; display: inline-block; }

        .trust-box { text-align: center; padding: 2rem; border-radius: 20px; background: white; border: 1px solid #eee; }
        .trust-icon { width: 60px; height: 60px; background: var(--bg-light); color: var(--primary); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; transition: 0.3s; }
        .trust-box:hover .trust-icon { background: var(--accent); color: var(--primary); }

        .floating-wa-btn {
          position: fixed; bottom: 5rem; right: 2rem; width: 65px; height: 65px;
          background: var(--whatsapp); color: white; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px rgba(37,211,102,0.4); z-index: 9999;
          transition: 0.3s;
        }
        @media (max-width: 768px) { .floating-wa-btn { display: none; } }
      `}} />

      {/* Hero Section */}
      <section className="hero-v2">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="hero-heading">Reliable Travels in <br /><span style={{ color: 'var(--accent)' }}>Coimbatore</span></h1>
            <p className="hero-sub">Coimbatore's most trusted travel partner. Book reliable cars, tempo travellers & buses for safe journeys across Tamil Nadu.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ minWidth: '200px' }}>
                <Phone size={20} /> CALL +91 98765 43210
              </a>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ minWidth: '200px' }}>
                <MessageCircle size={20} /> BOOK ON WHATSAPP
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
              { i: <Clock size={32} />, t: "Punctual & On-time", d: "Never miss a flight or a meeting. Our drivers are Coimbatore's most reliable experts." },
              { i: <Award size={32} />, t: "Cleanest Vehicles", d: "Indian roads, but world-class maintenance. Every vehicle sanitized after every ride." },
              { i: <Users size={32} />, t: "Professional Drivers", d: "No western GPS needed—our drivers know every South Indian bypass like the back of their hand." }
            ].map((item, i) => (
              <div key={i} className="trust-box">
                <div className="trust-icon">{item.i}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.t}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: 0 }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Fleet Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-title">
            <h2 style={{ fontSize: '2.5rem' }}>Our Local Fleet</h2>
            <p>From Sedans to 52-seater Coaches—Choose your perfect ride for Tamil Nadu tours.</p>
          </div>
          <div className="grid grid-4">
            {fleet.map((v, i) => (
              <motion.div key={i} className="indian-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="vehicle-img-box">
                  <img src={v.img} alt={v.name} />
                </div>
                <div className="vehicle-card-body">
                  <span className="v-cap-tag">{v.cap}</span>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{v.name}</h3>
                  <div style={{ marginTop: 'auto' }}>
                    <a href={`https://wa.me/${phoneNumber}?text=Hi%20INAI%20Travels,%20I'm%20interested%20in%20${v.name}.`} className="btn btn-whatsapp" style={{ width: '100%', fontSize: '0.95rem' }}>
                      BOOK ON WHATSAPP
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <Link to="/vehicles" className="btn btn-primary">
                SEE ALL VEHICLES <ArrowRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      {/* Services Context */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <div>
              <h2 style={{ fontSize: '2.8rem', lineHeight: '1.2' }}>Coimbatore Local & <br />South India <span style={{ color: 'var(--accent)' }}>Outstation</span></h2>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-light)' }}>Whether it's a quick trip to Ooty, a spiritual journey to Madurai, or an airport drop to CJB, we provide the most professional service in Coimbatore region.</p>
              <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--whatsapp)' }}><CheckCircle size={24} /></div>
                  <p style={{ margin: 0, fontWeight: 700 }}>Airport Pickup & Drop (CJB)</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--whatsapp)' }}><CheckCircle size={24} /></div>
                  <p style={{ margin: 0, fontWeight: 700 }}>Corporate & Wedding Bulk Bookings</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--whatsapp)' }}><CheckCircle size={24} /></div>
                  <p style={{ margin: 0, fontWeight: 700 }}>Customized South India Family Tours</p>
                </div>
              </div>
              <a href={waLink} className="btn btn-whatsapp" style={{ padding: '1.25rem 2.5rem' }}>
                GET A QUOTE ON WHATSAPP
              </a>
            </div>
            <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
               <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" alt="Local Highway" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Massive CTA */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
         <div className="container">
            <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1.5rem' }}>Don't Search, Just Book.</h2>
            <p style={{ opacity: 0.8, fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '700px', marginInline: 'auto' }}>Get instant quotes and confirm your booking on WhatsApp in under 2 minutes. We're ready for you 24/7.</p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
               <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem' }}>
                  <Phone size={24} /> CALL +91 98765 43210
               </a>
               <a href={waLink} className="btn btn-whatsapp" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem' }}>
                  <MessageCircle size={24} /> CHAT ON WHATSAPP
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
