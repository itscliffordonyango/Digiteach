import React from 'react';
import { BookOpen, Shield, Globe, Award, HelpCircle } from 'lucide-react';
import VolunteerForm from '../components/VolunteerForm';

const DigiTeach = () => {
  const curriculum = [
    {
      title: 'Digital Foundations',
      icon: <BookOpen size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Understand computer anatomy, file naming systems, structured directories, shortcut commands, and typing accuracy fundamentals.',
      topics: ['Hardware and operating systems', 'Saving and searching for files', 'Folders management', 'Keyboard shortcuts']
    },
    {
      title: 'Internet, Email & Cloud',
      icon: <Globe size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Master browsers, clean search queries, Google Drive structure, email attachments, uploads, and collaborative tools.',
      topics: ['Google Workspace tools', 'Email communication best practices', 'Cloud storage and file sharing', 'Advanced search operators']
    },
    {
      title: 'Teacher Productivity',
      icon: <Award size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Create lesson plans, dynamic marksheets, tests, report templates, and slide presentations using Google Docs, Sheets, and Slides.',
      topics: ['Sheets formulas for gradebooks', 'Professional presentation design', 'Lesson note templates in Docs', 'Digital scheduling']
    },
    {
      title: 'Digital Safety & Hygiene',
      icon: <Shield size={32} style={{ color: '#2D8B84' }} />,
      desc: 'Prevent cyber fraud, scam links, phishing, and protect students. Understand password managers and digital footprint settings.',
      topics: ['Phishing detection methods', 'Mobile money scam prevention', 'Student data protection', 'Secure accounts configuration']
    }
  ];

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Hero Banner */}
      <section style={{
        backgroundColor: '#1A2B4C',
        color: '#ffffff',
        padding: '120px 0 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>FLAGSHIP PROGRAMME</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}>
            DigiTeach Programme
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
            Empowering educators to build practical digital skills, safe online navigation, and teaching confidence for modern classrooms.
          </p>
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle, #2D8B84 10%, transparent 11%)',
          backgroundSize: '20px 20px'
        }} />
      </section>

      {/* Curriculum Overview */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#1A2B4C', fontWeight: 700 }}>Curriculum & Focus Areas</h2>
            <p style={{ color: '#475569', maxWidth: '650px', margin: '15px auto 0', fontSize: '1.1rem' }}>
              Designed explicitly for teachers, this curriculum covers basic tasks that simplify administrative work and elevate daily classroom learning.
            </p>
          </div>

          <div className="grid-2">
            {curriculum.map((item, idx) => (
              <div key={idx} className="card-hover" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '16px',
                  backgroundColor: 'rgba(45, 139, 132, 0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: '#1A2B4C', marginBottom: '10px', fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.98rem', marginBottom: '15px', lineHeight: 1.7 }}>{item.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.topics.map((t, index) => (
                      <span key={index} style={{
                        fontSize: '0.8rem',
                        padding: '4px 10px',
                        backgroundColor: '#FCF9F3',
                        color: '#2D8B84',
                        border: '1px solid rgba(45,139,132,0.15)',
                        borderRadius: '99px',
                        fontWeight: 600
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Path & Registration */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', color: '#1A2B4C', fontWeight: 700, marginBottom: '20px' }}>
                Bring DigiTeach to Your School
              </h2>
              <p style={{ color: '#475569', marginBottom: '20px', lineHeight: 1.8 }}>
                The DigiTeach pilot operates through cohort packages. We pair local schools containing dedicated computer labs or network facilities with our trained Digital Fellows who deliver the training locally.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontWeight: 800, color: '#2D8B84', fontSize: '1.25rem' }}>01</div>
                  <div>
                    <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Cohort Selection</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569' }}>We select schools expressing structural readiness and internet capability.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontWeight: 800, color: '#2D8B84', fontSize: '1.25rem' }}>02</div>
                  <div>
                    <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>In-Person Training</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569' }}>Fellows visit weekly, conducting hands-on tasks and feedback check-ins.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ fontWeight: 800, color: '#2D8B84', fontSize: '1.25rem' }}>03</div>
                  <div>
                    <h4 style={{ color: '#1A2B4C', fontWeight: 700 }}>Evaluation & Certification</h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569' }}>Practical tests certify digital autonomy in teacher productivity and security.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#FCF9F3',
              padding: '40px',
              borderRadius: '28px',
              border: '1px solid rgba(45, 139, 132, 0.1)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <h3 style={{ color: '#1A2B4C', fontWeight: 700, marginBottom: '20px', fontSize: '1.5rem' }}>Register Cohort / Partner Interest</h3>
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigiTeach;
