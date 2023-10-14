import React from "react";

const Subway = (props) => {
    const train = useGLTF("./Subway/scene.gltf");
    
    return(
        <group>
        <mesh>
            <hemisphereLight intensity={2} />
            <pointLight intensity={50} />
            <primitive
            object={train.scene}
            scale={2}
            position={[0, -5.25, -2.3]}
            rotation={[0.05, 1.07, -0.07]}
            />
        </mesh>
        </group>
    )
}

export default Subway