import React from 'react';
import TeamCard from '../components/TeamCard';

const About = () => {
  const team = [
    { name: 'Grace Mutuku', role: 'Executive Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    { name: 'Dr. John Ndwiga', role: 'Director of Education Policy', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
    { name: 'Faith Kemboi', role: 'Head of Facilitation', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' },
    { name: 'David Mwangi', role: 'Tech & Infrastructure Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #FCF9F3 0%, #EFEBE0 100%)',
        padding: '100px 0 60px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(45, 139, 132, 0.1)'
      }}>
        <div className="container">
          <span className="badge-lime" style={{ marginBottom: '15px' }}>OUR MISSION</span>
          <h1 style={{ fontSize: '3rem', color: '#1A2B4C', marginBottom: '20px', fontWeight: 800 }}>
            Who We Are
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem', color: '#475569', lineHeight: 1.8 }}>
            The Digital Confidence Initiative is committed to bridging the digital divide by transforming access into actual utility, confidence, and self-reliance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', color: '#1A2B4C', marginBottom: '20px', fontWeight: 700 }}>
                Our Core Vision
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '15px' }}>
                We believe that providing devices and internet connectivity is only the first step. True empowerment occurs when educators and community members have the confidence to utilize these digital tools efficiently in their everyday professional and personal tasks.
              </p>
              <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '20px' }}>
                Through our flagship DigiTeach program, we focus directly on school teachers, equipping them with fundamental digital literacy, file organization, online safety awareness, and everyday cloud productivity skills.
              </p>
              <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
                <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 style={{ color: '#2D8B84', fontWeight: 700, marginBottom: '8px' }}>Practical-First</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>No jargon, just direct skills that make teaching and administration easier.</p>
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 style={{ color: '#2D8B84', fontWeight: 700, marginBottom: '8px' }}>Community Led</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>Local fellows supporting local schools for long-term sustainability.</p>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Teacher leading digital class" 
                style={{ width: '100%', borderRadius: '28px', boxShadow: 'var(--shadow-lg)', objectFit: 'cover', height: '420px' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                backgroundColor: '#1A2B4C',
                color: '#ffffff',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: 'var(--shadow-lg)'
              }}>
                <h3 style={{ fontSize: '2rem', color: '#A6E36F', fontWeight: 800 }}>98%</h3>
                <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Confidence Score Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 0', backgroundColor: 'rgba(45, 139, 132, 0.04)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.25rem', color: '#1A2B4C', fontWeight: 700 }}>Meet the Team</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '10px auto 0' }}>
              The dedicated team behind the Digital Confidence Initiative guiding our cohort facilitators and program scaling.
            </p>
          </div>
          
          <div className="grid-4">
            {team.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
