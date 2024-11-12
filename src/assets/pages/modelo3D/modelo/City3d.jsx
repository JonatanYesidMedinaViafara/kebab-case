
import { useGLTF } from '@react-three/drei'

const City3d = (props) => {
  // Desestructuración del objeto retornado por useGLTF, que contiene los nodos y materiales del modelo GLTF
  const { nodes, materials } = useGLTF("modelo3D/city.glb");
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} />
        <mesh
          name="Text"
          geometry={nodes.Text.geometry}
          material={materials.Material}
          position={[-73.624, 96.645, -63.997]}
          scale={14.806}
        />
        <mesh
          name="Text001"
          geometry={nodes.Text001.geometry}
          material={materials.Material}
          position={[28.642, 110.017, 72.276]}
          scale={14.806}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials.Material}
          position={[0.035, 1.474, 0.018]}
          scale={0.358}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials.Material}
          position={[0.039, 6.476, 0.025]}
          scale={0.84}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials.Material}
          position={[0.047, 9.705, 0.866]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder002"
          geometry={nodes.Cylinder002.geometry}
          material={materials.Material}
          position={[0.047, 8.197, 0.866]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder003"
          geometry={nodes.Cylinder003.geometry}
          material={materials.Material}
          position={[0.047, 6.638, 0.866]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder004"
          geometry={nodes.Cylinder004.geometry}
          material={materials.Material}
          position={[0.047, 9.705, -0.767]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder005"
          geometry={nodes.Cylinder005.geometry}
          material={materials.Material}
          position={[0.047, 8.197, -0.767]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder006"
          geometry={nodes.Cylinder006.geometry}
          material={materials.Material}
          position={[0.047, 6.638, -0.767]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder007"
          geometry={nodes.Cylinder007.geometry}
          material={materials.Material}
          position={[-0.782, 9.705, 0.049]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder008"
          geometry={nodes.Cylinder008.geometry}
          material={materials.Material}
          position={[-0.782, 8.197, 0.049]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder009"
          geometry={nodes.Cylinder009.geometry}
          material={materials.Material}
          position={[-0.782, 6.638, 0.049]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder010"
          geometry={nodes.Cylinder010.geometry}
          material={materials.Material}
          position={[0.834, 9.705, 0.049]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder011"
          geometry={nodes.Cylinder011.geometry}
          material={materials.Material}
          position={[0.834, 8.197, 0.049]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder012"
          geometry={nodes.Cylinder012.geometry}
          material={materials.Material}
          position={[0.834, 6.638, 0.049]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.584, 0.266, 0.584]}
        />
        <mesh
          name="Cylinder013"
          geometry={nodes.Cylinder013.geometry}
          material={materials.Material}
          position={[-32.731, 16.617, -23.572]}
          scale={[0.783, 0.11, 0.783]}
        />
        <mesh
          name="Cylinder014"
          geometry={nodes.Cylinder014.geometry}
          material={materials.Material}
          position={[-40.827, 16.617, -23.572]}
          scale={[0.783, 0.11, 0.783]}
        />
        <mesh
          name="Text002"
          geometry={nodes.Text002.geometry}
          material={materials['Material.001']}
          position={[29.07, 17.562, -14.714]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={8.445}
        />
        <mesh
          name="Text003"
          geometry={nodes.Text003.geometry}
          material={materials['Material.003']}
          position={[-45.477, 18.03, -13.712]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[6.7, 8.445, 6.869]}
        />
        <mesh
          name="Cylinder015"
          geometry={nodes.Cylinder015.geometry}
          material={materials['Material.004']}
          position={[-67.993, 101.006, -80.639]}
          rotation={[0, 0, -1.577]}
          scale={[0.257, 0.114, 0.257]}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials['Material.004']}
          position={[-68.359, 99.835, -67.675]}
          scale={1.382}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials['Material.004']}
          position={[-68.359, 99.835, -67.675]}
          scale={1.382}
        />
        <mesh
          name="Text004"
          geometry={nodes.Text004.geometry}
          material={nodes.Text004.material}
          position={[-23.905, 22.541, 16.737]}
          rotation={[Math.PI / 2, 0, -Math.PI]}
          scale={5.718}
        />
        <mesh
          name="Cylinder021"
          geometry={nodes.Cylinder021.geometry}
          material={materials['Material.005']}
          position={[4.172, 1.648, -14.262]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cylinder020"
          geometry={nodes.Cylinder020.geometry}
          material={materials['Material.005']}
          position={[6.801, 1.632, -14.26]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cylinder016"
          geometry={nodes.Cylinder016.geometry}
          material={materials['Material.005']}
          position={[4.172, 1.651, -18.108]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cylinder017"
          geometry={nodes.Cylinder017.geometry}
          material={materials['Material.005']}
          position={[6.801, 1.654, -18.169]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials['Material.005']}
          position={[5.487, 3.325, -16.574]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Cylinder019"
          geometry={nodes.Cylinder019.geometry}
          material={materials['Material.006']}
          position={[-5.784, 1.704, 18.913]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cylinder018"
          geometry={nodes.Cylinder018.geometry}
          material={materials['Material.006']}
          position={[-3.154, 1.725, 18.913]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cylinder022"
          geometry={nodes.Cylinder022.geometry}
          material={materials['Material.006']}
          position={[-5.784, 1.703, 13.731]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cylinder023"
          geometry={nodes.Cylinder023.geometry}
          material={materials['Material.006']}
          position={[-3.154, 1.728, 13.682]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials['Material.006']}
          position={[-4.418, 5.591, 15.849]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Cylinder025"
          geometry={nodes.Cylinder025.geometry}
          material={materials['Material.007']}
          position={[-12.979, 3.535, 3.752]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.504, 0.385, 0.504]}
        />
        <mesh
          name="Cylinder024"
          geometry={nodes.Cylinder024.geometry}
          material={materials['Material.007']}
          position={[-12.979, 3.535, 3.752]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.504, 0.385, 0.504]}
        />
        <mesh
          name="Cylinder026"
          geometry={nodes.Cylinder026.geometry}
          material={materials['Material.007']}
          position={[-12.979, 3.535, 3.752]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.504, 0.385, 0.504]}
        />
        <mesh
          name="Cylinder027"
          geometry={nodes.Cylinder027.geometry}
          material={materials['Material.007']}
          position={[-12.979, 3.535, 3.752]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.504, 0.385, 0.504]}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials['Material.007']}
          position={[-12.979, 3.535, 3.752]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          name="Cylinder031"
          geometry={nodes.Cylinder031.geometry}
          material={materials['Material.008']}
          position={[18.568, 1.678, 5.545]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={[0.504, 0.333, 0.504]}
        />
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials['Material.004']}
          position={[33.893, 113.129, 70.461]}
          scale={1.335}
        />
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials['Material.004']}
          position={[33.893, 113.129, 70.461]}
          scale={1.335}
        />
      </group>
    </group>
  )
}

export default City3d;
useGLTF.preload('modelo3D/city.glb')

