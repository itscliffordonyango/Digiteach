import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FCF9F3',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '450px',
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '28px',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid rgba(45, 139, 132, 0.1)',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2rem', color: '#1A2B4C', fontWeight: 800, marginBottom: '8px' }}>Admin Portal</h2>
        <p style={{ color: '#475569', marginBottom: '30px' }}>Sign in to manage DigiTeach cohorts</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@digiteach.org" 
              style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem' }} 
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#1A2B4C', marginBottom: '6px' }}>Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid rgba(26,43,76,0.15)', fontSize: '0.95rem' }} 
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ padding: '14px', marginTop: '10px' }}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: '25px', fontSize: '0.9rem' }}>
          <Link to="/" style={{ color: '#2D8B84', fontWeight: 600 }}>Back to Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
