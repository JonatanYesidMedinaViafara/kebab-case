import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Header/Header";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import "./css/management.css";
import City3d from "./models/City3d";
import Citytext from "./models/title-city";
import Person from "./models/HumanA3d";

const Management = () => {
    const navigate = useNavigate();
    const [isExpanding, setIsExpanding] = useState(false);

    const handleRedirect = () => {
        setIsExpanding(true); // Inicia la animación

        // Espera a que la animación termine antes de redirigir
        setTimeout(() => {
            navigate("/Typesm"); // Redirige a la nueva página
        }, 1280); // Ajusta el tiempo para que coincida con la duración de la animación
    };

    return (
        <>
            <Header />

            <div className="title-text">Manejo inadecuado de residuos</div>

            <div className="home-erosion">
                <h1 className="tituloPrincipal">
                    El manejo de residuos se refiere a la recolección, transporte, procesamiento y disposición de los desechos generados por actividades humanas. Cuando no se maneja adecuadamente, puede generar graves problemas ambientales, como contaminación del suelo, agua y aire, contribuyendo al cambio climático y afectando la salud humana.
                </h1>
            </div>

            <div className="ciudadcita">
                <Canvas
                    shadows
                    camera={{
                        position: [5, 15, 50],
                        fov: 30,
                    }}
                    style={{
                        height: 1000,
                        width: 1500,
                        right: 270,
                    }}
                >
                    <OrbitControls />
                    <ambientLight intensity={0.4} />
                    <directionalLight
                        position={[15, 20, 10]}
                        intensity={1.2}
                        castShadow
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-20}
                        shadow-camera-right={20}
                        shadow-camera-top={20}
                        shadow-camera-bottom={-20}
                    />
                    <Sky
                        sunPosition={[0, -1, -1]}
                        inclination={0.2}
                        azimuth={180}
                        mieCoefficient={0.005}
                        elevation={85}
                        mieDirectionalG={0.07}
                        rayleigh={3}
                        turbidity={15}
                        exposure={0.8}
                        distance={50}
                    />
                    <City3d castShadow receiveShadow />
                    <Citytext />
                    <Person />
                </Canvas>
            </div>

            {/* Botón de redirección con animación */}
            <div
                className={`redirect-circle ${isExpanding ? "expanding" : ""}`}
                onClick={handleRedirect}
            >
                →
            </div>
        </>
    );
};

export default Management;
