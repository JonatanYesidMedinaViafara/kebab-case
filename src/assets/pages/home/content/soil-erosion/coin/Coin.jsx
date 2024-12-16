import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";

const ModelCoin3D = ({ onCollectCoin }) => {
  const { nodes, materials } = useGLTF("/model3D/coin.glb");
  const [isCollected, setIsCollected] = useState(false);

  const handleCollect = () => {
    if (!isCollected) {
      setIsCollected(true);
      onCollectCoin(); // Llama a la función para incrementar el marcador
    }
  };

  return !isCollected ? (
    <group
      position={[4, 12, 15]}
      onPointerOver={handleCollect} // Detecta cuando el personaje pasa por la moneda
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["gold_coin_texture.png"]}
      />
    </group>
  ) : null;
};

export default ModelCoin3D;
useGLTF.preload("/model3D/coin.glb");
