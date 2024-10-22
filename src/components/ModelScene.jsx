import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

const EarthModel = () => {
  // Cargar el modelo GLB
  const { scene } = useGLTF('/models-3d/earth.glb');

  // Cargar las texturas PBR
  const [aoMap, map, displacementMap, normalMap, roughnessMap] = useTexture([
    '/materials/patterned_brick_floor_ao_1k.jpg',
    '/materials/patterned_brick_floor_diff_1k.jpg',
    '/materials/patterned_brick_floor_disp_1k.png',
    '/materials/patterned_brick_floor_nor_gl_1k.jpg',
    '/materials/patterned_brick_floor_rough_1k.jpg',
  ]);

  // Aplicar las texturas al modelo
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.aoMap = aoMap;
      child.material.map = map;
      child.material.displacementMap = displacementMap;
      child.material.normalMap = normalMap;
      child.material.roughnessMap = roughnessMap;
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={scene} scale={1.5} />;
};

const ModelScene = () => {
  return (
    <Canvas style={{ height: '100vh' }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={-0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={true} />
      <EarthModel />
    </Canvas>
  );
};

export default ModelScene;
