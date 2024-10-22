import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';

const SectionBox = ({ position, title }) => {
  return (
    <mesh position={position} castShadow>
      {/* Cambiar a un rectángulo 3D con profundidad */}
      <boxGeometry args={[15, 1.5, 1]} />
      <meshStandardMaterial color='red' />
      {/* Texto del título centrado */}
      <Html position={[-5, 0, 1.1]}>
        <div style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', width: '300px' }}>
          {title}
        </div>
      </Html>
    </mesh>
  );
};

const EnvironmentalSections = () => {
  return (
    <Canvas style={{ height: '100vh' }} shadows camera={{ position: [0, 0, 20] }}>
      {/* Luces y sombras */}
      <ambientLight intensity={0.3} />
      <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} castShadow />

      {/* Controles de la cámara */}
      <OrbitControls enableZoom={true} />

      {/* Secciones de problemas medioambientales, alineadas verticalmente */}
      <SectionBox position={[0, 3, 0]} title="Erosión del suelo" />
      <SectionBox position={[0, 1, 0]} title="Pérdida de la biodiversidad" />
      <SectionBox position={[0, -1, 0]} title="Deforestación" />
      <SectionBox position={[0, -3, 0]} title="Residuos peligrosos" />
    </Canvas>
  );
};

export default EnvironmentalSections;
