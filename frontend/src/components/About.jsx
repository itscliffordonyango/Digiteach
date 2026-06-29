import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop } from 'lucide-react';

const About = () => {
  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: '#ffffff'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          flexWrap: 'wrap'
        }} className="about-wrapper">
          
          {/* Left Column Graphic */}
          <div style={{ flex: '1', minWidth: '320px', position: 'relative' }} className="about-left">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=700" 
              alt="Educator training session" 
              style={{
                width: '100%',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)'
              }}
            />
            {/* Float Badge */}
            <div style={{
              position: 'absolute',
              bottom: '30px',
              left: '-20px',
              backgroundColor: '#1A2B4C',
              color: '#ffffff',
              padding: '18px 24px',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }} className="float-badge">
              <Laptop size={24} style={{ color: '#A6E36F' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Digital Learning</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Bridging the Gap</span>
              </div>
            </div>
          </div>

          {/* Right Column Text */}
          <div style={{ flex: '1.2', minWidth: '320px' }} className="about-right">
            <span className="badge-lime" style={{ marginBottom: '15px' }}>
              EMPOWERING COMMUNITIES
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#1A2B4C',
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: '20px'
            }}>
              Building Digital Skills <br />
              For The Future
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#475569',
              marginBottom: '25px'
            }}>
              The Digital Confidence Initiative equips learners, schools, and communities with practical digital knowledge, technology access, and sustainable support systems. We believe digital literacy is a fundamental right.
            </p>
            <p style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#475569',
              marginBottom: '35px'
            }}>
              Through our hands-on workshops, tailored modules, and support networks, we help educators transition from basic tech exposure to creative control over their tools, ensuring sustainable development.
            </p>

            <Link to="/about" className="btn btn-primary">
              Discover More <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-wrapper {
            flex-direction: column-reverse !important;
            gap: 50px !important;
          }
          .float-badge {
            left: 20px !important;
            bottom: -20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
