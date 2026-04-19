import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const allImages = [
  '/assets/images/hero_homepage_1.jpg',
  '/assets/images/hero_homepage_2.jpg',
  '/assets/images/background_images1.jpg',
  '/assets/images/hero_homepage_3.jpg',
  '/assets/images/background_images2.jpg',
  '/assets/images/background_images3.jpg',
];

const galleryImages = [
  '/assets/images/event4.jpg',
  '/assets/images/event5.jpg',
  '/assets/images/event6.jpg',
  '/assets/images/event7.jpg',
  '/assets/images/event8.jpg',
  '/assets/images/background_images2.jpg',
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero hero-slider">
        {allImages.map((image, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${image}")` }}
          />
        ))}
        <div className="hero-content">
          <h1>South Sudanese Student Association</h1>
          <h2>African Leadership University</h2>
          <p>Your home away from home. Where culture meets community, and friendships become family.</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-outline">Discover SSSALU</Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2 className="section-title">Welcome Home</h2>
              <p>At SSSALU, we're more than just a student organization—we're a family united by shared heritage and common dreams. Whether you're a first-year finding your footing or a senior leading the way, this is your space to belong, grow, and thrive.</p>
              <p>From celebrating our Independence Day with traditional dance and music to late-night study sessions and career mentorship, we create moments that matter and connections that last beyond graduation.</p>
              <Link to="/about" className="btn">Learn About Us</Link>
            </div>
            <div className="welcome-image">
              <img src="/assets/images/background_images1.jpg" alt="SSSALU Community" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">The SSSALU Experience</h2>
          <p className="section-description">More than events and meetings—it's about building a community that supports your journey</p>
          <div className="experience-grid">
            <div className="experience-card">
              <div className="experience-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Find Your Tribe</h3>
              <p>Connect with fellow South Sudanese students who understand your journey. Build friendships that feel like family and create a support system that lasts.</p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <i className="fas fa-drum"></i>
              </div>
              <h3>Celebrate Our Culture</h3>
              <p>From Independence Day festivities to cultural nights filled with traditional music, dance, and food—stay connected to your roots while at ALU.</p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Excel Academically</h3>
              <p>Access peer tutoring, join study groups, and get mentorship from upperclassmen who've been where you are and want to see you succeed.</p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Build Your Future</h3>
              <p>Attend career workshops, network with alumni in various industries, and develop the professional skills that will set you apart after graduation.</p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Make an Impact</h3>
              <p>Participate in community service projects and outreach initiatives that give back to Kigali and create positive change beyond campus.</p>
            </div>

            <div className="experience-card">
              <div className="experience-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Lead & Grow</h3>
              <p>Take on leadership roles, organize events, and develop skills in teamwork, communication, and project management that employers value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="home-events">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Our Regular Meetups</h2>
              <p className="section-description">Join us every two weeks for community gatherings</p>
            </div>
            <Link to="/events" className="btn btn-small">All Events</Link>
          </div>
          <div className="events-preview-grid">
            <div className="event-preview-card">
              <h3>Biweekly Meetup</h3>
              <div className="event-preview-meta">
                <p><i className="fas fa-calendar-alt"></i> Sunday, May 10, 2026</p>
                <p><i className="fas fa-map-marker-alt"></i> ALU Campus</p>
                <p><i className="fas fa-clock"></i> 3:00 PM - 6:00 PM</p>
              </div>
              <p className="event-preview-desc">Regular gatherings to connect, share experiences, and plan upcoming activities. All members welcome!</p>
            </div>
            <div className="event-preview-card">
              <h3>Biweekly Meetup</h3>
              <div className="event-preview-meta">
                <p><i className="fas fa-calendar-alt"></i> Sunday, May 24, 2026</p>
                <p><i className="fas fa-map-marker-alt"></i> ALU Campus</p>
                <p><i className="fas fa-clock"></i> 3:00 PM - 6:00 PM</p>
              </div>
              <p className="event-preview-desc">Regular gatherings to connect, share experiences, and plan upcoming activities. All members welcome!</p>
            </div>
            <div className="event-preview-card">
              <h3>Biweekly Meetup</h3>
              <div className="event-preview-meta">
                <p><i className="fas fa-calendar-alt"></i> Sunday, June 7, 2026</p>
                <p><i className="fas fa-map-marker-alt"></i> ALU Campus</p>
                <p><i className="fas fa-clock"></i> 3:00 PM - 6:00 PM</p>
              </div>
              <p className="event-preview-desc">Regular gatherings to connect, share experiences, and plan upcoming activities. All members welcome!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Highlights */}
      <section className="home-highlights">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Recent Highlights</h2>
              <p className="section-description">Celebrating our achievements and milestones</p>
            </div>
            <Link to="/news" className="btn btn-small">More Stories</Link>
          </div>
          <div className="highlights-preview-grid">
            <div className="highlight-preview-card">
              <div className="highlight-preview-image">
                <img src="/assets/images/background_images1.jpg" alt="Academic Achievement" />
              </div>
              <div className="highlight-preview-content">
                <div className="highlight-header">
                  <span className="highlight-tag">Achievement</span>
                  <span className="highlight-date">December 2024</span>
                </div>
                <h3>Members Shine in Academic Year 2024</h3>
                <p>Our community continues to excel across disciplines, with several members earning top honors and academic recognition at ALU.</p>
              </div>
            </div>
            <div className="highlight-preview-card">
              <div className="highlight-preview-image">
                <img src="/assets/images/background_images2.jpg" alt="Independence Day" />
              </div>
              <div className="highlight-preview-content">
                <div className="highlight-header">
                  <span className="highlight-tag celebration">Celebration</span>
                  <span className="highlight-date">July 2024</span>
                </div>
                <h3>Independence Day 2024 Recap</h3>
                <p>Over 100 students came together for an unforgettable celebration of South Sudan's independence with music, dance, and unity.</p>
              </div>
            </div>
            <div className="highlight-preview-card">
              <div className="highlight-preview-image">
                <img src="/assets/images/background_images3.jpg" alt="Mentorship Program" />
              </div>
              <div className="highlight-preview-content">
                <div className="highlight-header">
                  <span className="highlight-tag program">New Program</span>
                  <span className="highlight-date">September 2024</span>
                </div>
                <h3>Mentorship Program Launch</h3>
                <p>Connecting first-years with experienced upperclassmen for guidance, support, and friendship throughout their ALU journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="home-gallery">
        <div className="container">
          <h2 className="section-title">Moments We've Shared</h2>
          <p className="section-description">A glimpse into our community through photos</p>
          <div className="gallery-preview-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="gallery-preview-item" 
                onClick={() => openModal(image)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/gallery" className="btn">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img src={modalImage} alt="Full view" />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Be Part of Something Special?</h2>
          <p>Join SSSALU and connect with a community that celebrates who you are and supports where you're going.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
