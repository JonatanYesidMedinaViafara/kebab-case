import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";
import { OrbitControls, Text, Html } from "@react-three/drei";

// Componente para los árboles
const Tree = (props) => {
  const rbTreeRef = useRef(null);

  const handleTreeClick = useCallback(() => {
    // Aplicar una fuerza para que el árbol caiga, simulando la deforestación
    rbTreeRef.current.applyImpulse({ x: 5, y: 0, z: 0 }, true);
  }, []);

  return (
    <RigidBody
      ref={rbTreeRef}
      type="dynamic"
      colliders="cuboid"
      position={props.position}
    >
      <group onClick={handleTreeClick}>
        {/* Tronco del árbol */}
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
          <meshStandardMaterial color={"brown"} />
        </mesh>
        {/* Follaje del árbol */}
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </RigidBody>
  );
};

// Bosque con múltiples árboles
const Forest = () => {
  const trees = [];
  for (let x = -5; x <= 5; x += 2) {
    for (let z = -5; z <= 5; z += 2) {
      trees.push(<Tree key={`${x}-${z}`} position={[x, 0, z]} />);
    }
  }

  return <>{trees}</>;
};

// Suelo
const Floor = (props) => {
  return (
    <RigidBody name="rbFloor" friction={2} type="fixed">
      <mesh {...props}>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </RigidBody>
  );
};

// Escena completa
const ForestScene = () => {
  return (
    <>
      {/* Fondo azul celeste */}
      <color attach="background" args={["#87CEEB"]} /> {/* Azul cielo */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* Suelo */}
      <Floor position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} />

      {/* Bosque */}
      <Forest />

      {/* Texto 3D */}
      <Text
        position={[-5, 5, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Bienvenido al Bosque
      </Text>

      {/* Texto 2D */}
      <Html position={[0, 7, 0]} style={{ color: "black", textAlign: "center" }}>
        <h1 style={{ fontSize: "24px" }}>Protege nuestros árboles</h1>
        <p style={{ fontSize: "16px" }}>¡Haz clic en un árbol para interactuar!</p>
      </Html>

      {/* Controles de cámara */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.1}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={5}
        maxDistance={30}
      />
    </>
  );
};

export default ForestScene;
