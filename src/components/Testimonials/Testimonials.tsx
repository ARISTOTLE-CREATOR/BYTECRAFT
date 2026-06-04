import React from 'react';

export default function Testimonials() {
  const floatingClients = [
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', alt: 'Client Partner 1', className: 'cav-1' },
    { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', alt: 'Client Partner 2', className: 'cav-2' },
    { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop', alt: 'Client Partner 3', className: 'cav-3' },
    { src: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop', alt: 'Client Partner 4', className: 'cav-4' },
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', alt: 'Client Partner 5', className: 'cav-5' },
    { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop', alt: 'Client Partner 6', className: 'cav-6' }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container testimonial-card-container">
        <div className="testimonials-header" id="testimonials-section-intro">
          <span className="section-label" id="testimonials-label">
            Feedback
          </span>
          <h2 id="testimonials-heading">
            What our customer says <span className="highlight-underline">About Us</span>
          </h2>
        </div>

        <div className="testimonial-bubble-card" id="testimonial-main-box">
          <span className="testimonial-quote-icon quote-left" id="testimonial-q-l">“</span>
          <p className="testimonial-text" id="testimonial-speech-content">
            ByteCraft delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
          </p>
          <div className="testimonial-author-desc" id="testimonial-author">
            — ByteCraft Partner Case Study
          </div>
          <span className="testimonial-quote-icon quote-right" id="testimonial-q-r">”</span>
        </div>

        {/* Absolute floating avatars randomly scattered of various sizes */}
        <div className="testimonial-floating-avatars" id="testimonial-scattered-faces">
          {floatingClients.map((client, idx) => (
            <div 
              key={idx} 
              className={`client-av ${client.className}`}
              id={`client-avatar-${idx}`}
            >
              <img 
                src={client.src} 
                alt={client.alt} 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
