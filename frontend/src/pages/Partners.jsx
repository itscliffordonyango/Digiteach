import React from 'react';
import PartnersComponent from '../components/Partners';

const Partners = () => {
  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800 }}>Our Partners</h1>
          <p style={{ color: '#475569', maxWidth: '650px', margin: '15px auto 0', fontSize: '1.1rem' }}>
            We work alongside schools, government bodies, technology brands, and sponsors to expand the reach and support of our digital confidence curricula.
          </p>
        </div>

        <PartnersComponent />

        <div style={{
          marginTop: '80px',
          backgroundColor: '#ffffff',
          borderRadius: '28px',
          padding: '50px',
          textAlign: 'center',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid rgba(45, 139, 132, 0.1)'
        }}>
          <h2 style={{ color: '#1A2B4C', marginBottom: '20px', fontWeight: 700 }}>Become a Technical or Funding Partner</h2>
          <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.7 }}>
            Help us scale our teacher training models, fund laboratory upgrades, or provide infrastructure to communities in need.
          </p>
          <button className="btn btn-primary">Download Partnership Proposal</button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
