import React from 'react';
import { Download, FileText, Video, Book } from 'lucide-react';

const Resources = () => {
  const materials = [
    { title: 'Keyboard Shortcuts Cheat Sheet', type: 'PDF Guide', icon: <FileText /> },
    { title: 'Google Sheets Marksheet Formula Guide', type: 'Spreadsheet Template', icon: <Book /> },
    { title: 'Digital Safety for Educators', type: 'Slide Deck', icon: <FileText /> },
    { title: 'Basic Troubleshooting for School Labs', type: 'Video Tutorial', icon: <Video /> },
  ];

  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800 }}>Teacher Resources</h1>
          <p style={{ color: '#475569', maxWidth: '600px', margin: '15px auto 0' }}>
            Free guides, templates, and video lessons created by our fellows to support self-guided digital learning.
          </p>
        </div>

        <div className="grid-2">
          {materials.map((m, idx) => (
            <div key={idx} className="card-hover" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px 32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(45, 139, 132, 0.1)',
                  color: '#2D8B84',
                  borderRadius: '12px'
                }}>{m.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#1A2B4C', fontWeight: 700 }}>{m.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>{m.type}</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                <Download size={16} /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
