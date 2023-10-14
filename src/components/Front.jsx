import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import NYC from './models/NYC'

const Front = () => {

  return (
    <div id='section1'>
        <div 
        style={{ position: 'relative' }}
        className="par">
            <div 
            style={{
            position: 'absolute',
            zIndex: 0
            }}
            id="back">Hi I'm<br />Aaron</div>
            <div 
            style={{
            position: 'absolute',
            zIndex: 0
            }}
            id="glow">Hi I'm<br />Aaron</div>
            <div 
            style={{
            position: 'absolute',
            zIndex: 3
            }}
            id="front">Hi I'm<br />Aaron</div>
            <Canvas 
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
            }}
            className="cancan"
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