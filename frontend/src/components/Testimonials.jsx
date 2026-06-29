import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      quote: "Before DigiTeach, I struggled to save classroom marks on the school laptop. Now I use sheets shortcuts and backups, saving me hours of admin tasks.",
      author: "Mwalimu Alice Mwangi",
      role: "Science Teacher",
      school: "Kawangware Primary, Nairobi"
    },
    {
      quote: "The digital safety module changed how I browse. I can now guide my students to identify secure websites and protect our school accounts from local phishing scams.",
      author: "Mwalimu Joseph Omondi",
      role: "History Lead",
      school: "Umoja Secondary School"
    }
  ];

  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: '#FCF9F3'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>
            FEEDBACK FROM SCHOOLS
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1A2B4C',
            fontWeight: 800
          }}>
            What Educators Say
          </h2>
        </div>

        <div className="grid-2">
          {reviews.map((rev, idx) => (
            <div key={idx} className="card-hover" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                fontSize: '6rem',
                lineHeight: 1,
                color: '#2D8B84',
                opacity: 0.15,
                fontFamily: 'serif'
              }}>“</span>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#475569',
                fontStyle: 'italic',
                marginBottom: '30px',
                position: 'relative',
                zIndex: 2
              }}>
                "{rev.quote}"
              </p>
              <div>
                <h4 style={{ color: '#1A2B4C', fontWeight: 700, marginBottom: '2px' }}>{rev.author}</h4>
                <p style={{ fontSize: '0.85rem', color: '#2D8B84', fontWeight: 600 }}>{rev.role} — {rev.school}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
