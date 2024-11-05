import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF

// Definición del componente funcional TrashCan
const Tierra3d = (props) => {
    // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
    const { nodes, materials } = useGLTF("modelo3D/earth.glb"); // Carga el modelo 3D desde el archivo GLB ubicado en "modelo3D/earth.glb"

    return (
        <group {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Root">
                        <group name="Icosphere001">
                            <mesh
                                name="Icosphere001_0"
                                geometry={nodes.Icosphere001_0.geometry}
                                material={materials.material}
                            />
                            <mesh
                                name="Icosphere001_1"
                                geometry={nodes.Icosphere001_1.geometry}
                                material={materials.green}
                            />
                            <mesh
                                name="Icosphere001_2"
                                geometry={nodes.Icosphere001_2.geometry}
                                material={materials.white}
                            />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

export default Tierra3d; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("modelo3D/earth.glb");
