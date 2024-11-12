import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF

// Definición del componente funcional TrashCan
const ModelMap3D = (props) => {
  // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
  const { nodes, materials } = useGLTF("/model3D/map.glb"); // Carga el modelo 3D desde el archivo GLB ubicado en "modelo3D/earth.glb"

  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, 20.637, -3.653]} rotation={[-0.004, 0, 0]}>
          <group name="Map_01FBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="map001" rotation={[-Math.PI / 1.2, 0, 0]} scale={[1.038, 1.038, 1]}>
                <mesh
                  name="map001_01_-_Map_0"
                  geometry={nodes['map001_01_-_Map_0'].geometry}
                  material={materials['01_-_Map']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default ModelMap3D; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/map.glb");
