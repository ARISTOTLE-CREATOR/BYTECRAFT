import React from 'react';

export default function Services() {
  const services = [
    {
      category: 'Office of multiple interest content',
      title: 'Collaborative & partnership',
      hasSticker: false,
      stickerText: ''
    },
    {
      category: 'The hanger US Air force digital experimental',
      title: 'We talk about our weight',
      hasSticker: true,
      stickerText: '01 / NEW'
    },
    {
      category: 'Delta faucet content, social, digital',
      title: 'Piloting digital confidence',
      hasSticker: false,
      stickerText: ''
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header" id="services-section-intro">
          <span className="section-label" id="services-label">
            Capabilities
          </span>
          <h2 id="services-heading">
            What we <span className="highlight-pill green">can</span> offer <span className="highlight-underline">you!</span>
          </h2>
        </div>

        <div className="services-list-container" id="services-items-list-wrap">
          {services.map((service, index) => (
            <div 
              className="service-row-item" 
              key={index}
              id={`service-row-${index}`}
            >
              <div className="service-category" id={`service-cat-${index}`}>
                {service.category}
              </div>
              <div className="service-main-title" id={`service-title-${index}`}>
                {service.title}
              </div>
              
              {service.hasSticker && (
                <div className="service-sticky-sticker" id={`service-sticker-${index}`}>
                  {service.stickerText}
                </div>
              )}

              <div className="service-arrow-wrapper" id={`service-arrow-${index}`}>
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
