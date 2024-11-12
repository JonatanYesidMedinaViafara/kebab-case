import { Html } from "@react-three/drei"



const Text3DManagement = () => {
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
                <h1>Manejo de Residuos</h1>
            </Html>
        </>
    )
};

export default Text3DManagement;