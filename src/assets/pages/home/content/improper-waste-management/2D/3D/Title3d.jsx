import { Text3D, Center } from "@react-three/drei";


const Textitle3d = () => {
  

  return (
    <>
      <Center top left position={[6, 0, 0]}>
        <Text3D
          font= "/fonts/Basic Sans Serif 7_Regular.json" // Proporciona la fuente cargada aquí
          position={[0, 0, 0]}
          bevelEnabled
          bevelSize={0.02}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.75}
          letterSpacing={0.05}
          size={0.9}
        >
          {`Tipos de residuos`}  
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
};

export default Textitle3d;
