// CloudBackground.jsx
import { Canvas } from "@react-three/fiber";
import { Cloud, OrbitControls } from "@react-three/drei";
import React from "react";
import Tree from "./models/Tree";

const Fondo = () => {
    return (
        <Canvas
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1, // Coloca el fondo detrás del contenido principal
            }}
            shadows
            camera={{ position: [0, 2, 21], fov: 70 }}
        >
            {/* Fondo gris claro para simular un día nublado */}
            <color attach="background" args={["#d3d3d3"]} />

            {/* Nieblas suaves para un fondo difuso */}
            <fog attach="fog" args={["#d3d3d3", 10, 50]} />

            {/* Luz ambiental suave y difusa para un día nublado */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[5, 10, -5]}
                intensity={0.8}
                color={"#ffffff"} // Luz blanca y suave para simular luz difusa
                castShadow
            />

            {/* Árbol en la escena */}
            <Tree position={[0, -2, 0]} scale={[4, 4, 4]} />

            {/* Nubes flotantes en la escena */}
            <Cloud
                position={[-10, 15, -10]}
                opacity={0.4}
                speed={1} // Velocidad lenta de movimiento de las nubes
                width={15} // Ancho de las nubes
                depth={2} // Profundidad de las nubes
                segments={20} // Suavidad de las nubes
            />
            <Cloud
                position={[10, 10, -5]}
                opacity={0.5}
                speed={1}
                width={10}
                depth={1.5}
                segments={20}
            />

            {/* Controles de cámara con restricciones */}
            <OrbitControls
                enablePan={false} // Desactiva el desplazamiento
                maxPolarAngle={Math.PI / 2} // Limita la rotación vertical (hacia arriba)
                
            />
        </Canvas>
    );
};

export default Fondo;
