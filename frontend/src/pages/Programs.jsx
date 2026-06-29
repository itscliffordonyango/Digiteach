import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';

const Programs = () => {
  const list = [
    {
      title: 'DigiTeach (Flagship)',
      desc: 'Hands-on digital literacy and productivity training specifically designed for educators to improve teaching delivery and school administration.',
      badge: 'Active Pilot',
      link: '/digiteach'
    },
    {
      title: 'Community Learning Hubs',
      desc: 'Establishing local safe spaces equipped with computing access and internet connection for student and adult foundational learning.',
      badge: 'Scaling Soon',
      link: '#'
    },
    {
      title: 'Digital Safety for Parents',
      desc: 'Mobile seminars focusing on online safety, mobile money security, and protecting children from internet exploitation.',
      badge: 'Upcoming',
      link: '#'
    }
  ];

  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>DCI INITIATIVES</span>
          <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800 }}>Our Programmes</h1>
          <p style={{ color: '#475569', maxWidth: '600px', margin: '15px auto 0' }}>
            We design structured programs focused on computer foundations, workspace collaboration, and community technology safety.
          </p>
        </div>

        <div className="grid-3">
          {list.map((prog, index) => (
            <ProgramCard key={index} {...prog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
