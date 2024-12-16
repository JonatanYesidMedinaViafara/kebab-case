import React, { useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model1Soil(props) {
    const { nodes, materials } = useGLTF('/model3D/soilinicio.glb');
    const [clickedObject, setClickedObject] = useState(null);

    // Manejo de clics en los objetos
    const handleClick = (e, objectName) => {
        e.stopPropagation(); // Evita que el clic se propague
        setClickedObject({ name: objectName, position: e.object.position });
    };

    // Generar las mallas de forma dinámica
    const meshes = [
        nodes.Object_2,
        nodes.Object_3,
        nodes.Object_4,
        nodes.Object_5,
    ].map((node, index) => (
        <mesh
            key={index}
            castShadow
            receiveShadow
            geometry={node.geometry}
            material={materials.main}
            onClick={(e) => handleClick(e, `Object_${index + 2}`)}
        />
    ));

    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={15}>{meshes}</group>
        </group>
    );
}

useGLTF.preload('/model3D/soilinicio.glb');

export default Model1Soil;
