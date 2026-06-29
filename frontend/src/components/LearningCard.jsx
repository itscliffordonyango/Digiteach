import React from 'react';

const LearningCard = ({ title, description, icon }) => {
  return (
    <div className="card-hover" style={{
      display: 'flex',
      gap: '20px',
      alignItems: 'flex-start'
    }}>
      <div style={{
        padding: '16px',
        backgroundColor: 'rgba(45, 139, 132, 0.08)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div>
        <h3 style={{
          fontSize: '1.25rem',
          color: '#1A2B4C',
          fontWeight: 700,
          marginBottom: '10px'
        }}>{title}</h3>
        <p style={{
          fontSize: '0.95rem',
          color: '#475569',
          lineHeight: 1.6
        }}>{description}</p>
      </div>
    </div>
  );
};

export default LearningCard;
