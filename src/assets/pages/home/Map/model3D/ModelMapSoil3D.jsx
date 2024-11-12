import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Definición del componente funcional TrashCan
const ModelMapSoil3D = (props) => {
  const { nodes, materials } = useGLTF("/model3D/soil.glb");
  const soilRef = useRef();

  // Hook para rotar el modelo continuamente
  useFrame(() => {
    if (soilRef.current) {
      soilRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación si es necesario
    }
  });

  return (
    <group {...props} ref={soilRef} dispose={null}>
      {/* Resto de la estructura del modelo */}
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
        <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="leaves_0" position={[0.241, 1.772, 0]}>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.034']}
                />
                <mesh
                  name="Object_5"
                  geometry={nodes.Object_5.geometry}
                  material={materials['Material.034']}
                />
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials['Material.034']}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials['Material.034']}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials['Material.033']}
                />
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials['Material.033']}
                />
              </group>
              <group name="Cube005_2" position={[3, 2, 0]}>
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials['Material.036']}
                />
              </group>
              <group name="Cube_3" position={[0.007, 0.998, 0]}>
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cube001_5" position={[0.007, 0.02, 0]}>
                <mesh
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group name="Cube002_6" position={[0.007, 2.028, 0]}>
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group name="Cube003_7" position={[0.007, 1.621, 0]}>
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials.Color_D09_1}
                />
              </group>
              <group name="Cube004_8" position={[0.007, 2, 0]} scale={[1, 0.094, 1]}>
                <mesh
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials.Color_005_1}
                />
              </group>
              <group name="Plane_9" position={[0.007, 2.021, 0]}>
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials['Material.005']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default ModelMapSoil3D; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/soil.glb");
