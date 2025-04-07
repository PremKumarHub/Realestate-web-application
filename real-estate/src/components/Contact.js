// src/components/Contact.js
import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out anytime.</p>
      
      <div className="contact-cards">
        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h4>Visit Us</h4>
          <p>123 Dream Street, Chennai, TN - 600001</p>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h4>Email Us</h4>
          <p>support@realestate.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
