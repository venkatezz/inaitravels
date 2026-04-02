import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Car, Users, Calendar, Award } from 'lucide-react';

const Services = () => {
  const phoneNumber = "916369284551";
  const waBase = "Hello INAI Travels, I'm interested in your services.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  const services = [
    {
      icon: <Car size={32} />,
      title: "Local City Rental",
      desc: "Convenient and affordable rides within Coimbatore. Perfect for shopping, business meetings, or city exploration. Available in flexible hourly packages."
    },
    {
      icon: <MapPin size={32} />,
      title: "Outstation Trips",
      desc: "Planning a trip to Ooty, Munnar, or Kodaikanal? Our professional drivers ensure a comfortable and safe journey to your favorite destinations across Tamil Nadu."
    },
    {
      icon: <Plane size={32} />,
      title: "Airport Transfers",
      desc: "Reliable and timely pick-up and drop-off services for Coimbatore International Airport (CJB). Never worry about missing your flight with our 24/7 service."
    },
    {
      icon: <Users size={32} />,
      title: "Corporate Fleet",
      desc: "Dedicated travel management for businesses. Reliable transport for employees and guests with monthly billing and verified driver profiles."
    },
    {
      icon: <Calendar size={32} />,
      title: "Wedding & Events",
      desc: "Premium luxury cars for weddings and large tempo travellers for guest transport. Make your special day even more memorable with INAI Travels."
    },
    {
      icon: <Award size={32} />,
      title: "Pilgrimage Tours",
      desc: "Specially curated tour packages to famous temples in South India including Marudhamalai, Palani, and Madurai Meenakshi, designed for family comfort."
    }
  ];

  return (
    <div className="services-page">
      <style dangerouslySetInnerHTML={{
        __html: `
        .services-hero {
          background-color: var(--primary);
          color: white;
          padding: 10rem 0 6rem;
          text-align: center;
        }
        .service-card {
          padding: 3rem 2.5rem;
          height: 100%;
          border: 1px solid #eee;
          background: white;
          transition: 0.3s;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
        }
        .service-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.08); border-color: var(--accent); }
        .service-icon {
          width: 70px;
          height: 70px;
          background: #f0f4f8;
          color: var(--primary);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          transition: 0.3s;
        }
        .service-card:hover .service-icon { background: var(--accent); }
        .service-item-title {
          font-size: 1.6rem;
          margin-bottom: 1.2rem;
          font-weight: 800;
        }
        .service-item-desc {
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
      `}} />

      <section className="services-hero">
        <div className="container">
          <motion.h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Premium Travel Solutions
          </motion.h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '750px', margin: '0 auto', fontWeight: 500 }}>From airport drops to spiritual temple tours—we provide the most reliable transport services in the Coimbatore region.</p>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid grid-3">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-item-title">{s.title}</h3>
                <p className="service-item-desc">{s.desc}</p>
                <div style={{ marginTop: 'auto' }}>
                  <a href={`https://wa.me/${phoneNumber}?text=Hi%20INAI%20Travels,%20I'm%20interested%20in%20your%20${s.title}%20service.`} className="btn btn-primary" style={{ width: '100%', fontWeight: 800 }}>
                    Book Service Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ background: 'var(--bg-light)', padding: '8rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>South India Trips <br />You Can <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>Completely Trust</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>Every journey with INAI Travels is built on the foundation of safety, punctuality, and pure local hospitality. Our drivers are more than just chauffeurs; they are your local guides.</p>
              <ul style={{ display: 'grid', gap: '1.8rem' }}>
                {[
                  "Transparent Billing (No Surprise Costs)",
                  "Deeply Sanitized Premium Vehicles",
                  "Expert Regional Drivers (Multi-lingual)",
                  "24/7 Dedicated Support Hotline"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontWeight: 700, fontSize: '1.1rem' }}>
                    <div style={{ width: '32px', height: '32px', background: 'var(--primary)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
               <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}>
                  <img src="/images/airport_pickup.png" alt="Inai Travels Airport Pickup" style={{ width: '100%', display: 'block' }} loading="lazy" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
