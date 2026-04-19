import React, { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is SSSALU?',
    answer: 'SSSALU (South Sudanese Student Association at African Leadership University) is a student organization that brings together South Sudanese students at ALU to celebrate our culture, support each other academically and professionally, and create a strong community.'
  },
  {
    id: 2,
    question: 'Who can join SSSALU?',
    answer: 'SSSALU membership is open to all South Sudanese students enrolled at African Leadership University. We welcome students from all programs and years of study.'
  },
  {
    id: 3,
    question: 'How do I become a member?',
    answer: 'To become a member, simply attend one of our events or reach out to any executive board member. You can also contact us through our email or social media channels to express your interest in joining.'
  },
  {
    id: 4,
    question: 'What events does SSSALU organize?',
    answer: 'We organize various events including biweekly meetups every other Sunday, the Ikazi Cultural Festival, new intake welcome ceremonies, inauguration ceremonies for new leadership, and celebrations for graduating students. We also host cultural nights, workshops, and community outreach activities.'
  },
  {
    id: 5,
    question: 'When are the biweekly meetups?',
    answer: 'Our biweekly meetups are held every other Sunday from 3:00 PM to 6:00 PM at ALU Campus. These gatherings provide opportunities for community building, discussions, and cultural activities.'
  },
  {
    id: 6,
    question: 'How can I get involved in SSSALU activities?',
    answer: 'There are many ways to get involved! You can attend our events, volunteer for projects, join committees, participate in cultural activities, or even run for a leadership position during elections. Contact any executive board member to learn about current opportunities.'
  },
  {
    id: 7,
    question: 'Does SSSALU offer mentorship programs?',
    answer: 'Yes! We have an alumni mentorship program that connects current students with SSSALU alumni who provide guidance on academic success, career development, and personal growth. Mentors and mentees meet regularly throughout the academic year.'
  },
  {
    id: 8,
    question: 'How can I contact the SSSALU leadership?',
    answer: 'You can reach out to our leadership team through our official email at choldaniel700@gmail.com or connect with us on our social media platforms. You can also find contact information for individual executive board members on our Leadership page.'
  },
  {
    id: 9,
    question: 'What is the Ikazi Cultural Festival?',
    answer: 'Ikazi is the welcoming of new students by the university where walk of nations and cultural performances take place. It showcases the rich heritage of South Sudan and is held three times a year to coincide with new student intakes.'
  },
  {
    id: 10,
    question: 'How can alumni stay connected with SSSALU?',
    answer: 'Alumni can stay connected by joining our alumni network, attending alumni events, participating in our mentorship program as mentors, and following our social media channels. We also welcome alumni to contribute through guest speaking, providing internship opportunities, or supporting our initiatives.'
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      {/* Page Banner */}
      <section style={{
        height: '60vh',
        minHeight: '400px',
        background: 'url("/assets/images/background_images3.jpg")',
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
          <h1 style={{ fontSize: '3rem', marginBottom: '0', fontWeight: '700' }}>FAQ</h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', background: 'var(--white)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title">Common Questions</h2>
          <p className="section-description" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>
            Quick answers about SSSALU
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqData.map((faq) => (
              <div 
                key={faq.id}
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--white)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'var(--primary)'
                  }}
                >
                  <span>{faq.question}</span>
                  <i 
                    className={`fas fa-chevron-${openId === faq.id ? 'up' : 'down'}`}
                    style={{ 
                      color: 'var(--secondary)',
                      fontSize: '14px',
                      transition: 'transform 0.3s ease'
                    }}
                  ></i>
                </button>
                {openId === faq.id && (
                  <div style={{ 
                    padding: '0 24px 24px 24px',
                    color: 'var(--text-light)',
                    fontSize: '15px',
                    lineHeight: '1.8'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px', color: 'var(--primary)' }}>Still Have Questions?</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
            If you couldn't find the answer you're looking for, feel free to reach out to us directly
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

export default FAQ;
