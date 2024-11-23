import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ClimateChange = () => {
  // Representación del cambio climático: Un glaciar derritiéndose
  const glacierRef = useRef();
  const [melted, setMelted] = useState(false);

  useEffect(() => {
    // Simula el derretimiento del glaciar
    let timeout;
    if (!melted) {
      timeout = setTimeout(() => setMelted(true), 5000); // Se derrite después de 5 segundos
    }
    return () => clearTimeout(timeout);
  }, [melted]);

  useEffect(() => {
    if (melted && glacierRef.current) {
      glacierRef.current.scale.y = 0.1; // Reduce la altura del glaciar
    }
  }, [melted]);

  return (
    <group position={[-15, 0, 0]}>
      {/* Glaciar */}
      <mesh ref={glacierRef} position={[0, 1, 0]}>
        <boxGeometry args={[5, 2, 5]} />
        <meshStandardMaterial color="#ADD8E6" />
      </mesh>
      {/* Agua (hielo derretido) */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1E90FF" opacity={0.6} transparent />
      </mesh>
      {/* Texto */}
      <Text position={[0, 4, 0]} fontSize={1} color="#FFFFFF">
        Cambio Climático
      </Text>
    </group>
  );
};

const Pollution = () => {
  // Representación de la contaminación: Fábricas con humo animado
  const smokeRef = useRef();
  useFrame(() => {
    if (smokeRef.current) {
      smokeRef.current.position.y += 0.01;
      if (smokeRef.current.position.y > 7) {
        smokeRef.current.position.y = 5;
      }
    }
  });

  return (
    <group position={[-5, 0, 0]}>
      {/* Fábrica */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[4, 3, 4]} />
        <meshStandardMaterial color="#808080" />
      </mesh>
      {/* Chimenea */}
      <mesh position={[0, 3, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color="#696969" />
      </mesh>
      {/* Humo */}
      <mesh ref={smokeRef} position={[0, 5, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#A9A9A9" opacity={0.7} transparent />
      </mesh>
      {/* Texto */}
      <Text position={[0, 7, 0]} fontSize={1} color="#FFFFFF">
        Contaminación
      </Text>
    </group>
  );
};

const Overexploitation = () => {
  // Representación de la sobreexplotación: Un barco pesquero con redes animadas
  const netRef = useRef();
  const [lowering, setLowering] = useState(true);

  useFrame(() => {
    if (netRef.current) {
      if (lowering) {
        netRef.current.position.y -= 0.01;
        if (netRef.current.position.y < -1) {
          setLowering(false);
        }
      } else {
        netRef.current.position.y += 0.01;
        if (netRef.current.position.y > -0.5) {
          setLowering(true);
        }
      }
    }
  });

  return (
    <group position={[5, 0, 0]}>
      {/* Océano */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1E90FF" opacity={0.6} transparent />
      </mesh>
      {/* Barco */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 1, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Redes */}
      <mesh ref={netRef} position={[0, -0.5, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#696969" wireframe />
      </mesh>
      {/* Texto */}
      <Text position={[0, 2, 0]} fontSize={1} color="#FFFFFF">
        Sobreexplotación
      </Text>
    </group>
  );
};

const Deforestation = () => {
  // Representación de la deforestación: Árboles talados uno por uno
  const [trees, setTrees] = useState([
    { id: 1, position: [0, 0, 0], isCutDown: false },
    { id: 2, position: [2, 0, 0], isCutDown: false },
    { id: 3, position: [-2, 0, 0], isCutDown: false },
  ]);

  useEffect(() => {
    let cutDownIndex = 0;

    const interval = setInterval(() => {
      if (cutDownIndex < trees.length) {
        setTrees(prevTrees =>
          prevTrees.map(tree =>
            tree.id === trees[cutDownIndex].id
              ? { ...tree, isCutDown: true }
              : tree
          )
        );
        cutDownIndex++;
      } else {
        clearInterval(interval);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [trees]);

  return (
    <group position={[15, 0, 0]}>
      {trees.map(tree => (
        <Tree
          key={tree.id}
          position={tree.position}
          isCutDown={tree.isCutDown}
        />
      ))}
      {/* Texto */}
      <Text position={[0, 4, 0]} fontSize={1} color="#FFFFFF">
        Deforestación
      </Text>
    </group>
  );
};

const Tree = ({ position, isCutDown }) => {
  const trunkRef = useRef();
  const [falling, setFalling] = useState(false);

  useEffect(() => {
    if (isCutDown && !falling) {
      setFalling(true);
    }
  }, [isCutDown, falling]);

  useFrame(() => {
    if (falling && trunkRef.current) {
      if (trunkRef.current.rotation.z > -Math.PI / 2) {
        trunkRef.current.rotation.z -= 0.05;
      } else {
        setFalling(false);
      }
    }
  });

  return (
    <>
      {(falling || !isCutDown) && (
        <group position={position} ref={trunkRef}>
          {/* Tronco */}
          <mesh>
            <cylinderGeometry args={[0.2, 0.2, 2, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Copa */}
          <mesh position={[0, 1.5, 0]}>
            <coneGeometry args={[0.5, 1, 32]} />
            <meshStandardMaterial color="#228B22" />
          </mesh>
        </group>
      )}
      {!falling && isCutDown && (
        // Tocón
        <mesh position={[position[0], position[1], position[2]]}>
          <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      )}
    </>
  );
};

const HabitatFragmentation = () => {
  // Representación de la fragmentación del hábitat: Animales intentando cruzar la carretera
  const animalRef = useRef();
  useFrame(() => {
    if (animalRef.current) {
      animalRef.current.position.x += 0.02;
      if (animalRef.current.position.x > 5) {
        animalRef.current.position.x = -5;
      }
    }
  });

  return (
    <group position={[-10, 0, -10]}>
      {/* Terreno izquierdo */}
      <mesh position={[-3, -0.5, 0]}>
        <boxGeometry args={[5, 1, 5]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      {/* Terreno derecho */}
      <mesh position={[3, -0.5, 0]}>
        <boxGeometry args={[5, 1, 5]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      {/* Carretera */}
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.1, 5]} />
        <meshStandardMaterial color="#2F4F4F" />
      </mesh>
      {/* Animal */}
      <mesh ref={animalRef} position={[-5, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      {/* Texto */}
      <Text position={[0, 2, 0]} fontSize={1} color="#FFFFFF">
        Fragmentación del Hábitat
      </Text>
    </group>
  );
};

const InvasiveSpecies = () => {
  // Representación de especies invasoras: La planta invasora creciendo
  const invasivePlantRef = useRef();
  useFrame(() => {
    if (invasivePlantRef.current) {
      if (invasivePlantRef.current.scale.y < 2) {
        invasivePlantRef.current.scale.y += 0.01;
      }
    }
  });

  return (
    <group position={[10, 0, -10]}>
      {/* Planta nativa */}
      <mesh position={[-1, 0.5, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      {/* Planta invasora */}
      <mesh ref={invasivePlantRef} position={[1, 0.5, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial color="#FF4500" />
      </mesh>
      {/* Texto */}
      <Text position={[0, 2, 0]} fontSize={1} color="#FFFFFF">
        Especies Invasoras
      </Text>
    </group>
  );
};

const Scene3 = () => {
  return (
    <Canvas
      camera={{ position: [0, 15, 30], fov: 60 }}
      style={{ background: 'linear-gradient(to top, #87CEEB, #FFFFFF)' }} // Fondo de cielo
    >
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1} />

      {/* Controles de órbita mejorados */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={10}
        maxDistance={50}
      />

      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#808080" />
      </mesh>

      {/* Elementos de la escena */}
      <ClimateChange />
      <Pollution />
      <Overexploitation />
      <Deforestation />
      <HabitatFragmentation />
      <InvasiveSpecies />
    </Canvas>
  );
};

export default Scene3;
