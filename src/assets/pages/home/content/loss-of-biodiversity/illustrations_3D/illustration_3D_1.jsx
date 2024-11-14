import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const BiodiversityScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 20, 50], fov: 60 }}
      style={{ background: 'linear-gradient(to top, #87CEEB, #FFFFFF)' }}
    >
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1} />

      {/* Controles de órbita */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={20}
        maxDistance={100}
      />

      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>

      {/* Ecosistemas */}
      <Forest position={[-50, 0, 0]} />
      <Ocean position={[50, 0, 0]} />
      <Atmosphere position={[0, 20, 0]} />
      <Ground position={[0, -1, 0]} />
    </Canvas>
  );
};

export default BiodiversityScene;

const Forest = ({ position }) => {
  return (
    <group position={position}>
      {/* Árboles */}
      <Tree position={[0, 0, 0]} />
      <Tree position={[5, 0, -5]} />
      <Tree position={[-5, 0, 5]} />

      {/* Flores */}
      <Flower position={[2, 0, 2]} />
      <Flower position={[-2, 0, -2]} />

      {/* Animales */}
      <Animal position={[0, 0, 5]} />

      {/* Abejas */}
      <Bee />
    </group>
  );
};

const Tree = ({ position }) => {
  return (
    <group position={position}>
      {/* Tronco */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Copa */}
      <mesh position={[0, 3, 0]}>
        <coneGeometry args={[2, 4, 32]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
};

const Flower = ({ position }) => {
  return (
    <group position={position}>
      {/* Tallo */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color="#006400" />
      </mesh>
      {/* Pétalos */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FF69B4" />
      </mesh>
    </group>
  );
};

const Bee = () => {
  const beeRef = useRef();
  const angleRef = useRef(0);

  useFrame(() => {
    if (beeRef.current) {
      angleRef.current += 0.02;
      beeRef.current.position.x = Math.cos(angleRef.current) * 5;
      beeRef.current.position.z = Math.sin(angleRef.current) * 5;
      beeRef.current.position.y = 2 + Math.sin(angleRef.current * 2);
    }
  });

  return (
    <mesh ref={beeRef} position={[0, 2, 0]}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="#FFD700" />
    </mesh>
  );
};

const Animal = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 2]} />
      <meshStandardMaterial color="#A0522D" />
    </mesh>
  );
};

const Ocean = ({ position }) => {
  return (
    <group position={position}>
      {/* Agua */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1E90FF" opacity={0.7} transparent />
      </mesh>

      {/* Peces */}
      <Fish />
    </group>
  );
};

const Fish = () => {
  const fishRef = useRef();
  const angleRef = useRef(0);

  useFrame(() => {
    if (fishRef.current) {
      angleRef.current += 0.02;
      fishRef.current.position.x = Math.cos(angleRef.current) * 10;
      fishRef.current.position.z = Math.sin(angleRef.current) * 10;
      fishRef.current.position.y = -1;
    }
  });

  return (
    <mesh ref={fishRef} position={[0, -1, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FF6347" />
    </mesh>
  );
};

const Atmosphere = ({ position }) => {
  return (
    <group position={position}>
      {/* Nubes */}
      <Cloud position={[0, 10, 0]} />
      <Cloud position={[-10, 12, -5]} />
      <Cloud position={[10, 15, 5]} />
    </group>
  );
};

const Cloud = ({ position }) => {
  const cloudRef = useRef();

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.position.x += 0.01;
      if (cloudRef.current.position.x > 50) {
        cloudRef.current.position.x = -50;
      }
    }
  });

  return (
    <mesh ref={cloudRef} position={position}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color="#FFFFFF" opacity={0.8} transparent />
    </mesh>
  );
};

const Ground = ({ position }) => {
  return (
    <group position={position}>
      {/* Hongos */}
      <Fungus position={[-5, 0, -5]} />
      <Fungus position={[5, 0, 5]} />

      {/* Hojas cayendo */}
      <Leaf />
    </group>
  );
};

const Fungus = ({ position }) => {
  return (
    <group position={position}>
      {/* Tallo */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Sombrero */}
      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="#A52A2A" />
      </mesh>
    </group>
  );
};

const Leaf = () => {
  const leafRef = useRef();
  const yPositionRef = useRef(10);

  useFrame(() => {
    if (leafRef.current) {
      yPositionRef.current -= 0.02;
      if (yPositionRef.current < 0) {
        yPositionRef.current = 10;
      }
      leafRef.current.position.y = yPositionRef.current;
    }
  });

  return (
    <mesh ref={leafRef} position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[0.5, 0.5]} />
      <meshStandardMaterial color="#8B4513" side={2} />
    </mesh>
  );
};
