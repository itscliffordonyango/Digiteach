import React from 'react';

const Impact = () => {
  const stats = [
    { value: '500+', label: 'Teachers Trained' },
    { value: '45+', label: 'Partner Schools' },
    { value: '98%', label: 'Confidence Score Increase' },
    { value: '8+', label: 'Counties Reached' }
  ];

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#1A2B4C', // Deep Indigo background
      color: '#ffffff'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>
            OUR FOOTPRINT
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#ffffff',
            fontWeight: 800
          }}>
            Making Real, Measurable Impact
          </h2>
        </div>

        <div className="grid-4" style={{ gap: '30px' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-md)',
              padding: '40px 30px',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'var(--transition-smooth)'
            }} className="stat-card">
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                color: '#A6E36F', // Learning Lime accent
                marginBottom: '10px'
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                opacity: 0.85
              }}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
      
      <style>{`
        .stat-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(166, 227, 111, 0.4) !important;
        }
      `}</style>
    </section>
  );
};

export default Impact;
