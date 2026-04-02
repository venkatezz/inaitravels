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
          padding: 10rem 0 6rem;
          text-align: center;
        }
        .stat-card {
          padding: 2.5rem;
          text-align: center;
          border: 1px solid #f0f0f0;
          background: white;
          border-radius: 20px;
          transition: 0.3s;
        }
        .stat-card:hover { transform: translateY(-5px); border-color: var(--accent); }
        .value-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .value-cards { grid-template-columns: 1fr; }
        }
        .stat-icon {
          color: var(--accent);
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .stat-value {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        .stat-label {
          color: var(--text-light);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }
      `}} />

      <section className="about-banner">
        <div className="container">
          <motion.h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Who We Are
          </motion.h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto', fontWeight: 500 }}>A story of commitment, excellence, and a passion for connecting people to Coimbatore and every corner of Tamil Nadu.</p>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: '3rem', marginBottom: '2rem', lineHeight: 1.1 }}>Experience the <br />True Spirit of <span style={{ color: 'var(--primary)', borderBottom: '4px solid var(--accent)' }}>Travel</span></h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '1.5rem' }}>Founded in Coimbatore, INAI Travels started with one mission: making travel more than just a commute. We believe in providing a seamless journey where comfort and safety meet professional hospitality.</p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2.5rem' }}>Today, we manage a premium fleet and have safely connected thousands of travelers to destinations across South India. Our commitment remains the same: a premium experience for every passenger, every time.</p>
              <div className="value-cards">
                <div style={{ padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '15px', borderLeft: '5px solid var(--accent)' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Reliability</h4>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>Punctuality is our priority. Your schedule is our promise.</p>
                </div>
                <div style={{ padding: '1.5rem', background: 'var(--bg-light)', borderRadius: '15px', borderLeft: '5px solid var(--accent)' }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Integrity</h4>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>Transparent pricing with zero hidden costs across all routes.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
               <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
                  <img src="/images/coimbatore_scenic.png" alt="Inai Travels Coimbatore Scenic" style={{ width: '100%', display: 'block' }} loading="lazy" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '8rem 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="grid grid-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="stat-card"
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
