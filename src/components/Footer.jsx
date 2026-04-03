import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const phoneNumber = "916369284551";

  return (
    <footer className="footer">
      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: var(--primary);
          color: white;
          padding: 6rem 0 2rem;
          margin-top: 5rem;
        }
        .footer-grid {
          display: grid;
          gap: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 3.5rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; }
        }
        .footer-logo {
          font-size: 1.8rem;
          font-weight: 900;
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: block;
          text-decoration: none;
        }
        .footer-text {
          color: #adb5bd;
          margin-bottom: 2rem;
          max-width: 350px;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1.2rem;
        }
        .social-icon {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.25s;
          font-size: 0.8rem;
          font-weight: 800;
        }
        .social-icon:hover {
          background: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
        }
        .footer-title {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: white;
          font-weight: 850;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .footer-links li {
          margin-bottom: 1.2rem;
        }
        .footer-links a {
          color: #adb5bd;
          text-decoration: none;
          transition: 0.2s;
        }
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 8px;
        }
        .footer-contact li {
          display: flex;
          gap: 1.2rem;
          margin-bottom: 2rem;
          color: #e9ecef;
        }
        .f-contact-bold {
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--accent);
          display: block;
          margin-top: 0.4rem;
        }
        .footer-bottom {
          text-align: center;
          color: #6c757d;
          font-size: 0.85rem;
          padding: 1rem 0;
        }
      `}} />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-company">
            <Link to="/" className="footer-logo">INAI TRAVELS</Link>
            <p className="footer-text">Providing reliable, safe, and professional travel solutions across Coimbatore and beyond. Your journey is our priority.</p>
            <div className="social-links">
              <span className="social-icon">FB</span>
              <span className="social-icon">IG</span>
              <span className="social-icon">TW</span>
            </div>
          </div>

          <div className="footer-navigation">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/vehicles">Our Fleet</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact-info">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li>
                <Phone size={24} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <span style={{ fontSize: '0.9rem', color: '#adb5bd' }}>Call for instant booking:</span>
                  <a href={`tel:+${phoneNumber}`} className="f-contact-bold" style={{ textDecoration: 'none' }}>+91 63692 84551</a>
                </div>
              </li>
              <li>
                <Mail size={24} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="mailto:hello@inaitravels.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello@inaitravels.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} INAI TRAVELS. Designed & Maintained by VT Business Support.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
