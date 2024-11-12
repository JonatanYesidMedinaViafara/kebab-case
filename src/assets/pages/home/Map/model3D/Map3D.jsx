
import { Canvas } from "@react-three/fiber"; // Importa el componente Canvas que sirve como contenedor para renderizar el contenido 3D
import { OrbitControls, useGLTF } from "@react-three/drei"; // Importa OrbitControls para permitir el control del modelo con el ratón y useGLTF para cargar modelos GLTF
import ModelMap3D from "./ModelMap3D";
import ModelMapSoil3D from "./ModelMapSoil3D";
import "../map.css"
import ModelMapManagement3D from "./ModelMapManagement3D";
import ModelMapDeforestation3D from "./ModelMapDeforestation3D";
import ModelMapBiodiversity3D from "./ModelMapBiodiversity3D";


// Definición del componente funcional RecyCling
const Map3D = () => {
  return (
    <>

      <div className="container-map3d">
        <Canvas className="map-canvas" camera={{ position: [0, 70, 90], fov: 70 }}>
          {/* Luz ambiental */}
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={3} />

          {/* Modelo del mapa (quieto) */}
          <ModelMap3D position={[0, 0, 0]} scale={[1, 1, 1]} />

          {/* Modelo del suelo (giratorio) */}
          <ModelMapSoil3D position={[-60, 40, -30]} scale={[5, 5, 5]} />

          <ModelMapManagement3D position={[0, 20, 20]} scale={[1.8,1.8,1.8]}/>

          <ModelMapDeforestation3D position={[20, 40, -30]} scale={[4, 4, 4]}/>

          <ModelMapBiodiversity3D position={[70, 10, 20]} scale={[4, 4, 4]}/>

          {/* Controles de cámara */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        </Canvas>
      </div>

    </>
  );
};
export default Map3D;