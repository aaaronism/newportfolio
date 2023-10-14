import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import React, { useEffect, useState, useRef } from 'react';

const NYC = () => {
    const NYC = useGLTF("./NYC/scene.gltf");
    const myMesh = useRef()
    const wobbleAmplitude = 0.05;
    const wobbleFrequency = 1;

    useFrame(({ clock }) => {
        const rotationAngle = Math.sin(clock.elapsedTime * wobbleFrequency) * wobbleAmplitude;

        // Apply rotation and scale to the cube
        myMesh.current.rotation.x = -0.0001 + rotationAngle;
        myMesh.current.rotation.y += 0.005;
        myMesh.current.rotation.z = 0.0001 + rotationAngle;
    });
    

    return (
        <>
            <mesh ref = {myMesh}>
                <hemisphereLight 
                color={'grey'}
                intensity={1.5} />
                <pointLight 
                color={'red'}
                intensity={9000} />
                <primitive
                    object={NYC.scene}
                    scale={10}
                    position={[0, -45.25, -1.3]}
                    rotation={[0.05, 1.07, -0.07]}
                />
            </mesh>
        </>
    );
}

export default NYC;