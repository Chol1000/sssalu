import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/background_imageabout.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Our Story</h1>
          <p style={{ fontSize: '1.2rem' }}>The journey of SSSALU at African Leadership University</p>
        </div>
      </section>

      {/* History Section */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">How We Began</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '20px', textAlign: 'center' }}>
              The South Sudanese Student Association at African Leadership University was founded in 2023 by a group of passionate South Sudanese students who recognized the need for a community that celebrates their shared heritage while pursuing academic excellence.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '20px', textAlign: 'center' }}>
              What began as informal gatherings among friends quickly evolved into a structured organization with a clear mission and vision. Over the years, SSSALU has grown from a small group of founding members to a vibrant community of students, alumni, and supporters.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--text-light)', textAlign: 'center' }}>
              Today, we organize cultural celebrations, academic support programs, community outreach initiatives, and professional development opportunities. Our association has become a home away from home for South Sudanese students at ALU.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', color: 'var(--secondary)', marginBottom: '20px' }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h2 style={{ fontFamily: 'Crimson Text, serif', fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: 'var(--primary)' }}>Our Mission</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '15px' }}>
                To unite South Sudanese students at ALU by creating a supportive community that celebrates our cultural heritage, promotes academic excellence, and develops future leaders committed to positive change.
              </p>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '40px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', color: 'var(--secondary)', marginBottom: '20px' }}>
                <i className="fas fa-eye"></i>
              </div>
              <h2 style={{ fontFamily: 'Crimson Text, serif', fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: 'var(--primary)' }}>Our Vision</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '15px' }}>
                To be the premier student association that empowers South Sudanese students to embrace their identity, achieve their full potential, and become transformative leaders who drive development and unity in South Sudan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-description">The principles that guide everything we do</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: '50px', color: 'var(--secondary)', marginBottom: '20px' }}>
                <i className="fas fa-users"></i>
              </div>
              <h3 style={{ fontFamily: 'Crimson Text, serif', fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--primary)' }}>Unity</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '15px' }}>
                We stand together as one community, celebrating our shared heritage and supporting each other through every challenge and triumph at ALU.
              </p>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: '50px', color: 'var(--secondary)', marginBottom: '20px' }}>
                <i className="fas fa-star"></i>
              </div>
              <h3 style={{ fontFamily: 'Crimson Text, serif', fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--primary)' }}>Excellence</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '15px' }}>
                We pursue excellence in academics, leadership, and service, pushing ourselves to be the best versions of ourselves and inspiring others to do the same.
              </p>
            </div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ fontSize: '50px', color: 'var(--secondary)', marginBottom: '20px' }}>
                <i className="fas fa-heart"></i>
              </div>
              <h3 style={{ fontFamily: 'Crimson Text, serif', fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: 'var(--primary)' }}>Service</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: '1.7', fontSize: '15px' }}>
                We are committed to giving back to our community, using our education and talents to create positive impact in South Sudan and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Want to Learn More?</h2>
          <p>Explore our leadership team, upcoming events, and how you can get involved with SSSALU.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '32px' }}>
            <Link to="/leadership" className="btn btn-outline">Meet Our Leaders</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
