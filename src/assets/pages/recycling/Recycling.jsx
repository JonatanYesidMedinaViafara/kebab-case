import Header from "../../../components/Header/Header";
import TrashCan from "./models-3D/TrashCan";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "./Recycling.css";

const RecyCling = () => {
  return (
    <>
      <Header />
      <div className="container-3d">
        <Canvas>
          <OrbitControls 
            autoRotate = {true}
          />
          <ambientLight/>
          <directionalLight position={[10, 10, 10]} intensity={5}/>
          <TrashCan/>
        </Canvas>
      </div>
    </>
  );
};

export default RecyCling;
