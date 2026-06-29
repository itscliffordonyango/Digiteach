import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProgramCard = ({ title, desc, badge, link }) => {
  return (
    <div className="card-hover" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
      <div>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          backgroundColor: '#A6E36F',
          color: '#1A2B4C',
          padding: '4px 10px',
          borderRadius: '99px',
          display: 'inline-block',
          marginBottom: '15px',
          textTransform: 'uppercase'
        }}>{badge}</span>
        
        <h3 style={{
          fontSize: '1.4rem',
          color: '#1A2B4C',
          fontWeight: 700,
          marginBottom: '10px'
        }}>{title}</h3>
        
        <p style={{
          fontSize: '0.95rem',
          color: '#475569',
          lineHeight: 1.6,
          marginBottom: '20px'
        }}>{desc}</p>
      </div>

      <Link 
        to={link} 
        className="btn btn-outline" 
        style={{
          width: '100%',
          fontSize: '0.85rem',
          padding: '10px 0',
          textAlign: 'center'
        }}
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
};

export default ProgramCard;
