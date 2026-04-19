import React, { useState } from 'react';

interface AlumniMember {
  id: number;
  first_name: string;
  last_name: string;
  graduation_year: number;
  program: string;
  current_position: string;
  company: string;
  bio: string;
  photo: string;
  linkedin?: string;
}

const Alumni: React.FC = () => {
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniMember | null>(null);

  const staticAlumni: AlumniMember[] = [
  {
    id: 1,
    first_name: 'Long',
    last_name: 'Maker',
    graduation_year: 2024,
    program: 'Software Engineering',
    current_position: 'Software Engineer',
    company: 'Tech Company',
    bio: 'Long Maker graduated from ALU in 2023 with a degree in Software Engineering. During his time at ALU, he demonstrated exceptional technical skills and leadership abilities. He actively contributed to various student projects and initiatives within the South Sudanese Student Association. After graduation, Long secured a position as a Software Engineer at a leading tech company, where he continues to develop innovative solutions and mentor current students.',
    photo: '/assets/images/Longmakeralumni.jpg',
    linkedin: 'https://www.linkedin.com'
  },
  {
    id: 2,
    first_name: 'Abraham',
    last_name: 'Aruei',
    graduation_year: 2024,
    program: 'Computer Science',
    current_position: 'Founder, Silicon High School',
    company: 'Silicon High School',
    bio: 'Abraham Aruei graduated from ALU in 2024 with a degree in Computer Science. Throughout his academic journey, he was passionate about creating sustainable solutions for African markets. He played an active role in the South Sudanese Student Association and led several community initiatives. After graduation, Abraham founded Silicon High School in Uganda, an institution focused on providing quality technology education and empowering the next generation of African innovators.',
    photo: '/assets/images/aruei_alumni.jpg',
    linkedin: 'https://www.linkedin.com'
  }
];

  const openModal = (alumni: AlumniMember) => {
    setSelectedAlumni(alumni);
  };

  const closeModal = () => {
    setSelectedAlumni(null);
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
          <h1 style={{ fontSize: '3rem', marginBottom: '0', fontWeight: '700' }}>Alumni Network</h1>
        </div>
      </section>

      {/* Alumni Directory */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Our Alumni Community</h2>
          <p className="section-description" style={{ maxWidth: '900px', margin: '0 auto 60px' }}>
            Meet our outstanding alumni and learn about their journeys after ALU. Click on any alumni to learn more about them.
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {staticAlumni.map((member) => (
              <div 
                key={member.id}
                onClick={() => openModal(member)}
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
                <div style={{ height: '280px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' }}>
                  <img 
                    src={member.photo} 
                    alt={`${member.first_name} ${member.last_name}`}
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
                    {member.first_name} {member.last_name}
                  </h3>
                  <h4 style={{ 
                    fontSize: '13px', 
                    fontWeight: '600', 
                    color: 'var(--secondary)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.8px',
                    marginBottom: '4px'
                  }}>
                    {member.current_position}
                  </h4>
                  <p style={{ 
                    fontSize: '12px', 
                    color: 'var(--text-light)', 
                    marginBottom: '12px'
                  }}>
                    Class of {member.graduation_year}
                  </p>
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
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Modal */}
      {selectedAlumni && (
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
                src={selectedAlumni.photo} 
                alt={`${selectedAlumni.first_name} ${selectedAlumni.last_name}`}
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
                {selectedAlumni.first_name} {selectedAlumni.last_name}
              </h2>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                color: 'var(--secondary)', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                {selectedAlumni.current_position}
              </h3>
              <p style={{ 
                fontSize: '15px', 
                color: 'var(--text-light)', 
                marginBottom: '24px'
              }}>
                Class of {selectedAlumni.graduation_year} • {selectedAlumni.program}
              </p>
              <p style={{ 
                color: 'var(--text-light)', 
                lineHeight: '1.8', 
                fontSize: '15px',
                marginBottom: '32px'
              }}>
                {selectedAlumni.bio}
              </p>
              
              {selectedAlumni.linkedin && (
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <a 
                    href={selectedAlumni.linkedin} 
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Alumni Impact */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 className="section-title">Our Alumni Impact</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8', marginBottom: '50px' }}>
            Our alumni remain an integral part of our community, providing mentorship, guidance, and support to current students while serving as ambassadors of both SSSALU and ALU in their professional endeavors.
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '40px',
            marginTop: '50px'
          }}>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '8px' }}>15+</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Alumni</div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '8px' }}>5+</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Companies</div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '8px' }}>7+</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Engineers</div>
            </div>
            <div>
              <div style={{ fontSize: '42px', fontWeight: '700', color: 'var(--secondary)', marginBottom: '8px' }}>10+</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>Entrepreneurs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship & Support */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Mentorship */}
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: 'var(--primary)' }}>Alumni Mentorship</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8', marginBottom: '30px' }}>
                Connect with experienced alumni who provide guidance on academic success, career development, and personal growth. Our mentorship program creates lasting relationships that support both mentors and mentees throughout their journeys.
              </p>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                Whether you're seeking guidance or ready to give back, join our community of mentors and mentees building the future together.
              </p>
            </div>

            {/* Support */}
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: 'var(--primary)' }}>Support Our Community</h2>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8', marginBottom: '30px' }}>
                Help empower the next generation of South Sudanese leaders at ALU through scholarships, internships, guest speaking, or strategic partnerships.
              </p>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', lineHeight: '1.8' }}>
                Your support strengthens our community and creates opportunities for students to thrive academically and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Alumni;
