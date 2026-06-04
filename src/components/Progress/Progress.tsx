import React from 'react';

export default function Progress() {
  return (
    <section className="progress" id="progress">
      <div className="container progress-row">
        <div className="progress-image-wrapper" id="progress-img-col">
          {/* Decorative curved SVG line path element connecting shapes */}
          <svg className="progress-curve" viewBox="0 0 440 180" fill="none" xmlns="http://www.w3.org/0000/svg" id="progress-svg-curve">
            <path d="M10 80 Q 110 10, 220 80 T 430 80" stroke="rgba(252, 87, 59, 0.2)" strokeWidth="3" strokeDasharray="6 6" />
          </svg>
          
          <div className="progress-img-circle" id="progress-circle-container">
            <img 
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=600&h=600&fit=crop" 
              alt="Creative workshop collaboration with sticky notes" 
              referrerPolicy="no-referrer"
              id="progress-workspace-img"
            />
          </div>

          {/* Absolute floating shapes for maximum design fidelity */}
          <div className="deco-shape deco-triangle" id="progress-deco-triangle-red" />
          <div className="deco-shape deco-triangle-yellow" id="progress-deco-triangle-yellow" />
          
          {/* Floating pink circle */}
          <div 
            className="deco-shape" 
            style={{ 
              width: '24px', 
              height: '24px', 
              backgroundColor: 'var(--accent-pink)', 
              borderRadius: '50%', 
              bottom: '15%', 
              right: '12%',
              zIndex: 4 
            }} 
            id="progress-pink-circle"
          />
        </div>

        <div className="progress-content" id="progress-text-col">
          <span className="section-label" id="progress-section-label">
            Our Process
          </span>
          <h2 id="progress-heading">
            See how we can help you <span className="highlight-underline">progress</span>
          </h2>
          <p id="progress-para-1">
            We add a layer of fearless insights and action that allows change-makers to accelerate their progress in areas such as brand, design, digital, comms, and social research.
          </p>
          <p id="progress-para-2" style={{ marginTop: '-8px', color: 'var(--secondary-color)' }}>
            Through immersive analysis, tailored frameworks, and agile sprints, we ensure that every strategic vision becomes an actionable, measurable reality.
          </p>
          <div>
            <a href="#services" className="read-more-link" id="progress-read-more">
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
      </div>
    </section>
  );
}
