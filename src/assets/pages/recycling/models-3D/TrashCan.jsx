import { useGLTF } from "@react-three/drei";



const TrashCan = (props) =>{
    const {nodes,materials} = useGLTF("modelo3D/trash-can.glb")
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
            <mesh
                name="Tong_Sampah"
                geometry={nodes.Tong_Sampah.geometry}
                material={materials.Texture}
            />
            <mesh rotation-x={Math.PI *0.5}>
                <boxGeometry args={[2,2,0.1]}/>
                <meshStandardMaterial color="gray"/>
            </mesh>
            </group>
        </group>
    )
}

export default TrashCan;
useGLTF.preload("modelo3D/trash-can.glb")