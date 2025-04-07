// src/components/Services.js
import React from 'react';
import './About.css';
import { FaHome, FaExchangeAlt, FaSearch, FaClipboardCheck } from 'react-icons/fa';

const About = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">What We Offer</h2>
      <div className="services-container">
        <div className="service-card">
          <FaHome className="service-icon" />
          <h3>Buy a Home</h3>
          <p>Find the perfect property with expert guidance.</p>
        </div>
        <div className="service-card">
          <FaExchangeAlt className="service-icon" />
          <h3>Sell Property</h3>
          <p>Sell faster and smarter with our marketing tools.</p>
        </div>
        <div className="service-card">
          <FaSearch className="service-icon" />
          <h3>Property Search</h3>
          <p>Explore listings with powerful filters.</p>
        </div>
        <div className="service-card">
          <FaClipboardCheck className="service-icon" />
          <h3>Consultation</h3>
          <p>Get expert advice before making big decisions.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
