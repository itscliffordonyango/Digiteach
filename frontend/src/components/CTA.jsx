import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';

const CTA = () => {
  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: '#2D8B84', // Teal background
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '60px',
          flexWrap: 'wrap'
        }} className="cta-wrapper">
          
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '15px' }}>
              Subscribe to DCI Newsletter
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '500px', marginBottom: '25px', lineHeight: 1.7 }}>
              Get updates about new school registrations, volunteer callouts, and local training programs delivered directly to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/volunteer" className="btn btn-lime">Become a Fellow</Link>
              <Link to="/contact" className="btn btn-outline-white">Contact DCI Office</Link>
            </div>
          </div>

          <div style={{
            flex: 1,
            minWidth: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.15)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '15px' }}>Newsletter Subscription</h3>
            <NewsletterForm />
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .cta-wrapper {
            flex-direction: column !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;
