import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Landmark, ShieldCheck, HeartHandshake, ArrowRight } from 'lucide-react';

const GetInvolved = () => {
  const pathways = [
    {
      title: 'Join as a Teacher',
      desc: 'For teachers interested in joining a future cohort or starting digital training.',
      icon: <UserCheck size={32} style={{ color: '#2D8B84' }} />,
      btnText: 'Join Cohort',
      link: '/volunteer?role=teacher'
    },
    {
      title: 'Host a Cohort',
      desc: 'For schools or institutions with a learning space, computer lab or community access.',
      icon: <Landmark size={32} style={{ color: '#2D8B84' }} />,
      btnText: 'Register School',
      link: '/volunteer?role=school'
    },
    {
      title: 'Volunteer as a Fellow',
      desc: 'Support facilitation, curriculum, documentation, research or digital safety workshops.',
      icon: <ShieldCheck size={32} style={{ color: '#2D8B84' }} />,
      btnText: 'Apply as Fellow',
      link: '/volunteer?role=fellow'
    },
    {
      title: 'Partner With Us',
      desc: 'For organizations, sponsors, tech partners, research bodies and supporters.',
      icon: <HeartHandshake size={32} style={{ color: '#2D8B84' }} />,
      btnText: 'Contact Partnering',
      link: '/partners'
    }
  ];

  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: '#ffffff'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge-lime" style={{ marginBottom: '15px' }}>
            FIND YOUR PATHWAY
          </span>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#1A2B4C',
            fontWeight: 800,
            marginBottom: '15px'
          }}>
            Find Your Way to Help
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#475569',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Whether you are an educator, school director, technologist, or sponsor, you can support digital confidence in Kenya.
          </p>
        </div>

        <div className="grid-4">
          {pathways.map((path, idx) => (
            <div key={idx} className="card-hover" style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              padding: '30px 24px'
            }}>
              <div>
                <div style={{
                  padding: '12px',
                  backgroundColor: 'rgba(45, 139, 132, 0.08)',
                  borderRadius: '12px',
                  width: 'fit-content',
                  marginBottom: '20px'
                }}>
                  {path.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: '#1A2B4C',
                  fontWeight: 700,
                  marginBottom: '10px'
                }}>
                  {path.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: '25px'
                }}>
                  {path.desc}
                </p>
              </div>
              <Link 
                to={path.link} 
                className="btn btn-outline" 
                style={{
                  width: '100%',
                  fontSize: '0.85rem',
                  padding: '10px 0',
                  textAlign: 'center'
                }}
              >
                {path.btnText} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetInvolved;
