import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const phoneNumber = "916369284551";
  const waBase = "Hello INAI Tours & Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`nav-v2 ${scrolled ? 'nav-scrolled' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-v2 {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 10001;
          background: white; transition: 0.3s;
          padding: 1.2rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .nav-scrolled {
          padding: 0.8rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .nav-flex { display: flex; justify-content: space-between; align-items: center; }
        .nav-brand { 
          display: flex; align-items: center;
          text-decoration: none;
        }
        .brand-logo {
          height: 52px;
          width: auto;
          object-fit: contain;
          display: block;
        }

        .nav-links-desktop { display: none; gap: 2.5rem; }
        @media (min-width: 992px) { .nav-links-desktop { display: flex; } }
        .nav-item { font-weight: 700; color: var(--primary); font-size: 0.95rem; text-decoration: none; transition: 0.2s; }
        .nav-item:hover, .nav-item.active { color: var(--accent); }

        .nav-cta-desktop { display: none; gap: 0.75rem; }
        @media (min-width: 1024px) { .nav-cta-desktop { display: flex; } }
        .nav-cta-btn { padding: 0.6rem 1.25rem; font-size: 0.85rem; border-radius: 10px; font-weight: 800; display: flex; align-items: center; gap: 0.5rem; }
        .nav-phone-btn { 
          border: 2.5px solid var(--primary); 
          color: var(--primary);
          transition: 0.3s;
        }
        .nav-phone-btn:hover {
          background: var(--primary);
          color: white;
        }

        .menu-btn { background: none; border: none; color: var(--primary); cursor: pointer; display: block; }
        @media (min-width: 992px) { .menu-btn { display: none; } }

        .mobile-slide-menu {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: var(--primary); z-index: 11000;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 1.8rem;
        }
        .mobile-nav-item { font-size: 1.5rem; font-weight: 700; color: white; text-decoration: none; letter-spacing: 1px; }
        
        /* Global rules for when menu is open */
        body.menu-open { overflow: hidden; }
        body.menu-open .mobile-bottom-bar { display: none !important; }

        @media (max-width: 768px) {
          .brand-logo { height: 40px; }
        }
      `}} />
      <div className="container nav-flex">
        <Link to="/" className="nav-brand">
          <img src="/inai-logo.png" alt="INAI TOURS & TRAVELS" className="brand-logo" />
        </Link>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-cta-desktop">
          <a href={`tel:+${phoneNumber}`} className="btn nav-cta-btn nav-phone-btn">
            <Phone size={14} /> +91 63692 84551
          </a>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp nav-cta-btn">
            <WhatsAppIcon size={16} /> BOOK ON WHATSAPP
          </a>
        </div>

        <button className="menu-btn" onClick={() => setIsOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="mobile-slide-menu"
          >
            <button className="menu-btn" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }} onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
