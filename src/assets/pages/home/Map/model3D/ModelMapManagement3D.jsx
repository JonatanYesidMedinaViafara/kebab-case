import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos GLTF
import { useRef, memo } from "react"; // memo optimiza la renderización del componente
import { useFrame } from "@react-three/fiber"; // Hook para animaciones en la escena 3D

/**
 * Componente optimizado para renderizar un modelo 3D de gestión.
 * Este componente utiliza `primitive` para renderizar directamente la escena completa,
 * reduciendo la complejidad y mejorando el rendimiento.
 */
const ModelMapManagement3D = memo((props) => {
    // Carga el modelo GLTF y desestructura la escena principal
    const { scene } = useGLTF("/model3D/management.glb");

    // Referencia para manipular el modelo (por ejemplo, animaciones)
    const modelRef = useRef();

    /**
     * Hook para realizar animaciones en tiempo real.
     * En este caso, rotamos el modelo continuamente alrededor del eje Y.
     */


    return (
        /**
         * Utilizamos `primitive` para renderizar directamente el nodo `scene` del modelo GLTF.
         * Esto elimina la necesidad de mapear nodos individuales, reduciendo la complejidad.
         */
        <primitive
            ref={modelRef} // Conecta la referencia al modelo
            object={scene} // Renderiza el nodo principal de la escena cargada
            {...props} // Propiedades adicionales pasadas desde el padre
            dispose={null} // Evita la eliminación automática de recursos
        />
    );
});

export default ModelMapManagement3D; // Exporta el componente para ser utilizado en la aplicación

/**
 * Precarga del modelo GLTF.
 * Esto asegura que el modelo se descargue previamente, mejorando el tiempo de carga
 * cuando el componente se renderiza por primera vez.
 */
useGLTF.preload("/model3D/management.glb");
