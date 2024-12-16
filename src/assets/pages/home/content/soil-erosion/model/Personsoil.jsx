import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

const Personsoil = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model3D/personsoil.glb");
  const [position, setPosition] = useState([-3, 0.4, 6]);

  const handleKeyDown = (event) => {
    setPosition((prev) => {
      const [x, y, z] = prev;
      const step = 0.5;
      switch (event.key) {
        case "w":
          return [x, y, z - step];
        case "s":
          return [x, y, z + step];
        case "a":
          return [x - step, y, z];
        case "d":
          return [x + step, y, z];
        default:
          return prev;
      }
    });
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <group ref={group} {...props} position={position}>
      <mesh
        geometry={nodes.Lima_Body_01_lambert1_0.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

export default Personsoil;
useGLTF.preload("/model3D/personsoil.glb");
