import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Definición del componente funcional TrashCan
const ModelMapManagement3D = (props) => {
    const { nodes, materials } = useGLTF("/model3D/management.glb");
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
                    <group name="textured_outputobjcleanermaterialmergergles">
                        <mesh
                            name="Object_2"
                            geometry={nodes.Object_2.geometry}
                            material={materials.material_0}
                        />
                        <mesh
                            name="Object_3"
                            geometry={nodes.Object_3.geometry}
                            material={materials.material_0}
                        />
                        <mesh
                            name="Object_4"
                            geometry={nodes.Object_4.geometry}
                            material={materials.material_0}
                        />
                        <mesh
                            name="Object_5"
                            geometry={nodes.Object_5.geometry}
                            material={materials.material_0}
                        />
                        <mesh
                            name="Object_6"
                            geometry={nodes.Object_6.geometry}
                            material={materials.material_0}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
};

export default ModelMapManagement3D; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/management.glb");
