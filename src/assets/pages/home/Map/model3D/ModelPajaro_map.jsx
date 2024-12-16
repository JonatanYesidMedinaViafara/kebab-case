import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Importamos THREE para usar LoopRepeat
import React, { useEffect, useRef, useState } from "react";

const ModelPajaroMap = (props) => {
    const group = useRef();
    const positionRef = useRef([-3, 0.4, 6]); // Ref para rastrear la posición actual
    const activeKeys = useRef(new Set()); // Almacenar teclas activas
    const [isMoving, setIsMoving] = useState(false);
    const { nodes, materials, animations } = useGLTF("/model3D/pajaroMap.glb"); // Carga el modelo 3D desde el archivo GLB
    const { actions } = useAnimations(animations, group);

   

    
    useEffect(() => {
        if (actions["ArmatureAction"])  {
            const action = actions["ArmatureAction"];
            action.reset();
            action.setLoop(THREE.LoopRepeat); 
            action.play(); 
        }

   
        return () => {
            if (actions["ArmatureAction"]) {
                actions["ArmatureAction"].stop();
            }
        };
    }, [actions]);

    // Manejo de eventos de teclado
    const handleKeyDown = (event) => {
        const key = event.key.toLowerCase();
        activeKeys.current.add(key); // Agrega la tecla al conjunto activo
        moveCharacter(); // Mueve el personaje
    };

    const handleKeyUp = (event) => {
        const key = event.key.toLowerCase();
        activeKeys.current.delete(key); // Elimina la tecla del conjunto activo
        if (activeKeys.current.size === 0) {
            setIsMoving(false); // Detiene la animación si no hay teclas activas
        }
    };

    const moveCharacter = () => {
        const step = 0.1; // Ajusta la distancia de movimiento (más lento)
        let newPosition = [...positionRef.current]; // Copia de la posición actual

        activeKeys.current.forEach((key) => {
            const [x, y, z] = newPosition;

            switch (key) {
                case "s": // Frente
                    newPosition = [x, y, z - step];
                    break;
                case "w": // Atrás
                    newPosition = [x, y, z + step];
                    break;
                case "d": // Derecha
                    newPosition = [x - step, y, z];
                    break;
                case "a": // Izquierda
                    newPosition = [x + step, y, z];
                    break;
                default:
                    break;
            }
        });

        if (JSON.stringify(newPosition) !== JSON.stringify(positionRef.current)) {
            positionRef.current = newPosition;
            setIsMoving(true); // Activa la animación de caminar
        }
    };

    // Agregar y eliminar eventos de teclado
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.147}>
                    <group name="Root">
                        <group
                            name="Sun"
                            position={[-4.323, -22.57, 15.986]}
                            rotation={[0.934, -0.304, -0.195]}
                        >
                            <group name="Sun_1" />
                        </group>
                        <group name="Armature" position={[0, 0.748, -0.934]}>
                            <primitive object={nodes.Armature_rootJoint} />
                            <skinnedMesh
                                name="Cube_0"
                                geometry={nodes.Cube_0.geometry}
                                material={materials.Eyes}
                                skeleton={nodes.Cube_0.skeleton}
                            />
                            <skinnedMesh
                                name="Plane_0"
                                geometry={nodes.Plane_0.geometry}
                                material={materials.Material}
                                skeleton={nodes.Plane_0.skeleton}
                            />
                            <group name="Cube" position={[0, -4.415, 4.174]} />
                            <group name="Plane" position={[0, -1.748, 0.934]} />
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

export default ModelPajaroMap;

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/pajaroMap.glb");
