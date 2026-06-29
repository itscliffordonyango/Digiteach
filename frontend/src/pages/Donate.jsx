import React from 'react';
import { CreditCard, Heart, Shield } from 'lucide-react';

const Donate = () => {
  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="badge-lime" style={{ marginBottom: '15px' }}>MAKE AN IMPACT</span>
            <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800, marginBottom: '20px' }}>
              Support Digital Literacy
            </h1>
            <p style={{ color: '#475569', marginBottom: '25px', lineHeight: 1.8 }}>
              Your financial contributions help us print physical curriculum booklets, pay transport stipends for our fellows, and upgrade school computer labs with basic hardware (keyboards, mouse devices, storage drives).
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <Heart style={{ color: '#2D8B84' }} />
                <div>
                  <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>100% Direct Utilization</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>Every dollar goes directly into curriculum resources and fellowship delivery.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <Shield style={{ color: '#2D8B84' }} />
                <div>
                  <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Secure Processing</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>All payment channels are encrypted, complying with local NGO standards.</p>
                </div>
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
            <h3 style={{ color: '#1A2B4C', fontWeight: 700, marginBottom: '20px' }}>Select Donation Amount</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {['$25', '$50', '$100', 'Custom'].map((amt, idx) => (
                <button key={idx} className="btn" style={{
                  flex: 1,
                  border: '2px solid #2D8B84',
                  backgroundColor: idx === 1 ? '#2D8B84' : 'transparent',
                  color: idx === 1 ? '#ffffff' : '#2D8B84',
                  padding: '12px 0'
                }}>{amt}</button>
              ))}
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input type="text" placeholder="Full Name" style={{ padding: '14px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)' }} />
              <input type="email" placeholder="Email Address" style={{ padding: '14px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)' }} />
              <button type="button" className="btn btn-primary" style={{ padding: '14px' }}>
                <CreditCard size={18} /> Proceed to Secure Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
