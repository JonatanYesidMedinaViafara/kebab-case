import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Human3d(props) {
  const group = useRef();
  const positionRef = useRef([-3, 0.4, 6]); // Ref para rastrear la posición actual
  const activeKeys = useRef(new Set()); // Almacenar teclas activas
  const { nodes, materials, animations } = useGLTF('/model3D/humanwalker.glb');
  const { actions } = useAnimations(animations, group);

  // Estado para la posición y rotación del modelo
  const [position, setPosition] = useState(positionRef.current); // Inicializa con la posición del ref
  const [rotation, setRotation] = useState([0, 0, 0]); // Rotación inicial
  const [isMoving, setIsMoving] = useState(false);

  // Manejo de eventos de teclado
  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    activeKeys.current.add(key); // Agrega la tecla al conjunto activo
    moveCharacter(); // Mueve el personaje
  };

  const handleKeyUp = (event) => {
    const key = event.key.toLowerCase();
    activeKeys.current.delete(key); // Elimina la tecla del conjunto activo
    if (activeKeys.current.size === 0) {
      setIsMoving(false); // Detiene la animación si no hay teclas activas
    }
  };

  const moveCharacter = () => {
    const step = 0.1; // Ajusta la distancia de movimiento (más lento)
    let newPosition = [...positionRef.current]; // Copia de la posición actual

    // Recorre todas las teclas activas
    activeKeys.current.forEach((key) => {
      const [x, y, z] = newPosition;

      switch (key) {
        case 's': // Frente
          setRotation([0, Math.PI, 0]);
          newPosition = [x, y, z - step];
          break;
        case 'w': // Atrás
          setRotation([0, 0, 0]);
          newPosition = [x, y, z + step];
          break;
        case 'd': // Derecha
          setRotation([0, -Math.PI / 2, 0]);
          newPosition = [x - step, y, z];
          break;
        case 'a': // Izquierda
          setRotation([0, Math.PI / 2, 0]);
          newPosition = [x + step, y, z];
          break;
        default:
          break;
      }
    });

    // Actualiza la posición solo si hay un cambio
    if (JSON.stringify(newPosition) !== JSON.stringify(positionRef.current)) {
      positionRef.current = newPosition; // Actualiza el ref de posición
      setPosition(newPosition); // Actualiza el estado
      setIsMoving(true); // Activa la animación de caminar
    }
  };

  // Activar o detener la animación de caminar
  useEffect(() => {
    if (isMoving) {
      actions['Armature|Take 001|BaseLayer']?.play();
    } else {
      actions['Armature|Take 001|BaseLayer']?.stop();
    }
  }, [isMoving, actions]);

  // Agregar y eliminar eventos de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <group ref={group} {...props} position={position} rotation={rotation} dispose={null}>
      <group name="Scene">
        <group name="rp_nathan_animated_003_walking" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="rp_nathan_animated_003_walking_CTRL">
            <group name="Armature">
              <skinnedMesh
                name="rp_nathan_animated_003_walking_geo"
                geometry={nodes.rp_nathan_animated_003_walking_geo.geometry}
                material={materials.rp_nathan_animated_003_mat}
                skeleton={nodes.rp_nathan_animated_003_walking_geo.skeleton}
              />
              <primitive object={nodes.rp_nathan_animated_003_walking_root} />
            </group>
          </group>
          <group name="rp_nathan_animated_003_walking_geoGRP" />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/model3D/humanwalker.glb');

export default Human3d;
