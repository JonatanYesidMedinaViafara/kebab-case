import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TreesComponent from '../modelo3D/earth_holograma';

const Tree = ({ position, isCutDown, onCutDown }) => {
  const trunkRef = useRef();
  const [falling, setFalling] = useState(false);

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
            <cylinderGeometry args={[0.2, 0.5, 2, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Copa */}
          <mesh position={[0, 1.9, 0]}>
            <coneGeometry args={[1, 2, 32]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>
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

const Forest = () => {
  const [trees, setTrees] = useState(() => {
    const treesArray = [];
    for (let i = 1; i <= 200; i++) {
      const position = [
        Math.random() * 60 - 30, // x entre -10 y 10
        0, // y es 0
        Math.random() * 80 -30, // z entre -10 y 10
      ];
      const isCutDown = false; // Inicialmente, ningún árbol está cortado
      treesArray.push({ id: i, position, isCutDown });
    }
    return treesArray;
  });

  const cutDownIndexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrees(prevTrees => {
        if (cutDownIndexRef.current < prevTrees.length) {
          const updatedTrees = prevTrees.map(tree =>
            tree.id === prevTrees[cutDownIndexRef.current].id
              ? { ...tree, isCutDown: true }
              : tree
          );
          cutDownIndexRef.current++;
          return updatedTrees;
        } else {
          clearInterval(interval);
          return prevTrees;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleCutDown = id => {
    // No es necesario actualizar el estado aquí porque ya se hizo en el intervalo
  };

  return (
    <>
      {trees.map(tree => (
        <Tree
          key={tree.id}
          position={tree.position}
          isCutDown={tree.isCutDown}
          onCutDown={() => handleCutDown(tree.id)}
        />
      ))}
    </>
  );
};

const AnimationCanvas = () => {
  return (
    <Canvas
      camera={{ position: [-10, 10, -10], fov: 60 }}
      style={{ background: 'linear-gradient(to top, #FF7E5F, #FEB47B)' }} // Fondo de atardecer
      // Añadimos neblina para mejorar el efecto de atardecer
      fog={{ color: '#FF7E5F', near: 10, far: 10 }}
    >
      {/* Iluminación */}
      <ambientLight intensity={0.3} color="#FFD1DC" /> {/* Luz ambiental cálida */}
      <directionalLight
        position={[-10, 10, -10]} // Posición baja para simular el sol poniente
        intensity={20}
        color="#FF4500" // Color cálido intenso
      />
      
      {/* Controles de órbita */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={5}
        maxDistance={30}
      />

      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#A0522D" /> {/* Color tierra cálido */}
      </mesh>

      {/* Bosque */}
      <Forest />
      <TreesComponent />
    </Canvas>
  );
};

export default AnimationCanvas;