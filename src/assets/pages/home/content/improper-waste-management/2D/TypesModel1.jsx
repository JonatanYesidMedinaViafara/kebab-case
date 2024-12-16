import { Html } from "@react-three/drei"



const Model12d = () => {
    return (
        <>
            <Html
                occlude
                className="welcome-text"
                center
                distanceFactor={90}
                transform
                position={[1, 50, 0]}
            >
                <h1>Tipos de residuos</h1>
            </Html>
        </>
    )
};

export default Model12d;