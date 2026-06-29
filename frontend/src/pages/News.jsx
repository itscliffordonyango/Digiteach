import React from 'react';
import NewsCard from '../components/NewsCard';

const News = () => {
  const articles = [
    {
      title: 'DCI Graduates First Teacher Cohort in Nairobi County',
      date: 'June 25, 2026',
      excerpt: 'Over 45 educators successfully completed our 8-week DigiTeach foundational program, expressing immense readiness for classroom tools.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Partnering for Progress: Expanding Our Safety Curriculum',
      date: 'May 18, 2026',
      excerpt: 'DCI partners with cyber experts to update our mobile money fraud and phishing indicators, protecting educators from online exploitation.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>DCI PRESS</span>
          <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800 }}>News & Updates</h1>
          <p style={{ color: '#475569', maxWidth: '600px', margin: '15px auto 0' }}>
            Follow our cohort graduation updates, fresh curriculum expansion, and partners activity.
          </p>
        </div>

        <div className="grid-2">
          {articles.map((art, index) => (
            <NewsCard key={index} {...art} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
