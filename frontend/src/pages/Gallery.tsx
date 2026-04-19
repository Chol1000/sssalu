import React, { useState } from 'react';

const galleryItems = [
  { id: 1, image: "/assets/images/event1.jpg" },
  { id: 2, image: "/assets/images/event4.jpg" },
  { id: 3, image: "/assets/images/event5.jpg" },
  { id: 4, image: "/assets/images/event6.jpg" },
  { id: 5, image: "/assets/images/event7.jpg" },
  { id: 6, image: "/assets/images/event8.jpg" },
  { id: 7, image: "/assets/images/gal10.jpg" },
  { id: 8, image: "/assets/images/gal11.jpg" },
  { id: 9, image: "/assets/images/gal12.jpg" },
  { id: 10, image: "/assets/images/newgal1.jpg" },
  { id: 11, image: "/assets/images/newgal2.jpg" },
  { id: 12, image: "/assets/images/newgal3.jpg" },
  { id: 13, image: "/assets/images/photogroup.jpg" },
  { id: 14, image: "/assets/images/graduand1.jpg" },
  { id: 15, image: "/assets/images/graduand2.jpg" },
  { id: 16, image: "/assets/images/graduand3.jpg" }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/hero_homepage_3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '0', fontWeight: '700' }}>Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title">Our Moments</h2>
          <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            Explore our collection of memories from events, activities, and special moments
          </p>

          <div className="gallery-grid" style={{ 
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => openModal(item.image)}
                className="gallery-item"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--secondary)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img 
                  src={item.image} 
                  alt={`Gallery ${item.id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
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
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          
          <img 
            src={selectedImage} 
            alt="Gallery"
            style={{ 
              maxWidth: '90%', 
              maxHeight: '90vh', 
              objectFit: 'contain'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;