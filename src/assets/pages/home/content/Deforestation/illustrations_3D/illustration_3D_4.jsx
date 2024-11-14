import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Billboard, Text } from '@react-three/drei';


// Componente Tree (Árbol joven para reforestación)
const YoungTree = ({ position }) => {
  return (
    <group position={position}>
      {/* Tronco */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Hojas */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshStandardMaterial color="#FFFFFF" />

      </mesh>
    </group>
  );
};

// Componente para Reforestación y Forestación
const ReforestationArea = ({ position }) => {
  const trees = [];
  for (let i = 0; i < 20; i++) {
    const x = position[0] + Math.random() * 10 - 5;
    const z = position[2] + Math.random() * 10 - 5;
    trees.push(<YoungTree key={i} position={[x, 0, z]} />);
  }
  return (
    <group>
      {trees}

  {/* <Billboard position={[position[0], 2, position[2]]}>
        <Text fontSize={1} color="black">
          Reforestación
        </Text>
      </Billboard>*/}
      
    </group>
  );
};

// Componente para Conservación y Manejo Sostenible
const ProtectedArea = ({ position }) => {
  return (
    <group position={position}>
      {/* Señalización de área protegida */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.1, 2, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>

    {/* <Billboard position={[0, 3, 0]}>
        <Text fontSize={1} color="white">
          Área Protegida
        </Text>
      </Billboard> */}

    </group>
  );
};

// Componente para Agricultura Sostenible
const SustainableFarm = ({ position }) => {
  return (
    <group position={position}>
      {/* Campo de agroforestería */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#7CFC00" />
      </mesh>
      {/* Árboles intercalados */}
      {Array.from({ length: 10 }).map((_, i) => (
        <YoungTree
          key={i}
          position={[
            position[0] + Math.random() * 10 - 5,
            0,
            position[2] + Math.random() * 10 - 5,
          ]}
        />
      ))}
    {/* <Billboard position={[0, 2, 0]}>
        <Text fontSize={1} color="black">
          Agricultura Sostenible
        </Text>
      </Billboard>*/}
    </group>
  );
};

// Componente para Protección de Áreas Naturales
const NaturalReserve = ({ position }) => {
  return (
    <group position={position}>
      {/* Señalización de parque nacional */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.1, 2, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <planeGeometry args={[2, 1]} />
        <meshStandardMaterial color="#006400" />
      </mesh>
     {/* <Billboard position={[0, 3, 0]}>
        <Text fontSize={1} color="white">
          Parque Nacional
        </Text>
      </Billboard>*/}
    </group>
  );
};

// Componente para Productos Sostenibles
const SustainableMarket = ({ position }) => {
  return (
    <group position={position}>
      {/* Edificio del mercado */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="#D2B48C" />
      </mesh>
      {/* Letrero */}
    {/*  <Billboard position={[0, 3, 0]}>
        <Text fontSize={1} color="black">
          Productos Sostenibles
        </Text>
      </Billboard>*/}
    </group>
  );
};

// Componente para Fortalecimiento de Leyes
const GovernmentBuilding = ({ position }) => {
  return (
    <group position={position}>
      {/* Edificio gubernamental */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[5, 4, 5]} />
        <meshStandardMaterial color="#708090" />
      </mesh>
      {/* Letrero */}
     {/* <Billboard position={[0, 5, 0]}>
        <Text fontSize={1} color="white">
          Legislación Ambiental
        </Text>
      </Billboard>*/}
    </group>
  );
};

// Componente principal de la escena de soluciones
const SolutionsScene = () => {
  return (
    <Canvas
      camera={{ position: [200, 10, 50], fov: 60 }}
      style={{ background: 'linear-gradient(to top, #87CEEB, #FFFFFF)' }}
    >
      {/* Iluminación */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 10]} intensity={1} />

      {/* Controles */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={5}
        maxDistance={30}
        />
      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#98FB98" />
      </mesh>

      {/* Reforestación */}
      <ReforestationArea position={[-30, 0, -30]} />

      {/* Conservación y manejo sostenible */}
      <ProtectedArea position={[30, 0, -30]} />

      {/* Agricultura sostenible */}
      <SustainableFarm position={[-30, 0, 30]} />

      {/* Protección de áreas naturales */}
      <NaturalReserve position={[30, 0, 30]} />

      {/* Productos sostenibles */}
      <SustainableMarket position={[0, 0, 0]} />

      {/* Legislación ambiental */}
      <GovernmentBuilding position={[0, 0, -50]} />
    </Canvas>
  );
};

export default SolutionsScene;
