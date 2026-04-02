import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          background: var(--primary);
          color: white;
          padding: 5rem 0 2rem;
          margin-top: 5rem;
        }
        .footer-grid {
          display: grid;
          gap: 4rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 3rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.5fr 1fr 1fr; }
        }
        .footer-logo {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 1.5rem;
          display: block;
        }
        .footer-text {
          color: #adb5bd;
          margin-bottom: 2rem;
          max-width: 350px;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .social-icon:hover {
          background: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
        }
        .footer-title {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: white;
          font-weight: 700;
        }
        .footer-links li {
          margin-bottom: 1rem;
        }
        .footer-links a {
          color: #adb5bd;
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 5px;
        }
        .footer-contact li {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: #adb5bd;
        }
        .footer-bottom {
          text-align: center;
          color: #6c757d;
          font-size: 0.9rem;
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
                <MapPin size={24} className="text-accent" style={{ color: 'var(--accent)' }} />
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li>
                <Phone size={24} className="text-accent" style={{ color: 'var(--accent)' }} />
                <span>+91 63692 84551</span>
              </li>
              <li>
                <Mail size={24} className="text-accent" style={{ color: 'var(--accent)' }} />
                <span>hello@inaitravels.com</span>
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
