import React from 'react';

export default function Hero() {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face', alt: 'Team strategist', className: 'av-1' },
    { src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face', alt: 'Creative Director', className: 'av-2' },
    { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face', alt: 'Lead Researcher', className: 'av-3' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face', alt: 'UI Designer', className: 'av-4' },
    { src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&h=200&fit=crop&crop=face', alt: 'Backend Developer', className: 'av-5' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face', alt: 'Senior Product Manager', className: 'av-6' },
    { src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&h=200&fit=crop&crop=face', alt: 'Data Architect', className: 'av-7' }
  ];

  return (
    <section className="hero" id="home">
      <div className="container hero-row">
        <div className="hero-content" id="hero-left-content">
          <h1 id="hero-main-heading">
            Crafting the <span className="highlight-underline">Future,</span> One <span className="highlight-pill pink">Byte</span> At a <span className="highlight-pill green">Time</span> 
          </h1>
          <p className="hero-description" id="hero-desc-para">
            We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
          </p>
          <div>
            <a href="#services" className="btn-primary" id="hero-cta-btn">
              Explore Our Services
            </a>
          </div>
        </div>

        <div className="hero-team-graphics" id="hero-right-graphics">
          {avatars.map((avatar, idx) => (
            <div 
              key={idx} 
              className={`floating-avatar ${avatar.className}`} 
              style={{ zIndex: 5 + idx }}
              id={`hero-av-${idx}`}
            >
              <img 
                src={avatar.src} 
                alt={avatar.alt} 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          
          {/* Decorative shapes */}
          <div className="deco-shape deco-semicircle" style={{ top: '5%', right: '10%', zIndex: 1 }} id="hero-deco-1" />
        </div>
      </div>
    </section>
  );
}
