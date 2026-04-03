import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock, Headphones } from 'lucide-react';
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
          display: grid; gap: 3rem;
          padding: 4rem 0 8rem;
        }
        @media (min-width: 992px) {
          .contact-layout { grid-template-columns: 1fr 1.6fr; }
        }
        .contact-info-card {
          background: white; padding: 3rem; border-radius: 24px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.08); height: fit-content;
          border: 1px solid #f0f0f0;
        }
        .contact-form-card {
          background: white; padding: 3rem; border-radius: 24px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
          border: 1px solid #f0f0f0;
        }
        .info-item {
          display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 2.5rem;
        }
        .info-icon {
          width: 52px; height: 52px; background: #f0f4f8; color: var(--primary);
          border-radius: 14px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: 0.3s;
        }
        .info-item:hover .info-icon { background: var(--accent); }
        .wa-big-btn {
          display: flex; align-items: center; justify-content: center; gap: 0.75rem;
          width: 100%; padding: 1.35rem; border-radius: 15px; background: #25D366;
          color: white; font-weight: 900; font-size: 1.15rem; text-decoration: none;
          box-shadow: 0 8px 25px rgba(37,211,102,0.3); transition: 0.25s; margin-top: 2.5rem;
        }
        .wa-big-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 35px rgba(37,211,102,0.45); }
        
        .contact-highlight-phone {
          font-size: 2.2rem; font-weight: 950; color: var(--primary); line-height: 1.1; margin-top: 0.5rem; display: block; text-decoration: none;
        }
        .contact-instant-badge {
          display: inline-block; background: var(--accent); color: var(--primary); padding: 0.3rem 0.8rem; border-radius: 6px; font-weight: 850; font-size: 0.8rem; margin-bottom: 0.5rem;
        }
        
        .map-wrapper {
          border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          height: 420px; margin-bottom: 8rem;
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

            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: '#6B7280' }}>Our Location:</h4>
                <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', margin: 0 }}>Coimbatore, Tamil Nadu</p>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: '0.2rem', marginBottom: 0 }}>Serving all of South India</p>
              </div>
            </div>

            <div className="info-item" style={{ marginBottom: 0 }}>
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem', color: '#6B7280' }}>Official Email:</h4>
                <a href="mailto:hello@inaitravels.com" style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none' }}>
                  hello@inaitravels.com
                </a>
              </div>
            </div>

            <a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello INAI Travels, I'd like to make an enquiry.")}`}
              target="_blank" rel="noreferrer" className="wa-big-btn">
              <WhatsAppIcon size={28} /> WHATSAPP FOR BOOKING
            </a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4415480749!2d76.8848329!3d11.0116775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f973901%3A0x268a817743245453!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711982845678!5m2!1sen!2sin"
            width="100%" height="100%" style={{ border: 0 }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
