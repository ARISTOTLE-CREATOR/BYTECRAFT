import React from 'react';

export default function Footer() {
  const companyLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Studio', href: '#studio' },
    { label: 'Service', href: '#services' },
    { label: 'Blog', href: '#' }
  ];

  const policyLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Explore', href: '#' },
    { label: 'Accessibility', href: '#' }
  ];

  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
    { label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="global-footer" id="faqs">
      <div className="container">
        <div className="footer-top-grid" id="footer-columns-grid">
          
          <div className="footer-col" id="footer-col-1">
            <h4>Company</h4>
            <ul className="footer-links-list" id="footer-list-1">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col" id="footer-col-2">
            <h4>Terms & Policies</h4>
            <ul className="footer-links-list" id="footer-list-2">
              {policyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col" id="footer-col-3">
            <h4>Follow Us</h4>
            <ul className="footer-links-list" id="footer-list-3">
              {socialLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col" id="footer-col-4">
            <h4>Office Location</h4>
            <ul className="contact-info-list" id="footer-list-4">
              <li>Hyderabad, Telangana 500081<br />Cyber Towers, HITEC City</li>
              <li>(+91) 98765 43210</li>
              <li><a href="mailto:hello@bytecraft.in" style={{ textDecoration: 'underline' }}>info@bytecraft.com</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom-row" id="footer-info-bar">
          <div id="footer-copyright">
            &copy; 2026 ByteCraft. All rights reserved.
          </div>
          <div id="footer-credits">
            Designed for pixel perfection &amp; responsive modern browsers.
          </div>
        </div>
      </div>
    </footer>
  );
}
