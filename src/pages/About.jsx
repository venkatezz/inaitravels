import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, value: "10+", label: "Years Experience" },
    { icon: <Users size={32} />, value: "20k+", label: "Happy Clients" },
    { icon: <Briefcase size={32} />, value: "50+", label: "Fleet Size" },
    { icon: <Star size={32} />, value: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="about-page">
      <style dangerouslySetInnerHTML={{
        __html: `
        .about-banner {
          background-color: var(--primary);
          color: white;
          padding: 8rem 0 5rem;
          text-align: center;
        }
        .about-content {
          margin-top: 5rem;
        }
        .stat-card {
          padding: 2.5rem;
          text-align: center;
          border: 1px solid #f0f0f0;
        }
        .stat-icon {
          color: var(--accent);
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        .stat-label {
          color: var(--text-light);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }
      `}} />

      <section className="about-banner">
        <div className="container">
          <motion.h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1rem' }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Who We Are
          </motion.h1>
          <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>A story of commitment, excellence, and a passion for connecting people to Coimbatore and beyond.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              style={{ paddingRight: '2rem' }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Experience the <br />True Spirit of <span style={{ color: 'var(--accent)' }}>Travel</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>Founded in the heart of Coimbatore, INAI Travels started with a single point: making travel more than just a commute. We believe in providing a seamless journey where comfort and safety meet professional hospitality.</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>Today, we manage a diverse fleet and have safely connected thousands of travelers to destinations across Tamil Nadu and beyond. Our commitment remains the same: a premium experience for every passenger, every time.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-light)', borderRadius: '10px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Reliability</h4>
                  <p style={{ fontSize: '0.85rem' }}>Punctuality is our middle name. Your schedule is our priority.</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--bg-light)', borderRadius: '10px' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Integrity</h4>
                  <p style={{ fontSize: '0.85rem' }}>Transparent pricing with no hidden costs, ever.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000" alt="About US" style={{ borderRadius: '25px', boxShadow: 'var(--shadow-lg)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ margin: '8rem 0', background: 'var(--bg-light)', padding: '5rem 0' }}>
        <div className="container">
          <div className="grid grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card stat-card"
              >
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
