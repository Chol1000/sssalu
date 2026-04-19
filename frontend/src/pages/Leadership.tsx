import React, { useState } from 'react';

interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
  facebook?: string;
  email?: string;
}

const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leaders: Leader[] = [
    {
      name: 'Chol Daniel Deng Dau',
      title: 'President',
      image: '/assets/images/president_Chol.jpg',
      bio: 'Chol is the President of the South Sudanese Students Association at ALU and a third-year Software Engineering student. He is passionate about using technology to support community building and leadership development. Since his first year at ALU, Chol has been an active member of the association. As President, he leads with vision and commitment, guiding the team, representing the association in key spaces, and working to empower South Sudanese students through unity, innovation, and service.',
      linkedin: 'https://www.linkedin.com/in/chol-daniel/',
      facebook: 'https://www.facebook.com/chol.daniel',
      email: 'chol.daniel@alu.edu'
    },
    {
      name: 'Jacob Akech Majur',
      title: 'Vice President',
      image: '/assets/images/leader2.jpg',
      bio: 'Akech, the Vice President of the South Sudanese Students Association at ALU, is studying entrepreneurial leadership with a strong interest in international development and global business strategy. He plays a key role in coordinating team efforts, supporting mentorship initiatives, and building leadership capacity that creates impact both within the ALU community and beyond.',
      linkedin: 'https://www.linkedin.com/in/akech-jacob-majur-09948b313/',
      facebook: 'https://www.facebook.com/jacob.akech',
      email: 'jacob.akech@alu.edu'
    },
    {
      name: 'Suzan Nyachiaran Ruai',
      title: 'Secretary General',
      image: '/assets/images/leader3.jpg',
      bio: 'Suzan is the Secretary General of the South Sudanese Students Association at ALU. She is studying entrepreneurial leadership and is committed to using business and innovation to address social challenges. She oversees the association\'s operations, coordinates team activities, and ensures effective communication and execution of our goals.',
      linkedin: 'https://www.linkedin.com/in/suzan-ruai',
      facebook: 'https://www.facebook.com/suzan.ruai',
      email: 'suzan.ruai@alu.edu'
    },
    {
      name: 'Jongkuch Chol Anyar',
      title: 'Treasurer',
      image: '/assets/images/leader6.jpg',
      bio: 'Jongkuch serves as the Finance Officer for the South Sudanese Students Association at ALU. He is studying Software Engineering and is responsible for overseeing the association\'s budget and financial planning. He ensures that resources are allocated effectively to support programs, events, and long-term goals.',
      linkedin: 'https://www.linkedin.com/in/jongkuch-anyar-36535131b/',
      facebook: 'https://www.facebook.com/jongkuch.anyar',
      email: 'jongkuch.anyar@alu.edu'
    },
    {
      name: 'Goch Thiong Garang Akot',
      title: 'Events Coordinator',
      image: '/assets/images/leader5.jpg',
      bio: 'Goch is the Events Coordinator for the South Sudanese Students Association at ALU. He is studying entrepreneurial leadership and brings creativity and precision to planning and executing cultural celebrations, social gatherings, and community outreach events that strengthen unity and pride among members.',
      linkedin: 'https://www.linkedin.com/in/goch-thiong/',
      facebook: 'https://www.facebook.com/goch.thiong',
      email: 'goch.thiong@alu.edu'
    },
    {
      name: 'Angeth Chol Ajak Deng',
      title: 'Secretary for Sports, Culture, and Entertainment',
      image: '/assets/images/leader7.jpg',
      bio: 'Angeth serves as the Secretary for Sports, Culture, and Entertainment in the South Sudanese Students Association at ALU. She is studying entrepreneurial leadership and is passionate about using storytelling to celebrate and promote South Sudanese culture. She manages the association\'s social media presence and builds partnerships that strengthen cultural engagement within the ALU community.',
      linkedin: 'https://www.linkedin.com/in/angeth-chol-423b92302/',
      facebook: 'https://www.facebook.com/angeth.deng',
      email: 'angeth.deng@alu.edu'
    },
    {
      name: 'Monica Mabior',
      title: 'Academic and Professional Development Officer',
      image: '/assets/images/leader4.jpg',
      bio: 'Monica serves as the Academic and Professional Development Officer in the South Sudanese Students Association at ALU. She is studying entrepreneurial leadership and focuses on creating opportunities for academic growth and career development. She organizes outreach programs and builds partnerships with local and international organizations to support students and drive meaningful impact.',
      linkedin: 'https://www.linkedin.com/in/monica-mabior-3448112b8/',
      facebook: 'https://www.facebook.com/monica.mabior',
      email: 'monica.mabior@alu.edu'
    }
  ];

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader);
  };

  const closeModal = () => {
    setSelectedLeader(null);
  };

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/background_images1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--white)',
        marginTop: '0',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.3)'
        }}></div>
        <div style={{ maxWidth: '800px', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '0', fontWeight: '700' }}>Our Leadership</h1>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">2025/2026 Executive Board</h2>
          <p className="section-description">Meet the dedicated individuals who lead our association and work tirelessly to create meaningful experiences for our members</p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {leaders.map((leader, index) => (
              <div 
                key={index}
                onClick={() => openModal(leader)}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--secondary)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ height: '320px', overflow: 'hidden' }}>
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <h3 style={{ 
                    fontFamily: 'Crimson Text, serif', 
                    fontSize: '22px', 
                    fontWeight: '600', 
                    marginBottom: '8px', 
                    color: 'var(--primary)' 
                  }}>
                    {leader.name}
                  </h3>
                  <h4 style={{ 
                    fontSize: '13px', 
                    fontWeight: '600', 
                    color: 'var(--secondary)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.8px',
                    marginBottom: '12px'
                  }}>
                    {leader.title}
                  </h4>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '14px',
                    lineHeight: '1.6',
                    textAlign: 'left',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Modal */}
      {selectedLeader && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto'
          }}
          onClick={closeModal}
        >
          <div 
            style={{
              background: 'var(--white)',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--secondary)';
                e.currentTarget.style.color = 'var(--white)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--white)';
                e.currentTarget.style.color = 'var(--text)';
              }}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div style={{ height: '400px', overflow: 'hidden' }}>
              <img 
                src={selectedLeader.image} 
                alt={selectedLeader.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', background: 'var(--bg-light)' }}
              />
            </div>
            
            <div style={{ padding: '40px' }}>
              <h2 style={{ 
                fontFamily: 'Crimson Text, serif', 
                fontSize: '32px', 
                fontWeight: '600', 
                marginBottom: '10px', 
                color: 'var(--primary)' 
              }}>
                {selectedLeader.name}
              </h2>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                color: 'var(--secondary)', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginBottom: '24px'
              }}>
                {selectedLeader.title}
              </h3>
              <p style={{ 
                color: 'var(--text-light)', 
                lineHeight: '1.8', 
                fontSize: '15px',
                marginBottom: '32px'
              }}>
                {selectedLeader.bio}
              </p>
              
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                {selectedLeader.linkedin && (
                  <a 
                    href={selectedLeader.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--secondary)';
                      e.currentTarget.style.color = 'var(--white)';
                      e.currentTarget.style.borderColor = 'var(--secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                {selectedLeader.facebook && (
                  <a 
                    href={selectedLeader.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--secondary)';
                      e.currentTarget.style.color = 'var(--white)';
                      e.currentTarget.style.borderColor = 'var(--secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                )}
                {selectedLeader.email && (
                  <a 
                    href={`mailto:${selectedLeader.email}`}
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '1px solid var(--border)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--secondary)';
                      e.currentTarget.style.color = 'var(--white)';
                      e.currentTarget.style.borderColor = 'var(--secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text)';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leadership;
