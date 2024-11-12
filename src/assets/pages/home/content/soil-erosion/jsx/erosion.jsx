import { Canvas } from "@react-three/fiber";
import Header from "../../../../Header/Header";
import "../css/erosion.css";
import Background from "./Background";
import { OrbitControls } from "@react-three/drei";
import Tierrita3d from "../model/erosionmodel";

const Erosion = () => {
    return (
        <>
            <Header />
            <div>
                <Background />
            </div>


            <div className="erosion-container">
                <h3 className="tituloSeccion">¿Cómo se produce la erosión del suelo?</h3>


                <p className="subtituloSeccion">La erosión del suelo es un proceso natural, pero en muchos casos acelerado por la actividad humana, que implica la pérdida y desplazamiento de la capa superior del suelo, esencial para la vida vegetal y la agricultura. Es un tema importante en el contexto ambiental, ya que afecta la productividad agrícola, la calidad del agua y la biodiversidad. A continuación te proporcionaré la información relevante y estructurada que necesitas para desarrollar una página web sobre este tema.</p>

                <div className="tierragrieta">

                    <Canvas
                        shadows // Activa las sombras en el lienzo
                        camera={{
                            position: [15, 20, 5], // Posición inicial de la cámara
                            fov: 40, // Campo de visión de la cámara
                        }}
                    >
                        {/* Controles para rotar y mover el modelo 3D */}
                        <OrbitControls />

                        {/* Luz ambiental para iluminar el modelo de manera uniforme */}
                        <ambientLight intensity={0.3} color="#ffffff" />

                        {/* Luz direccional principal (luz del sol) */}
                        <directionalLight
                            position={[10, 15, 10]} // Posición de la luz
                            intensity={1.2} // Intensidad de la luz
                            color="#ffddaa" // Color cálido para simular la luz del sol 
                            castShadow // Activar sombras
                            shadow-mapSize-width={1024} // Tamaño de la sombra para mayor detalle
                            shadow-mapSize-height={1024}
                            shadow-bias={-0.0001} // Reduce los problemas de sombra en objetos delgados
                        />

                        {/* Segunda luz direccional para rellenar desde otro ángulo */}
                        <directionalLight
                            position={[-10, -10, -10]} // Luz desde el lado opuesto
                            intensity={0.5} // Menor intensidad para el relleno
                            color="#88c0d0" // Color frío para equilibrar la iluminación
                            castShadow
                        />

                        {/* Luz puntual para iluminar detalles específicos */}
                        <pointLight
                            position={[5, 10, 5]} // Posición de la luz
                            intensity={0.7} // Intensidad
                            color="#ffd700" // Luz amarilla dorada
                            distance={20} // Distancia de alcance de la luz
                            castShadow
                        />

                        {/* Luz focal para un efecto más direccional y concentrado */}
                        <spotLight
                            position={[0, 20, 10]} // Posición de la luz
                            angle={0.3} // Ángulo de apertura del foco
                            penumbra={0.5} // Suavizado de los bordes del foco
                            intensity={0.8} // Intensidad
                            color="#ffffff"
                            castShadow
                        />

                        {/* Renderiza el modelo */}
                        <Tierrita3d />

                    </Canvas>

                </div>


                {/* Sección de conclusión */}
                <div class="info-box">
                    <p>La erosión del suelo es un proceso natural, pero en muchos casos acelerado por la actividad humana, que implica la pérdida y desplazamiento de la capa superior del suelo, esencial para la vida vegetal y la agricultura. Es un tema importante en el contexto ambiental, ya que afecta la productividad agrícola, la calidad del agua y la biodiversidad. A continuación te proporcionaré la información relevante y estructurada que necesitas para desarrollar una página web sobre este tema.</p>

                    <h3>1. Definición de erosión del suelo</h3>
                    <p>La erosión del suelo es el proceso por el cual las partículas de suelo son desplazadas y removidas, principalmente por el viento, el agua y, en menor medida, por actividades humanas como la agricultura y la construcción. A medida que la capa fértil del suelo se reduce, disminuye la capacidad de la tierra para soportar cultivos, ecosistemas y estructuras humanas.</p>
                </div>

            </div>


            {/* Efecto de burbujas de fondo */}
            <div className="background">
                <div className="bubbles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="bubble"></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Erosion;
