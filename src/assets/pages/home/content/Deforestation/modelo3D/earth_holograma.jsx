// TreesComponent.jsx
import React from 'react';
import { OrbitControls, Html } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function TreesComponent() {
  const model = useLoader(GLTFLoader, '/src/assets/pages/Home/content/deforestation/modelo3D/trees.gltf');

  return (
    <>
      {/* Órbita para controlar la rotación y visualización */}
      <OrbitControls />

      {/* Modelo 3D */}
      <primitive object={model.scene} />

      {/* Texto en HTML 3D sobre el modelo 
      <Html position={[0, 2, 0]}>
        <div style={{ color: 'white', background: 'rgba(0, 0, 0, 0.7)', padding: '10px', borderRadius: '5px' }}>
          Árbol 3D
        </div>
      </Html>*/}
    </>
  );
}

export default TreesComponent;
