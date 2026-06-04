import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter" id="contact">
      <div className="container newsletter-content">
        <h2 id="newsletter-heading">
          Subscribe to our <span className="highlight-underline">newsletter</span>
        </h2>
        
        <p className="newsletter-subtext" id="newsletter-desc">
          To make your stay special and even more memorable. Get weekly creative updates about technology and design.
        </p>

        {submitted ? (
          <div 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.4)', 
              color: 'var(--primary-color)', 
              padding: '16px 36px', 
              borderRadius: '9999px',
              fontWeight: 500,
              fontSize: '1.1rem',
              border: '1px solid rgba(0,0,0,0.04)'
            }} 
            id="newsletter-success-msg"
          >
            ✓ Welcome to ByteCraft! Check your inbox soon.
          </div>
        ) : (
          <form className="subscription-form" onSubmit={handleSubmit} id="newsletter-sub-form">
            <input 
              type="email" 
              className="subscription-input" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for subscription"
              id="newsletter-email-input"
            />
            <button type="submit" className="subscription-button" id="newsletter-submit-btn">
              Subscribe Now
            </button>
          </form>
        )}

        {/* Decorative elements */}
        <div className="deco-shape deco-semicircle" style={{ top: '15%', right: '2%', transform: 'rotate(-45deg)' }} id="newsletter-deco-1" />
        <div className="deco-shape" style={{ width: '30px', height: '30px', backgroundColor: 'var(--accent-pink)', borderRadius: '50%', bottom: '15%', left: '4%' }} id="newsletter-deco-2" />
      </div>
    </section>
  );
}
