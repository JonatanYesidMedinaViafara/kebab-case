import React, { useRef, useEffect, useState, useCallback } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

const STEP_SIZE = 6 ;
const MOVEMENT_KEYS = {
  s: { rotation: [0, Math.PI, 0], direction: [0, 0, 1] },
  w: { rotation: [0, 0, 0], direction: [0, 0, -1] },
  d: { rotation: [0, -Math.PI / 2, 0], direction: [1, 0, 0] },
  a: { rotation: [0, Math.PI / 2, 0], direction: [-1, 0, 0] },
};

export function Jinosauro({ onUpdatePosition, onUpdateDirection }) {
  const group = useRef(); // Grupo principal que contiene colisionador y modelo
  const positionRef = useRef([0, 1, 0]); // Posición inicial del personaje
  const directionRef = useRef([0, 0, -1]);
  const activeKeys = useRef(new Set());
  const modelRef = useRef();

  const [position, setPosition] = useState(positionRef.current);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [isMoving, setIsMoving] = useState(false);

  const { nodes, materials, animations } = useGLTF("/model3D/jinosauro.glb");
  const { actions } = useAnimations(animations, group);

  // Configuración del colisionador físico
  const [physicsRef, api] = useBox(() => ({
    mass: 1,
    position: [0, 1, 0], // Posición inicial
    args: [1, 2, 0.5], // Tamaño del colisionador
    fixedRotation: true,
    linearDamping: 0.95,
    type: "Dynamic",
    onCollide: (e) => console.log("Colisión detectada:", e),
  }));

  // Sincronizar posición del colisionador con el grupo principal
  useEffect(() => {
    const unsubscribe = api.position.subscribe((newPosition) => {
      positionRef.current = newPosition;
      setPosition(newPosition);
    });

    return () => unsubscribe();
  }, [api.position]);

  // Control de movimiento del personaje
  const moveCharacter = useCallback(() => {
    let movement = [0, 0, 0];
    let newDirection = [...directionRef.current];
    let movementOccurred = false;

    activeKeys.current.forEach((key) => {
      const movementInfo = MOVEMENT_KEYS[key];
      if (movementInfo) {
        setRotation(movementInfo.rotation);
        newDirection = movementInfo.direction;

        movement[0] += movementInfo.direction[0] * STEP_SIZE;
        movement[2] += movementInfo.direction[2] * STEP_SIZE;

        movementOccurred = true;
      }
    });

    if (movementOccurred) {
      api.velocity.set(movement[0] * 5, movement[1], movement[2] * 5);
      directionRef.current = newDirection;
      setIsMoving(true);

      onUpdatePosition?.(positionRef.current);
      onUpdateDirection?.(newDirection);
    } else {
      api.velocity.set(0, 0, 0);
      setIsMoving(false);
    }
  }, [api, onUpdatePosition, onUpdateDirection]);

  const handleKeyDown = useCallback((event) => {
    const key = event.key.toLowerCase();
    if (MOVEMENT_KEYS[key]) {
      event.preventDefault();
      activeKeys.current.add(key);
      moveCharacter();
    }
  }, [moveCharacter]);

  const handleKeyUp = useCallback((event) => {
    const key = event.key.toLowerCase();
    if (MOVEMENT_KEYS[key]) {
      event.preventDefault();
      activeKeys.current.delete(key);

      if (activeKeys.current.size === 0) {
        setIsMoving(false);
      }
      moveCharacter();
    }
  }, [moveCharacter]);

  useEffect(() => {
    if (isMoving) {
      actions["GltfAnimation 0"]?.play();
    } else {
      actions["GltfAnimation 0"]?.stop();
    }
  }, [isMoving, actions]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return (
    <group ref={group} position={position} rotation={rotation}>
      {/* Colisionador físico */}
      <mesh ref={physicsRef} visible={true}>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshStandardMaterial color="red" opacity={0.5} transparent={true} wireframe={true} />
      </mesh>

      {/* Modelo 3D */}
      <group ref={modelRef}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 4.8]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="_0">
                  <mesh
                    name="mesh_0"
                    geometry={nodes.mesh_0.geometry}
                    material={materials.mesh_0}
                    morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                    morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/model3D/jinosauro.glb");
