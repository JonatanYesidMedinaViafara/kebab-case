import { OrbitControls } from "@react-three/drei";
import Header from "../../Header/Header";
import "./map.css";
import ModelMap3D from "./model3D/ModelMap3D";
import ModelMapBiodiversity3D from "./model3D/ModelMapBiodiversity3D";
import ModelMapDeforestation3D from "./model3D/ModelMapDeforestation3D";
import ModelMapManagement3D from "./model3D/ModelMapManagement3D";
import ModelMapSoil3D from "./model3D/ModelMapSoil3D";
import Text3DSoil from "./model3D/Text3DSoil";
import { Canvas } from "@react-three/fiber";
import Text3DManagement from "./model3D/Text3DManagement";
import { Link } from "react-router-dom";

const Map = () => {
  // Funciones de redirección
  const redirectToSoil = () => {
    <Link to="/management" className="inicio">INICIAR PARTIDA</Link>
  };
  
  const redirectToManagement = () => {
    location.href = "/management"; // Cambia "/management" por la ruta deseada
  };

  const redirectToDeforestation = () => {
    window.location.href = "/deforestation"; // Cambia "/deforestation" por la ruta deseada
  };

  const redirectToBiodiversity = () => {
    window.location.href = "/biodiversity"; // Cambia "/biodiversity" por la ruta deseada
  };

  return (
    <>
      <Header />
      <div className="container-map3d">
        <div>
          <h1>MAPA</h1>
          <div className="contenedormap">
            <ModelMap3D className="container-map3d" />

            <Canvas className="map-canvas" camera={{ position: [0, 70, 90], fov: 70 }}>
              {/* Luz ambiental */}
              <ambientLight />
              <directionalLight position={[10, 10, 10]} intensity={3} />

              {/* Modelo del mapa (quieto) */}
              <ModelMap3D position={[0, 0, 0]} scale={[1, 1, 1]} />

              {/* Grupo del suelo */}
              <group position={[-60, 40, -30]}>
                <ModelMapSoil3D position={[0, 10, -10]} scale={[5, 5, 5]} onClick={redirectToSoil} />
                <Text3DSoil />
              </group>

              {/* Grupo de gestión */}
              <group position={[0, 20, 20]}>
                <ModelMapManagement3D position={[0, 5, -10]} scale={[4, 4, 4]} onClick={redirectToManagement} />
                <Text3DManagement />
              </group>

              {/* Grupo de deforestación */}
              <group position={[20, 40, -30]}>
                <ModelMapDeforestation3D position={[0, 0, -10]} scale={[4, 4, 4]} onClick={redirectToDeforestation} />
              </group>

              {/* Grupo de biodiversidad */}
              <group position={[70, 10, 20]}>
                <ModelMapBiodiversity3D position={[0, 0, -10]} scale={[4, 4, 4]} onClick={redirectToBiodiversity} />
              </group>

              {/* Controles de cámara */}
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;