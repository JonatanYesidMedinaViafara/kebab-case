import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model3D/trtash1.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="trashcan1"
          castShadow
          receiveShadow
          geometry={nodes.trashcan1.geometry}
          material={materials['Material.004']}
          position={[-1.085, 2.631, -0.681]}
          scale={[1, 1, 1.54]}
          userData={{ name: 'trashcan1' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/trtash1.glb')
