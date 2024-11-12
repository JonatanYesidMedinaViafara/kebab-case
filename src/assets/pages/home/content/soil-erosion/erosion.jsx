import Header from "../../../Header/Header";
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF, Sky } from "@react-three/drei";
import "./erosion.css";
import Text3D from "./model/Text3D";
import ModelSoil3D from "./model/ModelSoil3D"
import Personsoil from "./model/Personsoil";

const Erosion = () => {
    return (
        <>
            <Header />
            <h1 className="titulo">Erosión del Suelo</h1>
            <div className="erosion-container">
                <div>
                    <h3 className="tituloSeccion">¿Cómo se produce la erosión del suelo?</h3>
                    <p className="subtituloSeccion">La erosión del suelo es un proceso natural,
                        pero en muchos casos acelerado por la actividad humana, que implica la
                        pérdida y desplazamiento de la capa superior del suelo, esencial para la
                        vida vegetal y la agricultura. Es un tema importante en el contexto ambiental,
                        ya que afecta la productividad agrícola, la calidad del agua y la biodiversidad.
                        A continuación te proporcionaré la información relevante y estructurada que
                        necesitas para desarrollar una página web sobre este tema.</p>
                </div>

                <div className="conteiner">
                    <div>
                        {/* Contenedor para el modelo 3D con clase 'container-3d' */}
                        <div className="tierragrieta">
                            <Canvas
                                shadows // Activa las sombras en el lienzo
                                camera={{
                                    position: [0, 10, 50], // Posición inicial de la cámara
                                    fov: 20, // Campo de visión de la cámara
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

                                {/* Renderiza el modelo */}
                                <ModelSoil3D position={[0, -5, 0]} />
                                <Text3D />
                            </Canvas>
                        </div>

                    </div>
                    <div class="info-box">
                        <p>La erosión del suelo es un proceso natural, pero en muchos casos
                            acelerado por la actividad humana, que implica la pérdida y desplazamiento
                            de la capa superior del suelo, esencial para la vida vegetal y la agricultura.
                            Es un tema importante en el contexto ambiental, ya que afecta la productividad agrícola,
                            la calidad del agua y la biodiversidad. A continuación te proporcionaré la información
                            relevante y estructurada que necesitas para desarrollar una página web sobre este tema.</p>

                        <h3>1. Definición de erosión del suelo</h3>

                        <p>La erosión del suelo es el proceso por el cual las partículas de suelo son desplazadas
                            y removidas, principalmente por el viento, el agua y, en menor medida, por
                            actividades humanas como la agricultura y la construcción. A medida que la capa fértil
                            del suelo se reduce, disminuye la capacidad de la tierra para soportar cultivos, ecosistemas
                            y estructuras humanas.</p>
                    </div>

                </div>

                <div className="conteiner">
                    <div class="info-box">

                        <h3>Tipos de erosión del suelo</h3>

                        <p>Erosión hídrica (por agua) El agua es una de las principales causas de erosión del suelo. Este tipo de erosión ocurre cuando la lluvia y el agua corriente arrastran las partículas de suelo, lo que puede generar varios tipos de erosión hídrica:</p>
 
                    </div>
                    <div>
                        {/* Contenedor para el modelo 3D con clase 'container-3d' */}
                        <div className="tierragrieta">
                            <Canvas
                                shadows // Activa las sombras en el lienzo
                                camera={{
                                    position: [0, 10, 50], // Posición inicial de la cámara
                                    fov: 20, // Campo de visión de la cámara
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

                                {/* Renderiza el modelo */}
                                <ModelSoil3D position={[0, -5, 0]} />
                                <Text3D />
                                <Personsoil/>
                            </Canvas>
                        </div>

                    </div>


                </div>

            </div>
        </>
    );
};

export default Erosion;