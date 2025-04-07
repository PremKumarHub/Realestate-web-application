// src/components/GoToTop.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './GoToTop.css';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className="go-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  );
};

export default GoToTop;
