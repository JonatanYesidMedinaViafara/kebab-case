import Header from "../../../Header/Header";
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF, Sky } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import "./css/management.css";
import City3d from "./models/City3d";
import Citytext from "./models/title-city";
import Person from "./models/person3d";

const Management = () => {
    return (
        <>
            <Header />

            <div className="title-text">
                Manejo inadecuado de residuos
            </div>

            <div className="home-erosion">
                <h1 className="tituloPrincipal">El manejo de residuos se refiere a la recolección, transporte, procesamiento y disposición de los desechos generados por actividades humanas. Cuando no se maneja adecuadamente, puede generar graves problemas ambientales, como contaminación del suelo, agua y aire, contribuyendo al cambio climático y afectando la salud humana.</h1>
            </div>

            <div className="ciudadcita">
                <Canvas
                    shadows // Activa el renderizado de sombras en el Canvas
                    camera={{
                        position: [5, 15, 50], // Posición de la cámara
                        fov: 30,               // Campo de visión de la cámara
                    }}

                    style={
                        {
                            height: 1000,
                            width: 1500,
                            right: 270
                        }
                    }
                >
                    {/* Controles para rotar y mover el modelo 3D */}
                    <OrbitControls />

                    {/* Luz ambiental para iluminar el modelo de manera uniforme */}
                    <ambientLight intensity={0.4} />

                    {/* Luz direccional fija con sombras activadas */}
                    <directionalLight
                        position={[15, 20, 10]}       // Posición fija de la luz
                        intensity={1.2}               // Intensidad de la luz
                        castShadow                    // Activa las sombras
                        shadow-mapSize-width={1024}   // Mayor resolución para sombras
                        shadow-mapSize-height={1024}
                        shadow-camera-far={50}
                        shadow-camera-left={-20}
                        shadow-camera-right={20}
                        shadow-camera-top={20}
                        shadow-camera-bottom={-20}
                    />

                    <Sky
                        sunPosition={[0, -1, -1]} // Coloca el sol debajo del horizonte
                        inclination={0.2} // Ajusta la inclinación para simular el atardecer
                        azimuth={180} // Ajusta el ángulo de azimut para cambiar la dirección de la luz
                        mieCoefficient={0.005} // Ajusta la dispersión atmosférica
                        elevation={85} // Ajusta la elevación del sol
                        mieDirectionalG={0.07} // Ajusta el brillo del sol
                        rayleigh={3} // Ajusta la dispersión de Rayleigh
                        turbidity={15} // Ajusta la claridad del cielo
                        exposure={0.8} // Ajusta la exposición del cielo
                        distance={50}
                    />

                    {/* Renderiza el modelo de la ciudad con sombras activadas */}
                    <City3d castShadow receiveShadow /> {/* Activa sombras en el modelo */}
                    <Citytext />
                    <Person />

                </Canvas>


            </div>
        </>
    );
};

export default Management;
