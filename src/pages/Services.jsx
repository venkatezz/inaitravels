import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Plane, Car, Users, Calendar, Award } from 'lucide-react';

const Services = () => {
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
      desc: "Reliable and timely pick-up and drop-off services for Coimbatore International Airport. Never worry about missing your flight again with our 24/7 service."
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
      <style dangerouslySetInnerHTML={{ __html: `
        .services-hero {
          background-color: var(--primary);
          color: white;
          padding: 8rem 0 5rem;
          text-align: center;
        }
        .service-card {
          padding: 3rem 2.5rem;
          height: 100%;
          border: 1px solid #eee;
          background: white;
        }
        .service-icon {
          width: 70px;
          height: 70px;
          background: var(--bg-light);
          color: var(--primary);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .service-item-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .service-item-desc {
          font-size: 0.95rem;
          color: var(--text-light);
          line-height: 1.7;
        }
      `}} />

      <section className="services-hero">
        <div className="container">
          <motion.h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Premium Travel Solutions
          </motion.h1>
          <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>From daily commutes to dream vacations, we provide reliable and safe transport services tailored to your needs.</p>
        </div>
      </section>

      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="grid grid-3">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card service-card"
              >
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-item-title">{s.title}</h3>
                <p className="service-item-desc">{s.desc}</p>
                <a href="https://wa.me/919876543210" className="btn btn-primary" style={{ marginTop: '2rem', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                  Inquire Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ background: 'var(--bg-light)', padding: '8rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Professionalism <br />You Can <span style={{ color: 'var(--accent)' }}>Trust</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>We don't just provide a vehicle; we provide a travel experience. Our drivers are trained in hospitality and road safety, ensuring your journey is as pleasant as the destination.</p>
              <ul style={{ display: 'grid', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: 600 }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                  Transparent Pricing (No Hidden Charges)
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: 600 }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                  Sanitized & Well-Maintained Vehicles
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontWeight: 600 }}>
                  <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
                  Background Verified Drivers
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ padding: '2rem' }}
            >
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000" alt="Service" style={{ borderRadius: '25px', boxShadow: 'var(--shadow-lg)' }} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
