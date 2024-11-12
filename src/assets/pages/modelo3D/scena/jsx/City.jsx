import Header from "../../../../../../components/Header/Header";
//import "./management.css";
// import TrashCan from "./models-3D/TrashCan";  Importa el componente TrashCan que renderiza un modelo 3D
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import City3d from "../modelo3D/City3d";

const City = () => {
    return (
        <>
            <Header />

            <div class="title-text">
                Manejo inadecuado de residuos
            </div>


            <div className="home-erosion">
                <h1 className="tituloPrincipal">El manejo de residuos se refiere a la recolección, transporte, procesamiento y disposición de los desechos generados por actividades humanas. Cuando no se maneja adecuadamente, puede generar graves problemas ambientales, como contaminación del suelo, agua y aire, contribuyendo al cambio climático y afectando la salud humana.</h1>
            </div>

            {/* Contenedor para el modelo 3D con clase 'container-3d' */}
            <div className="container-3d">
                {/* Canvas que actúa como el área para renderizar el contenido 3D */}
                <Canvas
                    camera={{
                        position: [0, 0, 10], // Posición inicial de la cámara para que el modelo se vea completo
                        fov: 70, // Campo de visión (Field of View) de la cámara, 70 grados
                    }}>

                    {/* Controles para poder rotar el modelo 3D automáticamente */}
                    <OrbitControls
                        autoRotate={true} // El modelo rotará automáticamente
                    />

                    {/* Luz ambiental que ilumina el modelo de manera uniforme */}
                    <ambientLight />

                    {/* Luz direccional que ilumina desde una posición específica con una intensidad alta */}
                    <directionalLight position={[10, 10, 10]} intensity={5} />

                    {/* Renderiza el modelo TrashCan, que contiene el modelo 3D */}
                    <City3d />
                </Canvas>
            </div>


        </>
    );
};


export default City;