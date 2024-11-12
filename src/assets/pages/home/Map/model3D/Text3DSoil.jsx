import { Html } from "@react-three/drei"



const Text3DSoil = () => {
    return (
        <>
            <Html
                occlude
                center
                distanceFactor={100}
                transform
                position={[0, 0, 5]}
                style={
                    {
                        color: "black",
                        fontSize: "10pt"
                    }
                }
            >
                <h1>Erosión del Suelo</h1>
            </Html>
        </>
    )
};

export default Text3DSoil;