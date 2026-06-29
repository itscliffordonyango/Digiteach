import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, Heart } from 'lucide-react';

const VolunteerForm = () => {
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('fellow');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const urlRole = searchParams.get('role');
    if (urlRole && ['teacher', 'school', 'fellow', 'partner'].includes(urlRole)) {
      setRole(urlRole);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setLocation('');
  };

  if (submitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '30px 20px',
        color: '#2D8B84',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}>
        <CheckCircle size={48} />
        <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Application Received!</h4>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
          Thank you for reaching out. A DCI program fellow will contact you shortly to guide you through the registration process.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '10px', fontSize: '0.85rem', padding: '8px 16px' }}>Submit Another Request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Full Name / Organization</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mwalimu Juma / Kawangware Primary" 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem' }} 
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Email Address</label>
        <input 
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="contact@school.org" 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem' }} 
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>How would you like to participate?</label>
        <select 
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem', backgroundColor: '#ffffff' }}
        >
          <option value="teacher">Join as a Teacher (Future Cohorts)</option>
          <option value="school">Host a Cohort (Schools/Institutions)</option>
          <option value="fellow">Volunteer as a Facilitation Fellow</option>
          <option value="partner">Become a Tech/Funding Partner</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Location (Town / County)</label>
        <input 
          type="text" 
          required 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Nairobi County" 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem' }} 
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', width: '100%', marginTop: '10px' }}>
        <Heart size={16} /> Submit Application
      </button>
    </form>
  );
};

export default VolunteerForm;
