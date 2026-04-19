import React, { useState } from 'react';

const staticEvents = [
  {
    id: 1,
    title: 'Biweekly Meetups',
    description: 'Join us every other Sunday for community gatherings, discussions, and cultural activities. Connect with fellow South Sudanese students and build lasting friendships.',
    location: 'ALU Campus',
    status: 'recurring',
    image: '/assets/images/background_images2.jpg'
  },
  {
    id: 2,
    title: 'Ikazi Cultural Festival',
    description: 'Our annual cultural celebration featuring traditional music, dance, food, and performances that showcase the rich heritage of South Sudan. Held three times a year to coincide with new student intakes.',
    location: 'ALU Campus',
    status: 'regular',
    image: '/assets/images/event1.jpg'
  },
  {
    id: 3,
    title: 'New Intake Welcome',
    description: 'Welcome ceremony for new South Sudanese students joining ALU. Meet the SSSALU community, learn about our programs, and start your journey with us. Held three times a year for each intake.',
    location: 'ALU Campus',
    status: 'regular',
    image: '/assets/images/background_imageabout.jpg'
  },
  {
    id: 4,
    title: 'Inauguration Ceremony',
    description: 'Official inauguration of the new SSSALU Executive Board. Witness the transition of leadership and celebrate our commitment to serving the community.',
    location: 'ALU Campus',
    status: 'regular',
    image: '/assets/images/event4.jpg'
  },
  {
    id: 5,
    title: 'Celebrating the Outgoing Class',
    description: 'Farewell celebration honoring our graduating South Sudanese students. Celebrate their achievements and wish them success in their future endeavors.',
    location: 'ALU Campus',
    status: 'regular',
    image: '/assets/images/Longmakeralumni.jpg'
  }
];

const Events: React.FC = () => {
  const allEvents = staticEvents;

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/history.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '0', fontWeight: '700' }}>Our Events</h1>
        </div>
      </section>

      {/* Events Section */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Our Events</h2>
          <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            Join us for cultural celebrations, community gatherings, and special occasions throughout the year
          </p>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {allEvents.map((event) => (
              <div 
                key={event.id}
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
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {event.status === 'recurring' && (
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'var(--secondary)',
                      color: 'var(--white)',
                      padding: '6px 12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Recurring
                    </div>
                  )}
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    marginBottom: '12px', 
                    color: 'var(--primary)' 
                  }}>
                    {event.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--text-light)',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <i className="fas fa-map-marker-alt" style={{ color: 'var(--secondary)', width: '16px' }}></i>
                    {event.location}
                  </p>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
