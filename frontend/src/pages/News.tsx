import React, { useState } from 'react';

const staticNews = [
  {
    id: 1,
    title: 'Independence Day Celebration: Honoring Our Nation',
    content: 'SSSALU commemorated South Sudan\'s Independence Day with a special celebration featuring cultural performances, traditional food, and reflections on our nation\'s journey. The event brought together the entire South Sudanese community at ALU in a spirit of unity and pride. Students showcased traditional dances, shared stories of our heritage, and celebrated the progress our nation continues to make. The celebration was a powerful reminder of our shared identity and the importance of preserving our cultural traditions while pursuing excellence in our academic and professional endeavors.',
    category: 'Events',
    author_name: 'Events Coordinator',
    excerpt: 'Celebrating South Sudan\'s independence with pride, unity, and cultural performances',
    image: '/assets/images/event4.jpg',
    is_featured: true,
    created_at: '2025-07-09T16:00:00'
  }
];

const NewsPage: React.FC = () => {
  const featuredNews = staticNews[0];
  const [selectedArticle, setSelectedArticle] = useState<typeof staticNews[0] | null>(null);

  const openModal = (article: typeof staticNews[0]) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
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
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: '700' }}>News & Updates</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Stay updated with the latest news, stories, and insights from our community</p>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'center',
            border: '1px solid var(--border)',
            overflow: 'hidden'
          }}>
            <div style={{ height: '450px', overflow: 'hidden' }}>
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '40px' }}>
              <span style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'var(--secondary)',
                color: 'var(--white)',
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}>Latest</span>
              <h2 style={{ 
                fontFamily: 'Crimson Text, serif',
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'var(--primary)',
                lineHeight: '1.3'
              }}>{featuredNews.title}</h2>
              <div style={{ 
                display: 'flex',
                gap: '20px',
                fontSize: '14px',
                color: 'var(--text-light)',
                marginBottom: '20px'
              }}>
                <span><i className="fas fa-calendar-alt" style={{ color: 'var(--secondary)', marginRight: '8px' }}></i>{new Date(featuredNews.created_at).toLocaleDateString()}</span>
                <span><i className="fas fa-user" style={{ color: 'var(--secondary)', marginRight: '8px' }}></i>{featuredNews.author_name}</span>
              </div>
              <p style={{ 
                color: 'var(--text-light)',
                lineHeight: '1.8',
                marginBottom: '28px',
                fontSize: '15px'
              }}>{featuredNews.content.substring(0, 200)}...</p>
              <button
                onClick={() => openModal(featuredNews)}
                className="btn"
                style={{ cursor: 'pointer' }}
              >Read Full Article</button>
            </div>
          </div>
        </div>
      </section>



      {/* Article Modal */}
      {selectedArticle && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
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
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              margin: '20px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button 
                onClick={closeModal}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'var(--white)',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
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
              <span style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                padding: '8px 16px',
                background: 'var(--secondary)',
                color: 'var(--white)',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>{selectedArticle.category}</span>
            </div>

            {/* Modal Content */}
            <div className="news-modal-content" style={{ padding: '40px 50px 50px' }}>
              <h1 style={{
                fontFamily: 'Crimson Text, serif',
                fontSize: '36px',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'var(--primary)',
                lineHeight: '1.4'
              }}>{selectedArticle.title}</h1>

              <div style={{ 
                display: 'flex',
                gap: '24px',
                paddingBottom: '24px',
                marginBottom: '32px',
                borderBottom: '1px solid var(--border)',
                fontSize: '14px',
                color: 'var(--text-light)',
                flexWrap: 'wrap'
              }}>
                <span>
                  <i className="fas fa-calendar-alt" style={{ color: 'var(--secondary)', marginRight: '8px' }}></i>
                  {new Date(selectedArticle.created_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span>
                  <i className="fas fa-user" style={{ color: 'var(--secondary)', marginRight: '8px' }}></i>
                  {selectedArticle.author_name}
                </span>
              </div>

              <div style={{
                color: 'var(--text)',
                fontSize: '16px',
                lineHeight: '1.9',
                marginBottom: '40px'
              }}>
                <p style={{ marginBottom: '20px' }}>{selectedArticle.content}</p>
                
                {/* Additional content paragraphs for better reading experience */}
                {selectedArticle.content.length > 300 && (
                  <>
                    <p style={{ marginBottom: '20px' }}>
                      The South Sudanese Student Association continues to foster a vibrant community at African Leadership University, 
                      bringing together students through cultural celebrations, academic support, and professional development opportunities.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                      Our commitment to excellence and unity drives us to create meaningful experiences that celebrate our heritage 
                      while preparing our members for leadership roles in their respective fields.
                    </p>
                  </>
                )}
              </div>

              <div style={{ 
                padding: '24px 32px',
                background: 'var(--bg-light)',
                borderLeft: '4px solid var(--secondary)'
              }}>
                <p style={{ 
                  fontStyle: 'italic',
                  color: 'var(--text-light)',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  margin: 0
                }}>
                  "{selectedArticle.excerpt}"
                </p>
              </div>

              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <button 
                  onClick={closeModal}
                  className="btn"
                  style={{ minWidth: '200px' }}
                >Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
