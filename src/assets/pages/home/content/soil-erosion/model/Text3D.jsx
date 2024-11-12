import { Html } from "@react-three/drei"



const Text3D = () => {
    return (
        <>
            <Html
                occlude
                center
                distanceFactor={10}
                transform
                position={[0,5, 0]}
                style={
                    {
                        color: "#a3877d",
                        fontSize: "10pt"
                    }
                }
            >
                <h1>Bienvenidos a una erosión del suelo</h1>
            </Html>
        </>
    )
};

export default Text3D;