import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showOh, setShowOh] = useState(false);
  const [aDiv, setA] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const otherDivs = ['Visual Alchemist', 'Tech Tinkerer', 'Virtual Disruptor', 'Urban Explorer', 'Sunset Chaser'];
  const aRef = useRef();
  const softRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        if (entry.target === softRef.current) {
          setTimeout(setFadeIn(true), 3000)
          setTimeout(setShowOh(true), 5000)
        } else if (entry.target === aRef.current) {
          setA(true);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (aRef.current) {
      observer.observe(aRef.current);
    }
    if (softRef.current) {
      observer.observe(softRef.current);
    }

    return () => {
      if (aRef.current) {
        observer.unobserve(aRef.current);
      }
      if (softRef.current) {
        observer.unobserve(softRef.current);
      }
    };
  }, []);

  const updateDiv = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % otherDivs.length);
  };

  useEffect(() => {
    const loopTimer = setInterval(updateDiv, 2000);
    return () => {
      clearInterval(loopTimer);
    };
  }, []);

  return (
    <div id="section2">
      <div style={{ position: 'relative' }} className="par">
        <div
          ref={softRef}
          style={{ position: 'absolute' }}
          className={`soft ${fadeIn ? 'fade-in' : ''}`}>
          Software Engineer
        </div>
          <div className={`oh ${showOh ? 'fade-in' : ''}`}>
            {otherDivs.map((text, index) => (
              <div
                key={index}
                style={{ position: 'absolute', opacity: index === currentIndex ? 1 : 0, transition: 'opacity 1s' }}
                className={`other ${aDiv ? 'fade-in' : ''}`}
              >
                {text}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default About;