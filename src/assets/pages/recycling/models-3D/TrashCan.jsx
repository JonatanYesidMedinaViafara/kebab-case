import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF

// Definición del componente funcional TrashCan
const TrashCan = (props) => {
    // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
    const { nodes, materials } = useGLTF("modelo3D/earth.glb"); // Carga el modelo 3D desde el archivo GLB ubicado en "modelo3D/earth.glb"
    
    return (
        // El grupo principal que contiene las diferentes partes del modelo
        <group {...props} dispose={null}>
            {/* Agrupación de los elementos del modelo bajo el nombre 'Scene' */}
            <group name="Scene">
                {/* Malla que representa las hojas del modelo con su geometría y material específico */}
                <mesh name="LEAVES" geometry={nodes.LEAVES.geometry} material={materials.PLANE_BRUNCH} />
                
                {/* Malla que representa el árbol del modelo con su geometría y material específico */}
                <mesh name="SAKURA_TREE" geometry={nodes.SAKURA_TREE.geometry} material={materials.TREE} />
            </group>
        </group>
    );
};

export default TrashCan; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("modelo3D/earth.glb");
