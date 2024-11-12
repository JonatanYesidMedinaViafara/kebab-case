import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';

export function Person(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model3D/person.glb');
  const { actions } = useAnimations(animations, group);

  // Estado para la posición del modelo y el salto
  const [position, setPosition] = useState([-3, 0.4, 6]);
  const [isJumping, setIsJumping] = useState(false);

  // Función para manejar eventos de teclado y mover el modelo
  const handleKeyDown = (event) => {
    setPosition((prevPosition) => {
      const [x, y, z] = prevPosition;
      const step = 0.2; // Ajusta la distancia de movimiento
      switch (event.key) {
        case 'w': // Adelante
          return [x, y, z - step];
        case 's': // Atrás
          return [x, y, z + step];
        case 'a': // Izquierda
          return [x - step, y, z];
        case 'd': // Derecha
          return [x + step, y, z];
        case 'w' && 'a': // Adelante e izquierda (diagonal)
          return [x - step, y, z - step];
        case 'w' && 'd': // Adelante y derecha (diagonal)
          return [x + step, y, z - step];
        case 's' && 'a': // Atrás e izquierda (diagonal)
          return [x - step, y, z + step];
        case 's' && 'd': // Atrás y derecha (diagonal)
          return [x + step, y, z + step];
        case ' ':
          if (!isJumping) {
            setIsJumping(true);
            return [x, y + 1, z]; // Salto inicial
          }
          break;
        default:
          return prevPosition;
      }
    });
  };

  // Animación de salto
  useEffect(() => {
    if (isJumping) {
      const jumpTimeout = setTimeout(() => {
        setPosition((prevPosition) => [prevPosition[0], 0.4, prevPosition[2]]);
        setIsJumping(false);
      }, 500); // Duración del salto
      return () => clearTimeout(jumpTimeout);
    }
  }, [isJumping]);

  // Activar la animación de caminar cuando el modelo se esté moviendo
  useEffect(() => {
    if (actions['walk']) {
      actions['walk'].play();
    }
    return () => {
      if (actions['walk']) {
        actions['walk'].stop();
      }
    };
  }, [position, actions]);

  // Escucha de eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <group ref={group} {...props} position={position} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="3fc2ec394eb04896ac9a89a84ccf6643fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_6.skeleton}
                  />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials.Ch38_body}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials.Ch38_hair}
                    skeleton={nodes.Object_14.skeleton}
                  />
                  <skinnedMesh
                    name="Object_16"
                    geometry={nodes.Object_16.geometry}
                    material={materials.Ch38_hair}
                    skeleton={nodes.Object_16.skeleton}
                  />
                  <group name="Object_8" />
                  <group name="Object_11" />
                  <group name="Object_13" />
                  <group name="Object_15" />
                  <group name="Ch38_Shorts" />
                  <group name="Ch38_Shirt" />
                  <group name="Ch38_Socks" />
                  <group name="Ch38_Body" />
                  <group name="Ch38_Shoes" />
                  <group name="Ch38_Eyelashes" />
                  <group name="Ch38_Hair" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/model3D/person.glb');

export default Person;
