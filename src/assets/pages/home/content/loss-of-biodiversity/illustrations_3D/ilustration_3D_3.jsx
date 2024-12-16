import { RigidBody } from "@react-three/rapier";
import { useRef, useState, useEffect, useCallback } from "react";
import { useGLTF } from "@react-three/drei";

// Componente para un conejo (modelo 3D)
const Rabbit = (props) => {
  const { scene } = useGLTF("/model3D/conejo.glb"); // Cargar modelo del conejo
  const rbRabbitRef = useRef(null);

  return (
    <RigidBody
      ref={rbRabbitRef}
      type="dynamic"
      colliders="cuboid"
      position={props.position}
    >
      <primitive
        object={scene}
        scale={0.3}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow // El conejo proyectará sombras
        receiveShadow // También puede recibir sombras si se desea
      />
    </RigidBody>
  );
};

// Componente para un árbol
const Tree = (props) => {
  const rbTreeRef = useRef(null);
  const { onTreeClick } = props; // recibimos la función para manejar el click desde el padre

  return (
    <RigidBody
      ref={rbTreeRef}
      type="dynamic"
      colliders="cuboid"
      position={props.position}
    >
      <group onPointerDown={onTreeClick}>
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
          <meshStandardMaterial color={"brown"} />
        </mesh>
        <mesh position={[0, 2, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </RigidBody>
  );
};

// Suelo degradado
const Floor = (props) => {
  return (
    <RigidBody name="rbFloor" friction={2} type="fixed">
      <mesh {...props} receiveShadow> {/* Recibe sombras del conejo, árboles, etc. */}
        <circleGeometry args={[20, 32]} />
        <meshStandardMaterial color={"#A0522D"} />
      </mesh>
    </RigidBody>
  );
};

// Bosque y conejos secuenciales
const ForestAndRabbits = ({ onTreeClick }) => {
  const [rabbits, setRabbits] = useState([]);
  const maxRabbits = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setRabbits((prevRabbits) => {
        if (prevRabbits.length < maxRabbits) {
          const newRabbit = {
            id: prevRabbits.length,
            position: [
              Math.random() * 20 - 5,
              0.5,
              Math.random() * 20 - 5,
            ],
          };
          return [...prevRabbits, newRabbit];
        } else {
          clearInterval(interval);
          return prevRabbits;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Árboles */}
      {Array.from({ length: 55 }, (_, i) => {
        const x = (i % 5) * 5 - 10;
        const z = Math.floor(i / 5) * 2 - 10;
        return <Tree key={`tree-${i}`} position={[x, 0, z]} onTreeClick={onTreeClick}/>;
      })}

      {/* Conejos */}
      {rabbits.map((rabbit) => (
        <Rabbit key={rabbit.id} position={rabbit.position} />
      ))}
    </>
  );
};

// Escena completa
const BiodiversityLossScene = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Crear el objeto de audio y habilitar loop
    const audio = new Audio("/music/Bosque.mp3");
    audio.loop = true;
    audioRef.current = audio;
  }, []);

  const handleTreeClick = useCallback(() => {
    // Iniciar reproducción si el audio está pausado
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }
  }, []);

  return (
    <>
      <Floor position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <ForestAndRabbits onTreeClick={handleTreeClick} />
    </>
  );
};

export default BiodiversityLossScene;
