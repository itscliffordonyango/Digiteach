import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#FCF9F3' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        backgroundColor: '#1A2B4C',
        color: '#ffffff',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#A6E36F' }}>DCI Dashboard</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '4px' }}>Go to Home Website</Link>
          <Link to="/dashboard" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '4px' }}>Overview</Link>
          <Link to="/dashboard/cohorts" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '4px' }}>Cohorts</Link>
          <Link to="/dashboard/teachers" style={{ color: '#ffffff', textDecoration: 'none', padding: '10px', borderRadius: '4px' }}>Teachers Registered</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{
          height: '70px',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 30px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <h3>Digital Confidence Initiative Admin Portal</h3>
          <Link to="/" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Logout</Link>
        </header>
        
        <main style={{ padding: '30px', flexGrow: 1 }}>
          <Outlet />
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
          }}>
            <h1 style={{ color: '#1A2B4C', marginBottom: '15px' }}>Welcome to the Admin Portal</h1>
            <p style={{ color: '#475569' }}>
              Manage your cohort registrations, monitor student progress, and organize volunteers from this dashboard.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
