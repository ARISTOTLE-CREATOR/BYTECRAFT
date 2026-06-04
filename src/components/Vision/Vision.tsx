import React from 'react';

export default function Vision() {
  return (
    <section className="vision" id="studio">
      <div className="container vision-row">
        <div className="vision-content" id="vision-text-col">
          <span className="section-label" id="vision-label">
            Our Studio
          </span>
          <h2 id="vision-heading">
            <span className="highlight-underline">Tomorrow</span> should be better than <span className="highlight-pill green">today</span>
          </h2>
          <p id="vision-description-1">
            We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe. We do not stay inside boundaries.
          </p>
          <p id="vision-description-2" style={{ marginTop: '-8px', color: 'var(--secondary-color)' }}>
            By working cross-functionally and questioning structural norms, we release insights that redefine how brand, technology, and people interact.
          </p>
          <div>
            <a href="#services" className="read-more-link" id="vision-read-more">
              Read more 
              <svg 
                width="20" 
                height="12" 
                viewBox="0 0 24 12" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" transform="scale(1, 0.5) translate(0, 6)"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="vision-image-wrapper" id="vision-img-col">
          {/* Parallelogram backdrop decoration */}
          <div className="vision-backdrop" id="vision-img-backdrop" />
          
          <div className="vision-img-circle" id="vision-img-circle-container">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
              alt="Team discussing project in light-filled office space" 
              referrerPolicy="no-referrer"
              id="vision-workspace-img"
            />
          </div>
          
          {/* Floating small blob shapes for added pixel-perfect fidelity */}
          <div 
            className="deco-shape" 
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'var(--accent-yellow)', 
              borderRadius: '50%', 
              top: '10%', 
              left: '5%' 
            }} 
            id="vision-deco-shape-1"
          />
        </div>
      </div>
    </section>
  );
}
