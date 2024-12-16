import { Suspense, useMemo } from "react"; // Importamos Suspense y useMemo
import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Componente para mostrar el modelo 3D de biodiversidad
const ModelMapBiodiversity3D = (props) => {
  // Desestructuración del objeto retornado por useGLTF
  const { nodes, materials } = useGLTF("/model3D/biodiversity.glb");

  // Referencia para el objeto que rota
  const soilRef = useRef();

  // Memoriza las transformaciones que no cambian
  const transformBiodiversity = useMemo(() => ({
    rotation: [-Math.PI / 2, 0, 4.5],
  }), []);

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" {...transformBiodiversity}>
          <group name="Forest_SkullOBJcleanermaterialmergergles">
            <mesh
              name="Object_2"
              geometry={nodes.Object_2.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Object_3"
              geometry={nodes.Object_3.geometry}
              material={materials['Material.001']}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

// Componente envuelto en Suspense para gestionar la carga del modelo 3D
export default function ModelMapBiodiversity3DWrapper(props) {
  return (
    <Suspense fallback={<div>Cargando modelo...</div>}>
      <ModelMapBiodiversity3D {...props} />
    </Suspense>
  );
}

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/biodiversity.glb");
