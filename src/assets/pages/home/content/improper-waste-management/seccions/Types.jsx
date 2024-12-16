import React, { useState } from "react";
import "../css/Types.css"; // Ruta del CSS
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import Header from "../../../../Header/Header";
import Trashone from "../models/trashone3d";
import Factory from "../models/Factory3d";
import Barrel from "../models/Barrel3D";
import Text3D from "../2D/3D/Title3d";
import Text2D from "../2D/TypesModel1"

const Types = () => {
  const [content, setContent] = useState(
    "Selecciona el tipo de residuo del que requieras información"
  );

  const handleModelClick = () => {
    setContent(
      "El manejo inapropiado de residuos incluye diversos tipos, como los residuos sólidos urbanos (basura doméstica, restos de alimentos, papel, cartón, plásticos, vidrios y metales), residuos peligrosos (pilas, baterías, productos químicos, aceites usados, pesticidas y medicamentos), residuos electrónicos (aparatos obsoletos como computadoras, teléfonos y electrodomésticos), residuos orgánicos (restos de comida y desechos de jardinería), residuos industriales (subproductos químicos, metales pesados y desechos de fabricación) y residuos biomédicos (desechos hospitalarios como agujas, jeringas, gasas y medicamentos caducados). Su manejo inadecuado puede causar contaminación del agua, suelo y aire, propagación de enfermedades, emisión de gases de efecto invernadero y daños a la flora y fauna."
    );
  };

  const handleModelClickfactory = () => {
    setContent(
      "Los residuos industriales son materiales desechados que provienen de procesos de fabricación, producción o actividades industriales. Incluyen una amplia variedad de desechos como metales pesados, productos químicos, aceites, plásticos, lodos y gases. Estos residuos pueden clasificarse como peligrosos o no peligrosos, dependiendo de su composición y el impacto que tienen en el medio ambiente y la salud humana. Un manejo inadecuado de los residuos industriales puede provocar contaminación del suelo, agua y aire, afectando los ecosistemas y generando riesgos sanitarios. Por ello, su gestión requiere estrategias específicas, como el reciclaje, la reutilización y el tratamiento seguro, para minimizar sus efectos negativos y promover la sostenibilidad en las operaciones industriales."
    );
  };

  return (
    <>
      <Header />



      <div className="page-container">
      <Canvas
      style={{
        top:-50,
        width: 500,
        height: 200
      }}
          camera={
            {
              position: [0, 0, 10],
              fov: 50,
              
            }
          }
          
          >
            <OrbitControls/>
            <Text3D />
          </Canvas>

        <div className="content-box">

          <h2>{content}</h2>
          
        </div>


        {/* Canvas de Trashone */}
        <Canvas
          shadows
          camera={{
            position: [0, 5, 90],
            fov: 100,
          }}
          style={{
            height: 400,
            width: 350,
            right: 780,
            top: -100,
            position: "relative",
            borderRadius: 100,
          }}
        >
          <Text2D />
          <Physics gravity={[0, 0, 0]}>
            <OrbitControls />
            <RigidBody>
              <mesh onClick={handleModelClick}>

                <Trashone />
              </mesh>
            </RigidBody>
          </Physics>
        </Canvas>

        {/* Canvas de Factory */}
        <Canvas
          shadows
          camera={{
            position: [2, 10, 50],
            fov: 100,
          }}
          style={{
            height: 400,
            width: 350,
            right: 680,
            top: 10,
            position: "relative",
            borderRadius: 100,
          }}
        >


          {/* Agregar <Physics /> aquí */}
          <Physics gravity={[0, -9.8, 0]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} castShadow />
            <pointLight position={[-10, 10, -10]} intensity={0.7} />
            <OrbitControls />

            {/* Envuelve los elementos dentro de la física */}
            <RigidBody colliders="hull" position={[-4, 12, 20]}>
              <Barrel rotation={[0, Math.PI / 4, 0]} />
            </RigidBody>
            <RigidBody mass={4} type="fixed" >
              <mesh onClick={handleModelClickfactory}
                rotation={[0, Math.PI / 2, 0]} // Rotar hacia la izquierda (90 grados)
              >
                <Factory />
              </mesh>
            </RigidBody>
          </Physics>
        </Canvas>

      </div>
    </>
  );
};

export default Types;
