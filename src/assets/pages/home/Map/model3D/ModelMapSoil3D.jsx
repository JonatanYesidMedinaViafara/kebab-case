import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const ModelMapSoil3D = (props) => {
  const { nodes, materials } = useGLTF("/model3D/soil.glb");
  const soilRef = useRef();


  // Lista de mallas con sus configuraciones
  const meshes = [
    { name: "Object_4", geometry: nodes.Object_4.geometry, material: materials["Material.034"], position: [0.1, 1.8, 0] },
    { name: "Object_5", geometry: nodes.Object_5.geometry, material: materials["Material.034"], position: [0.1, 1.8, 0] },
    { name: "Object_6", geometry: nodes.Object_6.geometry, material: materials["Material.034"] , position: [0.1, 1.8, 0]},
    { name: "Object_7", geometry: nodes.Object_7.geometry, material: materials["Material.034"] , position: [0.1, 1.8, 0]},
    { name: "Object_8", geometry: nodes.Object_8.geometry, material: materials["Material.033"] , position: [0.1, 1.8, 0]},
    { name: "Object_9", geometry: nodes.Object_9.geometry, material: materials["Material.033"] , position: [0.1, 1.8, 0]},
    { name: "Object_11", geometry: nodes.Object_11.geometry, material: materials["Material.036"], position: [3, 2, 0] },
    { name: "Object_13", geometry: nodes.Object_13.geometry, material: materials.Material, position: [0.007, 0.998, 0] },
    { name: "Object_15", geometry: nodes.Object_15.geometry, material: materials["Material.001"], position: [0.007, 0.02, 0] },
    { name: "Object_17", geometry: nodes.Object_17.geometry, material: materials["Material.002"], position: [0.007, 2.028, 0] },
    { name: "Object_19", geometry: nodes.Object_19.geometry, material: materials.Color_D09_1, position: [0.007, 1.621, 0] },
    { name: "Object_21", geometry: nodes.Object_21.geometry, material: materials.Color_005_1, position: [0.007, 2, 0], scale: [1, 0.094, 1] },
    { name: "Object_23", geometry: nodes.Object_23.geometry, material: materials["Material.005"], position: [0.007, 2.021, 0] },
  ];

  return (
    <group {...props} ref={soilRef} dispose={null}>
      <group rotation={[-Math.PI / 0.1, 0, 0]} scale={10}>
        {meshes.map(({ name, geometry, material, position, scale }) => (
          <mesh
            key={name}
            name={name}
            geometry={geometry}
            material={material}
            position={position || undefined}
            scale={scale || undefined}
          />
        ))}
      </group>
    </group>
  );
};

export default ModelMapSoil3D;

// Precarga del modelo
useGLTF.preload("/model3D/soil.glb");
