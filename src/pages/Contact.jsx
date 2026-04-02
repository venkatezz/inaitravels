import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Send, Calendar, User, Navigation } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Contact = () => {
  const phoneNumber = "916369284551";
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello INAI Travels, I want to book a vehicle.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDrop: ${formData.drop}\nDate: ${formData.date}`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="contact-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-hero {
          background: var(--primary);
          color: white;
          padding: 8rem 0 4rem;
          text-align: center;
        }
        .contact-container {
          display: grid;
          gap: 4rem;
          margin-top: -3rem;
          padding-bottom: 8rem;
        }
        @media (min-width: 992px) {
          .contact-container { grid-template-columns: 1fr 1.5fr; }
        }
        .contact-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
          height: fit-content;
        }
        .info-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          align-items: flex-start;
        }
        .icon-circle {
          width: 50px;
          height: 50px;
          background: #f0f4f8;
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.6rem;
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
        }
        .form-control {
          width: 100%;
          padding: 1rem;
          border: 1.5px solid #edf2f7;
          border-radius: 12px;
          font-size: 1rem;
          transition: 0.3s;
          background: #f8fafc;
        }
        .form-control:focus {
          outline: none;
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(0, 33, 71, 0.05);
        }
        .map-wrapper {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          height: 450px;
        }
      `}} />

      <section className="contact-hero">
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem' }}>Contact INAI Travels</h1>
          <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>Ready to book your next trip? Reach out to us anytime.</p>
        </div>
      </section>

      <div className="container">
        <div className="contact-container">
          {/* Left Side: Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="contact-card">
            <h2 style={{ marginBottom: '2.5rem' }}>Get in Touch</h2>
            
            <div className="info-item">
              <div className="icon-circle"><Phone size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Call Us</h4>
                <a href={`tel:+${phoneNumber}`} style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>+91 63692 84551</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle"><WhatsAppIcon size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>WhatsApp</h4>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#25D366' }}>Chat with Us</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle"><MapPin size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Office</h4>
                <p style={{ color: 'var(--text-light)' }}>Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-circle"><Mail size={24} /></div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                <p style={{ color: 'var(--text-light)' }}>hello@inaitravels.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="contact-card">
            <h2 style={{ marginBottom: '2rem' }}>Quick Booking Enquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                <div className="form-group">
                  <label><User size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Name</label>
                  <input type="text" name="name" required className="form-control" placeholder="Your Name" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label><Phone size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Phone Number</label>
                  <input type="tel" name="phone" required className="form-control" placeholder="Contact number" onChange={handleChange} />
                </div>
              </div>

              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                <div className="form-group">
                  <label><Navigation size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Pickup Location</label>
                  <input type="text" name="pickup" required className="form-control" placeholder="e.g. Railway Station" onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Drop Location</label>
                  <input type="text" name="drop" required className="form-control" placeholder="e.g. Ooty" onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label><Calendar size={14} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Date of Travel</label>
                <input type="date" name="date" required className="form-control" onChange={handleChange} />
              </div>

              <button type="submit" className="btn btn-whatsapp" style={{ width: '100%', padding: '1.25rem', marginTop: '1rem', justifyContent: 'center', fontSize: '1.1rem' }}>
                <WhatsAppIcon size={20} style={{ marginRight: '10px' }} /> Book via WhatsApp <Send size={20} style={{ marginLeft: '10px' }} />
              </button>
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                *By clicking, you will be redirected to WhatsApp to confirm your details.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <div className="map-wrapper" style={{ marginBottom: '8rem' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.4415480749!2d76.8848329!3d11.0116775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f973901%3A0x268a817743245453!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711982845678!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
