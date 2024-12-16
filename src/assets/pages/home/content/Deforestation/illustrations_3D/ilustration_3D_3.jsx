import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";
import { useGLTF, Html, Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CAIDA_AUDIO_URL = "/music/arbol cayendo.mp3";

const Bird = ({ radius = 10, flightHeight = 5, speed = 0.5, verticalAmplitude = 0.3, verticalSpeed = 2, initialPhase = 0 }) => {
  const { scene } = useGLTF("/model3D/pajaroMap.glb");
  const rbBirdRef = useRef(null);
  const birdGroupRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() + initialPhase;

    if (birdGroupRef.current) {
      // Movimiento circular (x, z) y aleteo vertical
      birdGroupRef.current.position.x = Math.sin(time * speed) * radius;
      birdGroupRef.current.position.z = Math.cos(time * speed) * radius;
      birdGroupRef.current.position.y = flightHeight + Math.sin(time * verticalSpeed) * verticalAmplitude;

      // Rotar el pájaro según la dirección del vuelo
      const angle = time * speed;
      birdGroupRef.current.rotation.y = -angle;
    }
  });

  return (
    <RigidBody
      ref={rbBirdRef}
      type="dynamic"
      colliders="cuboid"
      position={[0, flightHeight, 0]}
    >
      <group ref={birdGroupRef}>
        <primitive object={scene} scale={0.5} castShadow receiveShadow />
      </group>
    </RigidBody>
  );
};

const Tree = (props) => {
  const rbTreeRef = useRef(null);

  const handleTreeClick = useCallback(() => {
    // Aplicar la fuerza para que el árbol caiga
    rbTreeRef.current.applyImpulse({ x: 5, y: 0, z: 0 }, true);

    // Reproducir el sonido de caída
    const sound = new Audio(CAIDA_AUDIO_URL);
    sound.play();
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
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
          <meshStandardMaterial color={"brown"} />
        </mesh>
        {/* Follaje del árbol */}
        <mesh position={[0, 2, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </RigidBody>
  );
};

const Forest = () => {
  const trees = [];
  for (let x = -5; x <= 5; x += 2) {
    for (let z = -5; z <= 5; z += 2) {
      trees.push(<Tree key={`${x}-${z}`} position={[x, 0, z]} />);
    }
  }

  return <>{trees}</>;
};

const Floor = (props) => {
  return (
    <RigidBody name="rbFloor" friction={2} type="fixed">
      <mesh {...props} receiveShadow>
        <circleGeometry args={[10, 32]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      {/* Texto 3D encima del suelo (Texto 2D que parece 3D) */}
      <Text
        position={[0, 0.5, 8]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Suelo
      </Text>
    </RigidBody>
  );
};

const ForestScene = () => {
  return (
    <>
      <Floor position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <Forest />

      {/* Tres pájaros con parámetros diferentes */}
      <Bird radius={10} flightHeight={5} speed={0.5} verticalAmplitude={0.3} verticalSpeed={2} initialPhase={0} />
      <Bird radius={12} flightHeight={6} speed={0.6} verticalAmplitude={0.35} verticalSpeed={2.5} initialPhase={1} />
      <Bird radius={8} flightHeight={4.5} speed={0.4} verticalAmplitude={0.2} verticalSpeed={1.5} initialPhase={2} />

      {/* Texto 2D: usando Billboard y Text */}
      <Billboard position={[0, 7, 0]}>
        <Text fontSize={0.5} color="red" anchorX="center" anchorY="middle">
          ¡Bienvenido al bosque!
        </Text>
      </Billboard>
    </>
  );
};

export default ForestScene;
