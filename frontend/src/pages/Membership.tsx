import React, { useState } from 'react';

const Membership: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Thank you for your application! We will review it and get back to you soon.');
    setTimeout(() => setMessage(''), 5000);
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div>
      <section style={{
        height: '60vh',
        minHeight: '600px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/hero_homepage_3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'var(--white)',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: '800px', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '15px', fontWeight: '700' }}>Membership</h1>
          <p style={{ fontSize: '1.2rem' }}>Join our community and be part of something bigger</p>
        </div>
      </section>

      <section className="membership-intro">
        <div className="container">
          <h2 className="section-title">Join Our Community</h2>
          <div className="intro-content">
            <p>Become a member of the South Sudanese Student Association at ALU and connect with fellow students who share your heritage and values.</p>
            <p>Our membership offers opportunities for personal growth, cultural celebration, and community service.</p>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="membership-section">
        <div className="container">
          <h2 className="section-title">Membership Application</h2>
          <p className="section-description">Fill out the form below to join our community</p>

          <form className="membership-form" onSubmit={handleSubmit}>
            {message && (
              <div style={{ 
                color: message.includes('Error') ? 'red' : 'green', 
                fontWeight: 'bold', 
                textAlign: 'center', 
                marginBottom: '20px',
                padding: '15px',
                background: message.includes('Error') ? '#f8d7da' : '#d4edda',
                border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`,
                borderRadius: '5px'
              }}>
                {message}
              </div>
            )}

            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    name="first_name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    name="last_name" 
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Academic Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="student-id">ALU Student ID</label>
                  <input 
                    type="text" 
                    id="student-id" 
                    name="student_id" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="program">Program of Study</label>
                  <select 
                    id="program" 
                    name="program" 
                    required
                  >
                    <option value="" disabled>Select your program</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Entrepreneurial Leadership">Entrepreneurial Leadership</option>
                    <option value="International Business & Trade">International Business & Trade</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="year-of-study">Year of Study</label>
                  <select 
                    id="year-of-study" 
                    name="year_of_study" 
                    required
                  >
                    <option value="" disabled>Select your year</option>
                    <option value="Year 1">Year 1</option>
                    <option value="Year 2">Year 2</option>
                    <option value="Year 3">Year 3</option>
                    <option value="Year 4">Year 4</option>
                    <option value="Graduate">Graduate</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="membership-type">Membership Type</label>
                  <select 
                    id="membership-type" 
                    name="membership_type" 
                    required
                  >
                    <option value="regular">Regular Member</option>
                    <option value="executive">Executive Member</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the terms and conditions of membership</label>
            </div>

            <button type="submit" className="btn">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Membership;