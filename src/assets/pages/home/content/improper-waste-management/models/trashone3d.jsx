import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function moundtrash(props) {
  const { nodes, materials } = useGLTF('/model3D/moundtrash.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="JunkPile01"
          castShadow
          receiveShadow
          geometry={nodes.JunkPile01.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'JunkPile01' }}
        />
        <mesh
          name="floor"
          castShadow
          receiveShadow
          geometry={nodes.floor.geometry}
          material={materials['Material.002']}
          position={[-6.248, 0.444, 0.442]}
          scale={[1.237, 1, 1]}
          userData={{ name: 'floor' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/moundtrash.glb')

export default moundtrash;
