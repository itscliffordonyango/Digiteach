import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      backgroundColor: '#FCF9F3', // Porcelain/off-white background
      padding: '80px 0 120px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap'
        }} className="hero-wrapper">
          
          {/* Hero Left Content */}
          <div style={{ flex: '1', minWidth: '320px', color: '#1A2B4C' }} className="hero-left">
            <p style={{
              fontFamily: 'var(--font-hand)',
              color: '#2D8B84',
              fontSize: '2.25rem',
              fontWeight: 700,
              marginBottom: '15px'
            }}>
              Because access alone isn’t enough.
            </p>
            
            <h1 style={{
              fontSize: '3.75rem',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px'
            }} className="hero-title">
              Turning <br />
              Digital <span style={{ textDecoration: 'line-through', textDecorationColor: '#e11d48', textDecorationThickness: '4px', opacity: 0.6 }}>Access</span> <br />
              Into Digital <span className="hand-drawn" style={{ color: '#2D8B84' }}>Confidence</span>
            </h1>

            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#475569',
              maxWidth: '520px',
              marginBottom: '35px'
            }}>
              Helping teachers and communities build practical digital skills, online safety awareness, and everyday confidence with technology.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/digiteach" className="btn btn-primary">
                Explore DigiTeach <ArrowRight size={18} />
              </Link>
              <Link to="/volunteer" className="btn btn-outline">
                Get Involved <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Right Images Grid */}
          <div style={{ flex: '1', minWidth: '320px' }} className="hero-right">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              <div style={{ gridColumn: 'span 1' }}>
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400" 
                  alt="Teachers in training" 
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}
                />
              </div>
              <div style={{ gridColumn: 'span 1' }}>
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" 
                  alt="Student using keyboard" 
                  style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}
                />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Group discussion" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (max-width: 992px) {
          .hero-wrapper {
            flex-direction: column !important;
            text-align: center;
          }
          .hero-left {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
