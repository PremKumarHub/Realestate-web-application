import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <video autoPlay muted loop className="video-bg">
      <source src="/templates/city.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <nav className="navbar">
          <div className="logo">🏠 RealEstate</div>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#latest">Buy</a></li>
            <li><a href="#latest">Rent</a></li>
            <li><a href="#about">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-content">
          <h1>Your Dream Home Awaits</h1>
          <p>Find, buy, and rent properties easily</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
