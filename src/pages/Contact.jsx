import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Headphones } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import EnquiryForm from '../components/EnquiryForm';

const PHONE = "916369284551";

const Contact = () => {
  return (
    <div className="contact-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-hero {
          background: linear-gradient(rgba(0,33,71,0.9), rgba(0,33,71,0.9)), url('/images/hero_new.png');
          background-size: cover; background-position: center;
          color: white; padding: 10rem 0 6rem; text-align: center;
        }
        .contact-layout {
          display: grid; gap: 2rem;
          padding: 2.5rem 0 4rem;
        }
        @media (min-width: 992px) {
          .contact-layout { grid-template-columns: 1fr 1.6fr; }
        }
        .contact-info-card {
          background: white; padding: 2rem; border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05); height: fit-content;
          border: 1px solid #f0f0f0;
        }
        .contact-form-card {
          background: white; padding: 2rem; border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }
        .info-item {
          display: flex; gap: 1.25rem; align-items: flex-start; margin-bottom: 1.5rem;
        }
        .info-icon {
          width: 52px; height: 52px; background: #f0f4f8; color: var(--primary);
          border-radius: 14px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: 0.3s;
        }
        .info-item:hover .info-icon { background: var(--accent); }

        
        .contact-highlight-phone {
          font-size: 2.2rem; font-weight: 950; color: var(--primary); line-height: 1.1; margin-top: 0.5rem; display: block; text-decoration: none;
        }
        .contact-instant-badge {
          display: inline-block; background: var(--accent); color: var(--primary); padding: 0.3rem 0.8rem; border-radius: 6px; font-weight: 850; font-size: 0.8rem; margin-bottom: 0.5rem;
        }
        
        .map-wrapper {
          border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          height: 350px; margin-bottom: 4rem;
        }
        
        @media (max-width: 768px) {
          .contact-hero { padding: 6rem 1rem 2rem !important; }
          .contact-hero p { font-size: 1rem !important; margin-bottom: 0 !important; }
          .contact-layout { gap: 1rem; padding: 1rem 0 1.5rem; }
          .contact-info-card, .contact-form-card { padding: 1.15rem; border-radius: 16px; }
          .info-item { gap: 0.8rem; margin-bottom: 0.8rem; }
          .info-icon { width: 36px; height: 36px; border-radius: 10px; }
          .contact-highlight-phone { font-size: 1.4rem; }
          .contact-instant-badge { font-size: 0.7rem; padding: 0.2rem 0.6rem; }
          .map-wrapper { height: 200px; margin-bottom: 1.5rem; border-radius: 16px; }
          .contact-hero h1 { font-size: 2rem !important; margin-bottom: 0.75rem !important; }
          h2 { font-size: 1.4rem !important; margin-bottom: 1rem !important; }
          h4 { font-size: 0.95rem !important; }
          p { font-size: 0.85rem !important; }
        }
      `}} />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 900 }}
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            Book Your Journey
          </motion.h1>
          <p style={{ opacity: 0.9, fontSize: '1.3rem', maxWidth: '650px', margin: '0 auto', fontWeight: 500 }}>
            Fill the quick form below or call us directly. We respond on WhatsApp within minutes.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="contact-layout">

          {/* Left – Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
            className="contact-info-card">
            <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem' }}>Get in Touch</h2>

            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <span className="contact-instant-badge">24/7 INSTANT BOOKING</span>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: '#6B7280' }}>Call for Immediate Quote:</h4>
                <a href={`tel:+${PHONE}`} className="contact-highlight-phone">
                  +91 63692 84551
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><WhatsAppIcon size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: '#6B7280' }}>WhatsApp Support:</h4>
                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
                  style={{ fontSize: '1.6rem', fontWeight: 900, color: '#25D366', textDecoration: 'none' }}>
                  Chat with Us Now
                </a>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '0.4rem', marginBottom: 0 }}>Average response time: 2 mins</p>
              </div>
            </div>

            <div className="info-item" style={{ marginBottom: 0 }}>
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: '#6B7280' }}>Our Location:</h4>
                <a href="https://maps.app.goo.gl/i4L1nA8WiDgWyrKHA" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', margin: 0 }}>Coimbatore, Tamil Nadu</p>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '0.2rem', marginBottom: 0 }}>Serving all of South India</p>
                </a>
              </div>
            </div>


          </motion.div>

          {/* Right – Enquiry Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-form-card">
            <h2 style={{ marginBottom: '0.5rem', fontSize: '2rem' }}>Rapid Trip Enquiry</h2>
            <p style={{ color: '#6B7280', marginBottom: '2.5rem', fontSize: '1rem' }}>
              Fill in your trip details and we'll send you the best available quote on WhatsApp instantly.
            </p>
            <EnquiryForm />
          </motion.div>

        </div>

        {/* Map */}
        <div className="map-wrapper">
          <iframe
            src="https://maps.google.com/maps?q=11.056849,77.0041979&z=15&output=embed"
            width="100%" height="100%" style={{ border: 0 }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
