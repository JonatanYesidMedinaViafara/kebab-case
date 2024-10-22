import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';
import EnvironmentalSections from './EnvironmentalSections';  // Importamos el componente

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Canvas
        style={{ height: '200px' }}  // Altura ajustada para que solo abarque el título
        shadows
        camera={{ position: [0, 0, 20] }}
      >
        {/* Título en 3D */}
        <Text3D
          position={[-10, 2, 15]}
          font="/fonts/earth.json"
          size={1.5}
          height={0.5}
          bevelEnabled
          bevelThickness={0.05}
          bevelSize={0.02}
          curveSegments={12}
        >
          Bienvenidos a Proyecto Tierra
          <meshNormalMaterial />
        </Text3D>

        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Párrafo en formato regular */}
      <p style={styles.intro}>
        Este proyecto tiene como objetivo crear conciencia sobre los problemas medioambientales
        en nuestra comunidad. A través de esta plataforma, exploraremos diversas temáticas y
        posibles soluciones que podamos implementar.
      </p>

      {/* Aquí se muestra el componente EnvironmentalSections */}
      <EnvironmentalSections />  {/* Lo añadimos debajo del párrafo */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  intro: {
    fontSize: '1.2em',
    color: '#555',
    textAlign: 'center',
    maxWidth: '600px',
    marginTop: '-80px',  // Espacio entre el texto 3D y el párrafo
    marginBottom: '-180px',  // Espacio extra entre el párrafo y las secciones
  },
  sectionsContainer: {
    marginTop: '-40px',  // Ajuste el margen superior de las secciones
  },
};

export default HomePage;
