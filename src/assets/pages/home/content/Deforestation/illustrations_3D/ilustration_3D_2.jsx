import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';

// Componente Tree (Árbol)
const Tree = ({ position, isCutDown, onCutDown, isOnFire }) => {
  const trunkRef = useRef();
  const [falling, setFalling] = useState(false);
  const [fire, setFire] = useState(isOnFire);

  useEffect(() => {
    if (isCutDown && !falling) {
      setFalling(true);
    }
  }, [isCutDown, falling]);

  useFrame(() => {
    if (falling && trunkRef.current) {
      if (trunkRef.current.rotation.x < Math.PI / 5) {
        trunkRef.current.rotation.x += 0.05;
        trunkRef.current.position.y -= 0.02;
      } else {
        setFalling(true);
        onCutDown(true);
      }
    }
  });

  return (
    <>
      {(falling || !isCutDown) && (
        <group position={position} ref={trunkRef}>
          {/* Tronco */}
          <mesh>
            <cylinderGeometry args={[0.2, 0.5, 2, 16]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Copa */}
          <mesh position={[0, 1.9, 0]}>
            <coneGeometry args={[1, 2, 32]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>
          {/* Fuego */}
          {fire && (
            <mesh position={[0, 1, 0]}>
              <sphereGeometry args={[0.5, 8, 8]} />
              <meshBasicMaterial color="orange" />
            </mesh>
          )}
        </group>
      )}
      {!falling && isCutDown && (
        // Tocón
        <mesh position={position}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      )}
    </>
  );
};

// Componente para representar Agricultura Intensiva
const Farmland = ({ position }) => {
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#9ACD32" />
    </mesh>
  );
};

// Componente para representar Ganadería
const Pasture = ({ position }) => {
  return (
    <group position={position}>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#7CFC00" />
      </mesh>
      {/* Animales de ganado (representados como cubos simples) */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
    </group>
  );
};

// Componente para representar Urbanización
const Buildings = ({ position }) => {
  return (
    <group position={position}>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#A9A9A9" />
      </mesh>
      <mesh position={[3, 1.5, 0]}>
        <boxGeometry args={[1, 3, 1]} />
        <meshStandardMaterial color="#808080" />
      </mesh>
    </group>
  );
};

// Componente para representar Minería
const Mine = ({ position }) => {
  return (
    <group position={position}>
      {/* Excavación */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2, 5, 32]} />
        <meshStandardMaterial color="#8B0000" side={THREE.DoubleSide} />
      </mesh>
      {/* Maquinaria (representada simplificadamente) */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </group>
  );
};

// Componente Bosque
const Forest = () => {
  const [trees, setTrees] = useState(() => {
    const treesArray = [];
    for (let i = 1; i <= 100; i++) {
      const position = [
        Math.random() * 60 - 30, // x entre -25 y 25
        0,
        Math.random() * 80 -30, // z entre -25 y 25
      ];
      const isCutDown = false;
      const isOnFire = Math.random() < 0.05; // 5% de probabilidad de estar en llamas
      treesArray.push({ id: i, position, isCutDown, isOnFire });
    }
    return treesArray;
  });

  // Simular tala de árboles
  useEffect(() => {
    const interval = setInterval(() => {
      setTrees(prevTrees => {
        const index = prevTrees.findIndex(tree => !tree.isCutDown);
        if (index !== -1) {
          const updatedTrees = [...prevTrees];
          updatedTrees[index].isCutDown = true;
          return updatedTrees;
        } else {
          clearInterval(interval);
          return prevTrees;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {trees.map(tree => (
        <Tree
          key={tree.id}
          position={tree.position}
          isCutDown={tree.isCutDown}
          isOnFire={tree.isOnFire}
          onCutDown={() => {}}
        />
      ))}
    </>
  );
};

// Componente principal
const DeforestationScene = () => {
  return (
<Canvas
  camera={{ position: [0, 20, 40], fov: 60 }}
  style={{ background: 'linear-gradient(to top, #87CEEB, #FFFFFF)' }}
  fog={{ color: '#A9A9A9', near: 50, far: 150 }}
>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
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
        <meshStandardMaterial color="#228B22" />
      </mesh>

      {/* Bosque */}
      <Forest />

      {/* Agricultura Intensiva */}
      <Farmland position={[30, 0, -30]} />
      <Billboard position={[30, 2, -30]}>
        <Text fontSize={1} color="black">
          Agricultura
        </Text>
      </Billboard>

      {/* Ganadería */}
      <Pasture position={[-30, 0, -30]} />
      <Billboard position={[-30, 2, -30]}>
        <Text fontSize={1} color="black">
          Ganadería
        </Text>
      </Billboard>

      {/* Urbanización */}
      <Buildings position={[30, 0, 30]} />
      <Billboard position={[30, 2, 30]}>
        <Text fontSize={1} color="black">
          Urbanización
        </Text>
      </Billboard>

      {/* Minería */}
      <Mine position={[-30, 0, 30]} />
      <Billboard position={[-30, 2, 30]}>
        <Text fontSize={1} color="black">
          Minería
        </Text>
      </Billboard>
    </Canvas>
  );
};

export default DeforestationScene;
