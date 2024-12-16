import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Barrel(props) {
  const { nodes, materials } = useGLTF('/model3D/toxicbarrel.glb');
  const barrelRef = useRef();

  // Aplicar la escala directamente al grupo contenedor
  React.useEffect(() => {
    if (barrelRef.current) {
      barrelRef.current.scale.set(0.0007, 0.0007, 0.0006);  // Aquí puedes ajustar el tamaño, el valor 0.1 es solo un ejemplo
    }
  }, []);

  return (
    <group ref={barrelRef} {...props} dispose={null}>
      
        <group rotation={[Math.PI / 2, 0, 0]}>
          
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.drum}
            position={[37.933, 9338.539, -702.987]}
            rotation={[Math.PI / 4, 0, 0]}
          />
        </group>
      
    </group>
  );
}

useGLTF.preload('/model3D/toxicbarrel.glb');

export default Barrel;
