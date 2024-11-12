import { Html } from "@react-three/drei"



const Citytext = () => {
    return (
        <>
            <Html
                occlude
                center
                distanceFactor={8}
                transform
                position={[0, 10, 0]}
                
                style={
                    {
                        color: "#fff",
                        fontSize: "10pt",
                        width: "500px", // Establece el ancho deseado del contenedor
                        textAlign: "center" // Opcional: Alinea el texto en el centro
                    }
                }
            >
                <h1>Bienvenidos a una ciudad victima del mal manejo de reciduos, Busca los reciduos y dale clic para mas informacion sobre ellos, tambien puedes usar W A S D para mover al humano de la zona</h1>
            </Html>


        </>
    )
};

export default Citytext;