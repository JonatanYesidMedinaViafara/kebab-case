
import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import { usePlane } from "@react-three/cannon";

// Componente que carga y muestra el modelo 3D del mapa
const ModelMap3D = (props) => {
  // Desestructuración del objeto retornado por useGLTF
  const { nodes, materials } = useGLTF("/model3D/map.glb");

  // Memoriza las transformaciones para evitar recalcularlas en cada render
  const [ref] = usePlane(() => ({
    position: [0, -30, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <group {...props} dispose={null}>
      <mesh ref={ref}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" scale={[1.5, 1.5, 1.3]}>
            <group name="map001">
              <mesh
                name="map001_01_-_Map_0"
                geometry={nodes["map001_01_-_Map_0"].geometry}
                material={materials["01_-_Map"]}
              />
            </group>
          </group>
        </group>
      </mesh>
    </group>
  );
};

// Componente envuelto en Suspense para gestionar la carga del modelo 3D
export default ModelMap3D;

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/map.glb");
