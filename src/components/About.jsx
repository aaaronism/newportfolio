import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showOh, setShowOh] = useState(false);
  const [showTech, setshowTech] = useState(false);
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
          setTimeout(() => {
            setFadeIn(true)}, 1000)
          setTimeout(() => {
            setShowOh(true)}, 2500)
          setA(true);
          setTimeout(() => {
            setshowTech(true)}, 4000)
        } else if (entry.target === aRef.current) {
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
      <div style={{ position: 'relative' }} className="title">
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
          <div 
          className={`techdiv ${showTech ? 'fade-in' : ''}`}
          id="tech">
            <img src="./html.png" style={{ height: '50px', width: '50px' }}/>
            <img src="./css.png" style={{ height: '52px', width: '55px' }}/>
            <img src="./javascript.svg" style={{ height: '50px', width: '50px' }}/>
            <img src="./python.png" style={{ height: '53px', width: '53px' }}/>
            <img src="./sql.png" style={{ height: '50px', width: '40px' }}/>
            <img src="./react.png" style={{ height: '50px', width: '60px' }}/>
            <img src="./three.png" style={{ height: '50px', width: '50px' }}/>
          </div>
      </div>
    </div>
  );
};

export default About;