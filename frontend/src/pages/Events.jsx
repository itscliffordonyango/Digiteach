import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Digital Security Workshop for Public Schools',
      date: 'July 15, 2026',
      time: '09:00 AM - 12:00 PM',
      location: 'Nairobi Central Learning Center',
      desc: 'Hands-on seminar focused on spotting modern phishing tactics, scams, and securing classroom accounts.'
    },
    {
      title: 'Google Workspace for Teacher Productivity',
      date: 'August 03, 2026',
      time: '02:00 PM - 04:30 PM',
      location: 'Virtual Webinar',
      desc: 'Learn advanced Google Sheets features to speed up grading and lesson note synchronization.'
    }
  ];

  return (
    <div style={{ padding: '80px 0 100px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.75rem', color: '#1A2B4C', fontWeight: 800 }}>Upcoming Events</h1>
          <p style={{ color: '#475569', maxWidth: '600px', margin: '15px auto 0' }}>
            Participate in our interactive digital skills workshops, open seminars, and online webinars.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {events.map((e, idx) => (
            <div key={idx} className="card-hover" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
              <div style={{
                backgroundColor: 'rgba(166, 227, 111, 0.2)',
                color: '#1A2B4C',
                padding: '24px',
                borderRadius: '16px',
                textAlign: 'center',
                minWidth: '150px'
              }}>
                <Calendar size={32} style={{ marginBottom: '8px', color: '#2D8B84' }} />
                <div style={{ fontWeight: 800 }}>{e.date.split(',')[0]}</div>
                <div style={{ fontSize: '0.85rem' }}>{e.date.split(',')[1]}</div>
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', color: '#1A2B4C', fontWeight: 700, marginBottom: '10px' }}>{e.title}</h3>
                <p style={{ color: '#475569', marginBottom: '15px', fontSize: '0.95rem' }}>{e.desc}</p>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '0.85rem', color: '#2D8B84', fontWeight: 600 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> {e.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {e.location}</span>
                </div>
              </div>
              <div>
                <button className="btn btn-primary">RSVP / Join</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
