import React from 'react';

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="card-hover" style={{
      textAlign: 'center',
      padding: '24px'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '15px',
          border: '3px solid #2D8B84'
        }}
      />
      <h4 style={{
        fontSize: '1.15rem',
        color: '#1A2B4C',
        fontWeight: 700,
        marginBottom: '4px'
      }}>{name}</h4>
      <p style={{
        fontSize: '0.85rem',
        color: '#475569',
        fontWeight: 500
      }}>{role}</p>
    </div>
  );
};

export default TeamCard;
