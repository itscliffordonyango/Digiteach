import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when routing changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar Contact */}
      <div style={{
        backgroundColor: '#d8c6a5',
        color: '#1A2B4C',
        padding: '10px 0',
        fontSize: '0.85rem',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        display: isScrolled ? 'none' : 'block'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>📍 Nairobi, Kenya</span>
            <span>✉️ support@digiteach.org</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <span>📞 +254 700 111 222</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.06)' : 'none',
        transition: 'var(--transition-smooth)',
        borderBottom: '1px solid rgba(26,43,76,0.05)'
      }}>
        <div className="container" style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo Brand */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* SVG Logo mark */}
            <svg width="40" height="40" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="100" r="2.5" fill="#1A2B4C" />
              <circle cx="55" cy="110" r="3.5" fill="#3D8B7A" />
              <circle cx="105" cy="110" r="3.5" fill="#3D8B7A" />
              <path d="M 55 110 Q 80 85 105 110" fill="none" stroke="#3D8B7A" strokeWidth="1.5" />
              <path d="M 80 100 L 80 75" fill="none" stroke="#1A2B4C" strokeWidth="2" />
              <path d="M 80 80 Q 55 60 20 70 L 20 40 Q 55 30 80 50 Z" fill="none" stroke="#1A2B4C" strokeWidth="4" strokeLinejoin="round" />
              <path d="M 80 80 Q 105 60 140 70 L 140 40 Q 105 30 80 50 Z" fill="none" stroke="#1A2B4C" strokeWidth="4" strokeLinejoin="round" />
              <path d="M 80 70 C 60 60 45 35 55 20 C 70 30 75 50 80 70 Z" fill="#4AA785" />
              <path d="M 80 70 C 100 60 115 35 105 20 C 90 30 85 50 80 70 Z" fill="#3D8B7A" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1A2B4C', lineHeight: 1.1, letterSpacing: '-0.5px' }}>
                DIGITAL CONFIDENCE
              </span>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2D8B84', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Initiative
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-nav-links">
            <ul style={{ display: 'flex', gap: '24px', fontWeight: 600, fontSize: '0.95rem' }} className="navbar-links">
              <li><Link to="/" style={{ color: location.pathname === '/' ? '#2D8B84' : '#1A2B4C' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: location.pathname === '/about' ? '#2D8B84' : '#1A2B4C' }}>About Us</Link></li>
              <li><Link to="/digiteach" style={{ color: location.pathname === '/digiteach' ? '#2D8B84' : '#1A2B4C' }}>DigiTeach</Link></li>
              <li><Link to="/programs" style={{ color: location.pathname === '/programs' ? '#2D8B84' : '#1A2B4C' }}>Programmes</Link></li>
              <li><Link to="/resources" style={{ color: location.pathname === '/resources' ? '#2D8B84' : '#1A2B4C' }}>Resources</Link></li>
              <li><Link to="/events" style={{ color: location.pathname === '/events' ? '#2D8B84' : '#1A2B4C' }}>Events</Link></li>
              <li><Link to="/news" style={{ color: location.pathname === '/news' ? '#2D8B84' : '#1A2B4C' }}>News</Link></li>
              <li><Link to="/contact" style={{ color: location.pathname === '/contact' ? '#2D8B84' : '#1A2B4C' }}>Contact</Link></li>
            </ul>

            <Link to="/volunteer" className="btn btn-lime" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1A2B4C'
            }}
            className="mobile-menu-btn"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderBottom: '1px solid rgba(26,43,76,0.1)',
            padding: '20px 24px 30px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            zIndex: 99
          }}>
            <Link to="/" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>Home</Link>
            <Link to="/about" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>About Us</Link>
            <Link to="/digiteach" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>DigiTeach</Link>
            <Link to="/programs" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>Programmes</Link>
            <Link to="/resources" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>Resources</Link>
            <Link to="/events" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>Events</Link>
            <Link to="/news" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>News</Link>
            <Link to="/contact" style={{ padding: '8px 0', fontSize: '1.05rem', fontWeight: 600 }}>Contact</Link>
            <Link to="/volunteer" className="btn btn-lime" style={{ width: '100%', marginTop: '10px' }}>Get Involved</Link>
          </div>
        )}
      </nav>

      {/* Basic responsive layout styling injection */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
