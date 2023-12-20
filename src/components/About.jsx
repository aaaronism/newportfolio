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

//   const mouseOver = (event) => {
//     event.target.style.opacity = '1'
//   }

//   const mouseOut = (event) => {
//     event.target.style.opacity = '0'
//   }

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
            setFadeIn(true)}, 500)
          setTimeout(() => {
            setShowOh(true)}, 3000)
          setA(true);
          setTimeout(() => {
            setshowTech(true)}, 4500)
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

  const toggleHoverClass = (event, isHovering) => {
    const aElement = event.target.nextElementSibling; // Next sibling is the <a> element

    if (aElement) {
      if (isHovering) {
        aElement.classList.add('hovered');
      } else {
        aElement.classList.remove('hovered');
      }
    }
  };

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
            <div className='te'>
                <img src="./html.png" 
                // onMouseOver={mouseOver} onMouseOut={mouseOut}
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)} 
                style={{ height: '50px', width: '50px' }}/>
                <a>HTML</a>
            </div>
            <div className='te'>
                <img src="./css.png" 
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)} 
                style={{ height: '52px', width: '55px' }}/>
                <a>CSS</a>
            </div>
            <div className='te'>
                <img src="./javascript.svg" 
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)}                 
                style={{ height: '50px', width: '50px' }}/>
                <a>JavaScript</a>
            </div>
            <div className='te'>
                <img src="./python.png" 
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)}                 
                style={{ height: '53px', width: '50px' }}/>
                <a>Python</a>
            </div>
            <div className='te'>
                <img src="./sql.png" 
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)}                 
                style={{ height: '50px', width: '40px' }}/>
                <a>SQL</a>
            </div>
            <div className='te'>
                <img src="./react.png" 
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)}                 
                style={{ height: '50px', width: '60px' }}/>
                <a>React</a>
            </div>
            <div className='te'>
                <img src="./three.png" 
                onMouseEnter={(e) => toggleHoverClass(e, true)}
                onMouseLeave={(e) => toggleHoverClass(e, false)}                 
                style={{ height: '50px', width: '50px' }}/>
                <a>Three JS</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;