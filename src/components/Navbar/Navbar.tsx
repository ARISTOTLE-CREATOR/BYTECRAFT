import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Studio', href: '#studio' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQs', href: '#faqs' }
  ];

  return (
    <header className="navbar-header" id="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo" id="nav-logo">
          ByteCraft
        </a>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu"
          id="nav-menu-toggle"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links-list">
          {menuItems.map((item, index) => (
            <li key={index} id={`nav-item-${index}`}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
