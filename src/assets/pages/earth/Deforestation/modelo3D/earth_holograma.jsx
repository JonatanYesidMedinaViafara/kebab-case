import React, { Suspense } from 'react';
import { Canvas, extend, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Extender THREE si necesitas añadir clases personalizadas o métodos
extend(THREE);

function EarthHologram() {
  const gltf = useLoader(GLTFLoader, '/modelo3D/earth_hologram.glb');

  return <primitive object={gltf.scene} scale={2} />;
}

export default function Biodiversity() {
  return (
    <Canvas>
      <ambientLight intensity={2000} />
      <spotLight position={[100, 100, 100]} angle={0.15} penumbra={20} />
      <Suspense fallback={null}>
        <EarthHologram />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
