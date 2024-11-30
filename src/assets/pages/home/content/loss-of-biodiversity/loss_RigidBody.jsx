import { RigidBody } from "@react-three/rapier";
import { useGLTF, OrbitControls, Html, Text } from "@react-three/drei";
import { useRef } from "react";

// Componente para cargar el modelo del conejo
const Rabbit = ({ position }) => {
  const { scene } = useGLTF("/modelo3D/conejo.glb");
  return (
    <RigidBody type="dynamic" colliders="cuboid" position={position}>
      <primitive object={scene} scale={0.5} />
    </RigidBody>
  );
};

// Componente para un árbol
const Tree = ({ position }) => {
  const rbTreeRef = useRef(null);

  const handleTreeClick = () => {
    rbTreeRef.current?.applyImpulse({ x: 5, y: 0, z: 0 }, true);
  };

  return (
    <RigidBody
      ref={rbTreeRef}
      type="dynamic"
      colliders="cuboid"
      position={position}
    >
      <group onClick={handleTreeClick}>
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
          <meshStandardMaterial color={"brown"} />
        </mesh>
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </RigidBody>
  );
};

// Suelo degradado
const Floor = ({ position }) => {
  return (
    <RigidBody type="fixed" friction={2}>
      <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>
    </RigidBody>
  );
};

// Bosque y conejos en conjunto
const ForestAndAnimals = () => {
  const elements = [];

  // Añadir árboles
  for (let x = -5; x <= 5; x += 2) {
    for (let z = -5; z <= 5; z += 2) {
      elements.push(<Tree key={`tree-${x}-${z}`} position={[x, 0, z]} />);
    }
  }

  // Generar conejos en posiciones aleatorias
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * 10 - 5;
    const z = Math.random() * 10 - 5;
    elements.push(<Rabbit key={`rabbit-${i}`} position={[x, 0.5, z]} />);
  }

  return <>{elements}</>;
};

// Escena completa
const BiodiversityLossScene = () => {
  return (
    <>
      {/* Configuración del fondo grisáceo */}
      <color attach="background" args={["#B0B0B0"]} /> {/* Fondo gris */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Floor position={[0, -0.1, 0]} />
      <ForestAndAnimals />
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={5}
        maxDistance={30}
      />
      {/* Texto 3D */}
      <Text
        position={[-8, 5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Pérdida de Biodiversidad
      </Text>

      {/* Texto 2D */}
      <Html position={[0, 7, 0]} style={{ color: "white", textAlign: "center" }}>
        <h1 style={{ fontSize: "24px" }}>¡Protege Nuestro Planeta!</h1>
        <p>La biodiversidad está en riesgo. Ayúdanos a salvarla.</p>
      </Html>
    </>
  );
};

export default BiodiversityLossScene;
