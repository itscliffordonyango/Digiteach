import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1A2B4C', // Deep Indigo background
      color: '#ffffff',
      padding: '80px 0 40px',
      borderTop: '2px solid rgba(166, 227, 111, 0.2)'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Brand Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#A6E36F', fontWeight: 800, marginBottom: '15px' }}>
              Digital Confidence Initiative
            </h3>
            <p style={{ fontSize: '0.88rem', opacity: 0.8, lineHeight: 1.7, marginBottom: '15px' }}>
              Empowering communities and teachers with practical digital competencies and secure online navigation.
            </p>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              padding: '4px 10px',
              backgroundColor: 'rgba(166, 227, 111, 0.15)',
              color: '#A6E36F',
              borderRadius: '99px',
              border: '1px solid rgba(166, 227, 111, 0.3)'
            }}>
              Current pilot: DigiTeach
            </span>
          </div>

          {/* Links Quick */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '15px' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', opacity: 0.9 }}>
              <li><Link to="/about" style={{ color: '#ffffff' }}>About DCI</Link></li>
              <li><Link to="/digiteach" style={{ color: '#ffffff' }}>DigiTeach Program</Link></li>
              <li><Link to="/programs" style={{ color: '#ffffff' }}>Programmes List</Link></li>
              <li><Link to="/resources" style={{ color: '#ffffff' }}>Teaching Resources</Link></li>
            </ul>
          </div>

          {/* Links Secondary */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '15px' }}>
              Get Involved
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', opacity: 0.9 }}>
              <li><Link to="/volunteer" style={{ color: '#ffffff' }}>Apply as a Fellow</Link></li>
              <li><Link to="/contact" style={{ color: '#ffffff' }}>Register Your School</Link></li>
              <li><Link to="/donate" style={{ color: '#ffffff' }}>Donate Funds</Link></li>
              <li><Link to="/login" style={{ color: '#ffffff' }}>Admin Sign In</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 700, marginBottom: '15px' }}>
              Contact Office
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', opacity: 0.8 }}>
              <li>📍 Nairobi, Kenya</li>
              <li>📞 +254 700 111 222</li>
              <li>✉️ support@digiteach.org</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '15px',
          fontSize: '0.85rem',
          opacity: 0.7
        }}>
          <span>© 2026 Digital Confidence Initiative. All rights reserved.</span>
          <span>Designed with care for educators in Kenya.</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
