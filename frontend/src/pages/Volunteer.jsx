import React from 'react';
import VolunteerForm from '../components/VolunteerForm';

const Volunteer = () => {
  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
          <div>
            <span className="badge-lime" style={{ marginBottom: '15px' }}>JOIN THE MOVEMENT</span>
            <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800, marginBottom: '20px' }}>
              Volunteer as a Fellow
            </h1>
            <p style={{ color: '#475569', marginBottom: '25px', lineHeight: 1.8 }}>
              Our Digital Fellows are the backbone of the Digital Confidence Initiative. They visit cohort schools, guide educators through keyboard exercises, explain file storage, and help build cybersecurity awareness.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ color: '#2D8B84', fontWeight: 700, marginBottom: '5px' }}>Facilitate Cohorts</h4>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>Deliver weekly digital confidence training directly inside local school computer labs.</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ color: '#2D8B84', fontWeight: 700, marginBottom: '5px' }}>Tech Support</h4>
                <p style={{ fontSize: '0.9rem', color: '#475569' }}>Help schools set up accounts, configure secure passwords, and organize drive files.</p>
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '28px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid rgba(45, 139, 132, 0.1)'
          }}>
            <h3 style={{ color: '#1A2B4C', fontWeight: 700, marginBottom: '20px', fontSize: '1.5rem' }}>Apply to Volunteer</h3>
            <VolunteerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
