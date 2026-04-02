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
  const waBase = "Hello INAI Travels, I'm interested in booking a vehicle.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waBase)}`;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicles', path: '/vehicles' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`nav-v2 ${scrolled ? 'nav-scrolled' : ''}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .nav-v2 {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 10001;
          background: transparent; color: white; transition: 0.3s;
          padding: 1.5rem 0;
        }
        .nav-scrolled {
          background: var(--primary); padding: 0.8rem 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .nav-flex { display: flex; justify-content: space-between; align-items: center; }
        .nav-brand { font-size: 1.6rem; font-weight: 850; letter-spacing: -1px; }
        .nav-brand span { color: var(--accent); }

        .nav-links-desktop { display: none; gap: 2.5rem; }
        @media (min-width: 992px) { .nav-links-desktop { display: flex; } }
        .nav-item { font-weight: 700; color: rgba(255,255,255,0.85); font-size: 0.95rem; }
        .nav-item:hover, .nav-item.active { color: var(--accent); }

        .nav-cta-desktop { display: none; gap: 0.75rem; }
        @media (min-width: 1024px) { .nav-cta-desktop { display: flex; } }
        .nav-cta-btn { padding: 0.6rem 1.25rem; font-size: 0.85rem; border-radius: 10px; font-weight: 800; display: flex; align-items: center; gap: 0.5rem; }

        .menu-btn { background: none; border: none; color: white; cursor: pointer; display: block; }
        @media (min-width: 992px) { .menu-btn { display: none; } }

        .mobile-slide-menu {
          position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
          background: var(--primary); z-index: 11000;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 2rem;
        }
        .mobile-nav-item { font-size: 2rem; font-weight: 800; color: white; }
      `}} />
      <div className="container nav-flex">
        <Link to="/" className="nav-brand">INAI <span>TRAVELS</span></Link>

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
          <a href={`tel:+${phoneNumber}`} className="btn btn-outline nav-cta-btn" style={{ border: '2.5px solid white' }}>
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
              <X size={40} />
            </button>
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="mobile-nav-item" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '80%', marginTop: '4rem' }}>
              <a href={`tel:+${phoneNumber}`} className="btn btn-primary" style={{ border: '2px solid white' }}>
                <Phone size={24} /> +91 63692 84551
              </a>
              <a href={waLink} className="btn btn-whatsapp" style={{ width: '100%' }}>
                <WhatsAppIcon size={24} style={{ marginRight: '10px' }} /> BOOK ON WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
