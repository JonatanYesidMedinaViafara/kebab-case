import "./ModelsCanvas.css";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Debug, Physics } from "@react-three/cannon";
import { Jinosauro } from "../../model/jinosauro";
import Personsoil from "../../model/Personsoil";
import ModelCoin3D from "../../coin/Coin";
import PisoModelSoil from "../../model/PisoModelSoil";
import Model1Soil from "../../model/Model1Soil";

function FollowDinosaur() {
    const [dinoPosition, setDinoPosition] = useState([0, -20, 0]);
    const [dinoDirection, setDinoDirection] = useState([0, 0, -1]);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const lastInteractionTime = useRef(Date.now());

    const cameraRef = useRef();

    useFrame(({ camera }) => {
        const now = Date.now();
        const [x, y, z] = dinoPosition;
        const [dx, dy, dz] = dinoDirection;

        if (!isUserInteracting && now - lastInteractionTime.current > 1000) {
            const cameraOffset = [
                x - dx * 20,
                y + 10,
                z - dz * 20,
            ];

            camera.position.lerp(
                { x: cameraOffset[0], y: cameraOffset[1], z: cameraOffset[2] },
                0.04
            );
            camera.lookAt(x, y, z);
        }
    });

    const handleStartInteraction = () => {
        setIsUserInteracting(true);
    };

    const handleEndInteraction = () => {
        setIsUserInteracting(false);
        lastInteractionTime.current = Date.now();
    };

    return (
        <>
            <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                onStart={handleStartInteraction}
                onEnd={handleEndInteraction}
            />
            <Jinosauro
                onUpdatePosition={(pos) => setDinoPosition(pos)}
                onUpdateDirection={(dir) => setDinoDirection(dir)}
            />
        </>
    );
}

function SkyEnvironment() {
    return (
        <Sky
            sunPosition={[0, 1, 0]}
            inclination={1.1}
            azimuth={5.25}
            mieCoefficient={0.005}
            mieDirectionalG={5.8}
            rayleigh={0.1}
            turbidity={1}
            exposure={0.2}
        />
    );
}

export const modelcanvauno = (
    <div className="tierragrieta1">
        <Canvas shadows>
            <OrbitControls />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[10, 20, 10]}
                intensity={1.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
            />

            <directionalLight position={[-10, 15, -10]} intensity={1} color="#d4f1f9" />
            <pointLight position={[5, 10, 5]} intensity={0.5} color="#fff59d" />

            <SkyEnvironment />

            <Model1Soil />

            <Physics>
                <Personsoil />
                <ModelCoin3D />
            </Physics>
        </Canvas>
    </div>
);

export const modelcanvados = (
    <div className="tierragrieta2">
        <Canvas
            shadows
            camera={{ position: [0, 100, 0], fov: 60 }}
        >
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

            <ambientLight intensity={0.3} color="#ffffff" />
            <directionalLight position={[10, 15, 10]} intensity={1.2} color="#ffddaa" castShadow />

            <SkyEnvironment />

            <Physics gravity={[0, -9.81, 0]} allowSleep={false}>
                <Debug color="blue">
                    <FollowDinosaur />
                    <PisoModelSoil />
                </Debug>
                <ModelCoin3D />
            </Physics>
        </Canvas>
    </div>
);
