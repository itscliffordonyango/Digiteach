import React from 'react';

const Partners = () => {
  const brands = [
    { name: 'Ministry of Education', type: 'Government partner' },
    { name: 'Nairobi City County', type: 'Local authority' },
    { name: 'Safaricom Foundation', type: 'Funding associate' },
    { name: 'TechBridge Kenya', type: 'Infrastructure support' }
  ];

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#ffffff'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '1.5px',
            color: '#2D8B84',
            textTransform: 'uppercase'
          }}>
            COLLABORATORS & SUPPORTERS
          </span>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '40px'
        }}>
          {brands.map((b, idx) => (
            <div key={idx} style={{
              padding: '20px 30px',
              backgroundColor: '#FCF9F3',
              borderRadius: '12px',
              border: '1px solid rgba(45,139,132,0.1)',
              textAlign: 'center',
              minWidth: '200px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <h4 style={{ color: '#1A2B4C', fontWeight: 800, marginBottom: '4px' }}>{b.name}</h4>
              <span style={{ fontSize: '0.75rem', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{b.type}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partners;
