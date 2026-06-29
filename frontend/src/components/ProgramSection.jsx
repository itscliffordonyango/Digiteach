import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProgramSection = () => {
  return (
    <section style={{
      position: 'relative',
      marginTop: '-50px',
      zIndex: 10,
      paddingBottom: '60px'
    }}>
      <div className="container">
        <div style={{
          backgroundColor: '#2D8B84', // Teal brand color
          borderRadius: 'var(--radius-lg)',
          padding: '60px',
          boxShadow: 'var(--shadow-lg)',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap'
        }} className="program-card-wrapper">
          
          <div style={{ flex: '1', minWidth: '280px' }}>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              opacity: 0.9,
              display: 'block',
              marginBottom: '10px'
            }}>
              OUR FLAGSHIP PROGRAMME
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '15px' }}>
              DigiTeach
            </h2>
            <p style={{
              fontSize: '1.15rem',
              lineHeight: 1.7,
              opacity: 0.95,
              maxWidth: '650px'
            }}>
              Practical digital confidence for teachers — our flagship programme supporting educators to build digital confidence in classrooms and communities.
            </p>
          </div>

          <div>
            <Link 
              to="/digiteach" 
              className="btn btn-outline-white" 
              style={{
                borderColor: '#ffffff',
                color: '#ffffff',
                padding: '14px 28px',
                fontSize: '1rem',
                borderRadius: '99px',
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}
            >
              See what Teachers Learn <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .program-card-wrapper {
            padding: 40px 30px !important;
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default ProgramSection;
