import React from 'react';

const NewsCard = ({ title, date, excerpt, image }) => {
  return (
    <div className="card-hover" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{
          width: '100%',
          height: '220px',
          objectFit: 'cover',
          borderRadius: '12px'
        }}
      />
      <div>
        <span style={{
          fontSize: '0.8rem',
          color: '#2D8B84',
          fontWeight: 600,
          display: 'block',
          marginBottom: '5px'
        }}>{date}</span>
        <h3 style={{
          fontSize: '1.25rem',
          color: '#1A2B4C',
          fontWeight: 700,
          marginBottom: '10px'
        }}>{title}</h3>
        <p style={{
          fontSize: '0.9rem',
          color: '#475569',
          lineHeight: 1.6
        }}>{excerpt}</p>
      </div>
    </div>
  );
};

export default NewsCard;
