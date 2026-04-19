import React from 'react';

const staticProjects = [
  {
    id: 1,
    title: 'Cultural Heritage Preservation',
    description: 'Documenting and preserving South Sudanese cultural traditions, languages, and customs through digital media and community engagement.',
    image: '/assets/images/event1.jpg'
  },
  {
    id: 2,
    title: 'Student Mentorship Program',
    description: 'Connecting current SSSALU members with alumni and professionals for academic and career guidance.',
    image: '/assets/images/photogroup.jpg'
  },
  {
    id: 3,
    title: 'Community Outreach & Service',
    description: 'Regular volunteer activities in local Kigali communities, including tutoring programs and educational workshops.',
    image: '/assets/images/event5.jpg'
  },
  {
    id: 4,
    title: 'Leadership Development',
    description: 'Workshops and training sessions focused on developing leadership skills, entrepreneurship, and professional competencies.',
    image: '/assets/images/event6.jpg'
  },
  {
    id: 5,
    title: 'Cultural Events',
    description: 'Celebrating South Sudanese culture through music, dance, food, and art that brings together the entire ALU community.',
    image: '/assets/images/event4.jpg'
  },
  {
    id: 6,
    title: 'Alumni Network Building',
    description: 'Creating and maintaining strong connections between current students and SSSALU alumni worldwide.',
    image: '/assets/images/graduand1.jpg'
  }
];

const Projects: React.FC = () => {
  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/background_projectdone.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '0', fontWeight: '700' }}>Our Projects</h1>
        </div>
      </section>

      {/* Projects Introduction */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 className="section-title">Making a Difference</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
            SSSALU is committed to making a positive impact through various projects and initiatives that benefit our community and beyond.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8' }}>
            From educational programs to community outreach, each initiative is designed to empower South Sudanese students, preserve our cultural heritage, and contribute to positive change.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="section-title">Our Initiatives</h2>
          <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            Explore the projects and programs that drive our mission forward
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {staticProjects.map((project) => (
              <div 
                key={project.id}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  overflow: 'hidden',
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
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '28px' }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    marginBottom: '16px', 
                    color: 'var(--primary)' 
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '15px',
                    lineHeight: '1.7'
                  }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section style={{ padding: '80px 0', background: 'var(--white)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '16px', color: 'var(--primary)' }}>Get Involved</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
            Want to contribute to our projects or propose a new initiative? We welcome your ideas and participation.
          </p>
          <a 
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'var(--secondary)',
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
