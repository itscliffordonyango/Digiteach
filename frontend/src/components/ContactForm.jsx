import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
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
        <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Thank You!</h4>
        <p style={{ color: '#475569', fontSize: '0.95rem' }}>Your message has been sent successfully. We will get back to you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '10px', fontSize: '0.85rem', padding: '8px 16px' }}>Send Another Message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Full Name</label>
        <input 
          type="text" 
          required 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mwalimu Juma" 
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
          placeholder="juma@school.org" 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem' }} 
        />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Your Message</label>
        <textarea 
          rows="4" 
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your questions or cohort request here..." 
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem', resize: 'vertical' }}
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', width: '100%', marginTop: '10px' }}>
        <Send size={16} /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
