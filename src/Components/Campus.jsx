import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useControls } from 'leva';
import { OrbitControls, useProgress, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

const Loader = () => {
    const { progress } = useProgress();
    return <Html center style={{color: "black"}}>{progress} % loaded</Html> ;
};


function Model(){
    const draco = new DRACOLoader();
    draco.setDecoderConfig({ type: 'js' });
    draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
      const gltfModel = useLoader(GLTFLoader, '/campus.glb', loader => {
        loader.setDRACOLoader(draco);
      });
    const modelRef = useRef();
    //to add leva controls
    const { position, rotation, scale } = useControls('Model', {
        position: { value: [0, 0, 0], step: 1 },
        rotation: { value: [0, 0, 0], step: 1 },
        scale: { value: [1, 1, 1], step: 1 },
    });
    return (
        <primitive
            ref={modelRef}
            object={gltfModel.scene}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    );
}

export default function Campus() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            
            <OrbitControls />

            <Suspense fallback={<Loader />}>
            <Model/>
            </Suspense>
        </Canvas>
    </div>
  )
}
