import React from 'react';
import LearningCard from './LearningCard';
import { Monitor, Globe, Award, ShieldAlert } from 'lucide-react';

const LearningAreas = () => {
  const areas = [
    {
      title: 'Digital Foundations',
      description: 'Computer basics, mouse and keyboard use, typing practice, files, folders, naming, saving and finding documents.',
      icon: <Monitor size={28} style={{ color: '#2D8B84' }} />
    },
    {
      title: 'Internet, Email & Cloud',
      description: 'Browsers, search, Gmail, passwords, attachments, downloads, uploads and Google Drive storage.',
      icon: <Globe size={28} style={{ color: '#2D8B84' }} />
    },
    {
      title: 'Teacher Productivity',
      description: 'Docs, Sheets and Slides for lesson notes, tests, reports, marksheets and simple presentations.',
      icon: <Award size={28} style={{ color: '#2D8B84' }} />
    },
    {
      title: 'Digital Safety & Hygiene',
      description: 'Scams, phishing, fake links, mobile money fraud, AI-generated misinformation, password hygiene and safer online behaviour.',
      icon: <ShieldAlert size={28} style={{ color: '#2D8B84' }} />
    }
  ];

  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: '#FCF9F3' // Warm paper cream background
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>
            WHAT WE TEACH
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1A2B4C',
            fontWeight: 800,
            marginBottom: '15px'
          }}>
            4 Practical Areas of Confidence
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#475569',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            DigiTeach helps educators build confidence in the everyday digital tasks that support teaching, administration and safe online participation.
          </p>
        </div>

        <div className="grid-2">
          {areas.map((area, index) => (
            <LearningCard key={index} {...area} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningAreas;
