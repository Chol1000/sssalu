import React from 'react';

const Contact: React.FC = () => {

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/hero_homepage_1.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '700' }}>Contact Us</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Get in touch with the South Sudanese Student Association at ALU</p>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description" style={{ marginBottom: '70px' }}>We're here to answer your questions and connect with you</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Contact Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              maxWidth: '800px',
              margin: '0 auto',
              width: '100%'
            }}>
              {/* Location */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ 
                  fontSize: '28px', 
                  color: 'var(--secondary)', 
                  minWidth: '40px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'var(--primary)'
                  }}>Our Location</h3>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '15px', 
                    lineHeight: '1.8', 
                    margin: '0' 
                  }}>
                    African Leadership University<br/>
                    Kigali Innovation City<br/>
                    Kigali, Rwanda
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ 
                  fontSize: '28px', 
                  color: 'var(--secondary)', 
                  minWidth: '40px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'var(--primary)'
                  }}>Email Us</h3>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '15px', 
                    lineHeight: '1.8', 
                    margin: '0' 
                  }}>
                    <a 
                      href="mailto:choldaniel700@gmail.com" 
                      style={{ 
                        color: 'var(--secondary)', 
                        textDecoration: 'none',
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      choldaniel700@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ 
                  fontSize: '28px', 
                  color: 'var(--secondary)', 
                  minWidth: '40px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'var(--primary)'
                  }}>Call Us</h3>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '15px', 
                    lineHeight: '1.8', 
                    margin: '0' 
                  }}>
                    <a 
                      href="tel:+250798619966" 
                      style={{ 
                        color: 'var(--secondary)', 
                        textDecoration: 'none',
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      +250 798 619 966
                    </a>
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ 
                  fontSize: '28px', 
                  color: 'var(--secondary)', 
                  minWidth: '40px',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'Crimson Text, serif',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: 'var(--primary)'
                  }}>Office Hours</h3>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '15px', 
                    lineHeight: '1.8', 
                    margin: '0' 
                  }}>
                    Monday - Friday: 9:00 AM - 5:00 PM<br/>
                    Saturday: 10:00 AM - 2:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{ 
              border: '1px solid var(--border)', 
              overflow: 'hidden', 
              height: '500px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5535042082997!2d30.150342673651657!3d-1.9306257366670636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca77688d3131f%3A0x3a65f6d29a33c0d3!2sAfrican%20Leadership%20University%20(ALU)!5e0!3m2!1sen!2srw!4v1766571438446!5m2!1sen!2srw" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ALU Location"
              />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
