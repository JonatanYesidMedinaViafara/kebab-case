import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Definición del componente funcional TrashCan
const ModelMapBiodiversity3D = (props) => {
    const { nodes, materials } = useGLTF("/model3D/biodiversity.glb");
    const soilRef = useRef();

    // Hook para rotar el modelo continuamente
    useFrame(() => {
        if (soilRef.current) {
            soilRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación si es necesario
        }
    });

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
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

export default ModelMapBiodiversity3D; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/biodiversity.glb");
