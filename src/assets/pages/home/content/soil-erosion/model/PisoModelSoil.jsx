import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import * as THREE from 'three';

export function PisoModelSoil(props) {
  const { nodes, materials } = useGLTF("/model3D/ModelSoil3DPiso.glb");

  const modelRef = useRef();
  const [planeSize, setPlaneSize] = useState([1, 1]); // Dimensiones iniciales del piso

  // Calcula las dimensiones del modelo 3D del piso
  useEffect(() => {
    if (modelRef.current) {
      const bbox = new THREE.Box3().setFromObject(modelRef.current); // Caja delimitadora
      const sizeX = bbox.max.x - bbox.min.x;
      const sizeZ = bbox.max.z - bbox.min.z;
      setPlaneSize([sizeX, sizeZ]);
    }
  }, []);

  // Define un plano físico estático para representar el suelo
  const [ref] = usePlane(() => ({
    position: [0, 0, 0], // Asegúrate de que coincide con el modelo 3D
    rotation: [-Math.PI / 2, 0, 0], // Orientación horizontal
    args: [planeSize[0] * 1, planeSize[1] * 1], // Aumenta el tamaño si es necesario
  }));

  return (
    <group {...props} dispose={null}>
      {/* Plano físico oculto para colisiones */}
      <mesh ref={ref} visible={false}>
        <planeGeometry args={planeSize} />
        <meshStandardMaterial color="blue" opacity={0.5} transparent />
      </mesh>
      {/* Modelo 3D del piso */}
      <group ref={modelRef} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="09fbx" rotation={[Math.PI / 2, 0, 0]} scale={10}>
            <group name="RootNode">
              <group name="Plane" rotation={[-Math.PI / 2, 0, 0]} scale={10}>
                <mesh
                  name="Plane__0"
                  geometry={nodes.Plane__0.geometry}
                  material={materials["Scene_-_Root"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}


useGLTF.preload("/model3D/ModelSoil3DPiso.glb");

export default PisoModelSoil;
