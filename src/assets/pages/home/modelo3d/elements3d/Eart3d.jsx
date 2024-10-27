import { useGLTF } from '@react-three/drei'

export function Earth3d(props) {
  const { nodes, materials } = useGLTF('modelo3D/earth.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="Icosphere001">
              <mesh
                name="Icosphere001_0"
                geometry={nodes.Icosphere001_0.geometry}
                material={materials.material}
              />
              <mesh
                name="Icosphere001_1"
                geometry={nodes.Icosphere001_1.geometry}
                material={materials.green}
              />
              <mesh
                name="Icosphere001_2"
                geometry={nodes.Icosphere001_2.geometry}
                material={materials.white}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Earth3d;

useGLTF.preload('modelo3D/earth.glb')