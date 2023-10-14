import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import NYC from './models/NYC'

const Front = () => {
    const [fadePar, setFadePar] = useState(false);
    const [fadeLatePar, setLateFadePar] = useState(false);
    const [fadeNY, setfadeNY] = useState(false)
    useEffect(() => {
        setTimeout(() => {setFadePar(true)}, 10)
        setTimeout(() => {setLateFadePar(true)}, 3500)
        setTimeout(() => {setfadeNY(true)}, 1000)
    }, [])

  return (
    <div id='section1'>
        <div 
        style={{ position: 'relative' }}
        className={`par`}>
            <div 
            style={{
            position: 'absolute',
            zIndex: 0
            }}
            className={`parr ${fadePar ? 'fade-in' : ''}`}
            id="back">Hi I'm<br />Aaron</div>
            <div 
            style={{
            position: 'absolute',
            zIndex: 0
            }}
            className={`parr ${fadePar ? 'fade-in' : ''}`}
            id="glow">Hi I'm<br />Aaron</div>
            <div 
            style={{
            position: 'absolute',
            zIndex: 3
            }}
            className={`parr ${fadeLatePar ? 'fade-in' : ''}`}
            id="front">Hi I'm<br />Aaron</div>
            <Canvas 
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
            }}
            className={`cancan ${fadeNY ? 'cancanfade' : ''}`}
            shadows
            dpr={[1, 1]}
            camera={{ position: [100, 200, -300], fov: 35 }}>
                <NYC />
            </Canvas>
        </div>
    </div>
  );
};

export default Front;