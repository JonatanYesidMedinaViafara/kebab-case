import { useGLTF } from "@react-three/drei";

const TrashCan = (props) => {
    const { nodes, materials } = useGLTF("modelo3D/earth.glb")
    return (
        <group {...props} dispose={null}>
            <group name="Scene">
                <mesh name="LEAVES" geometry={nodes.LEAVES.geometry} material={materials.PLANE_BRUNCH} />
                <mesh name="SAKURA_TREE" geometry={nodes.SAKURA_TREE.geometry} material={materials.TREE} />
            </group>
        </group>
    )
}

export default TrashCan;
useGLTF.preload("modelo3D/earth.glb")