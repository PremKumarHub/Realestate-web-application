import React, { useRef, useEffect, useState } from 'react';
import './ScrollSection.css';

const ScrollSection = ({ children, bgColor = "#fff", id }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-section ${isVisible ? 'visible' : ''}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </section>
  );
};

export default ScrollSection;
