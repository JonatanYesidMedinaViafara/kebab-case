import { useAnimations, useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import React, { useEffect, useRef, useState } from "react";

// Definición del componente funcional TrashCan
const Personsoil = (props) => {
    // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/model3D/personsoil.glb"); // Carga el modelo 3D desde el archivo GLB ubicado en "modelo3D/earth.glb"
    const { actions } = useAnimations(animations, group);

    // Estado para la posición del modelo y el salto
    const [position, setPosition] = useState([-3, 0.4, 6]);
    const [isJumping, setIsJumping] = useState(false);

    // Función para manejar eventos de teclado y mover el modelo
    const handleKeyDown = (event) => {
        setPosition((prevPosition) => {
            const [x, y, z] = prevPosition;
            const step = 0.2; // Ajusta la distancia de movimiento
            switch (event.key) {
                case 'w': // Adelante
                    return [x, y, z - step];
                case 's': // Atrás
                    return [x, y, z + step];
                case 'a': // Izquierda
                    return [x - step, y, z];
                case 'd': // Derecha
                    return [x + step, y, z];
                case 'w' && 'a': // Adelante e izquierda (diagonal)
                    return [x - step, y, z - step];
                case 'w' && 'd': // Adelante y derecha (diagonal)
                    return [x + step, y, z - step];
                case 's' && 'a': // Atrás e izquierda (diagonal)
                    return [x - step, y, z + step];
                case 's' && 'd': // Atrás y derecha (diagonal)
                    return [x + step, y, z + step];
                case ' ':
                    if (!isJumping) {
                        setIsJumping(true);
                        return [x, y + 1, z]; // Salto inicial
                    }
                    break;
                default:
                    return prevPosition;
            }
        });
    };

    // Animación de salto
    useEffect(() => {
        if (isJumping) {
            const jumpTimeout = setTimeout(() => {
                setPosition((prevPosition) => [prevPosition[0], 0.4, prevPosition[2]]);
                setIsJumping(false);
            }, 500); // Duración del salto
            return () => clearTimeout(jumpTimeout);
        }
    }, [isJumping]);

    // Activar la animación de caminar cuando el modelo se esté moviendo
    useEffect(() => {
        if (actions['walk']) {
            actions['walk'].play();
        }
        return () => {
            if (actions['walk']) {
                actions['walk'].stop();
            }
        };
    }, [position, actions]);

    // Escucha de eventos de teclado
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    return (
        <group ref={group} {...props} position={position} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.1} position={[-5, -1, -5]}>
                    <group name="e33bf92b363848f1b304d9ac3867c9ecfbx" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="RootNode">
                            <group name="Lima_MAIN_01">
                                <group name="Lima_Arms_GRP_01" position={[4.048, 6.387, 0]}>
                                    <group name="Lima_Arm_LT_01">
                                        <mesh
                                            name="Lima_Arm_LT_01_lambert1_0"
                                            geometry={nodes.Lima_Arm_LT_01_lambert1_0.geometry}
                                            material={materials.lambert1}
                                        />
                                    </group>
                                    <group name="Lima_Arm_RT_01">
                                        <mesh
                                            name="Lima_Arm_RT_01_lambert1_0"
                                            geometry={nodes.Lima_Arm_RT_01_lambert1_0.geometry}
                                            material={materials.lambert1}
                                        />
                                    </group>
                                </group>
                                <group name="Lima_Body_01">
                                    <mesh
                                        name="Lima_Body_01_lambert1_0"
                                        geometry={nodes.Lima_Body_01_lambert1_0.geometry}
                                        material={materials.lambert1}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

export default Personsoil; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/personsoil.glb");