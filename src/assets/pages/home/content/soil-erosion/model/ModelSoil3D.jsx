import React, { useRef, useState, useStates } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function ModelSoil3D(props) {
  const { nodes, materials } = useGLTF('/model3D/earthfragment.glb')
  const [clickedObject, setClickedObject] = useState(null) // Para guardar el objeto clickeado

  // Función para manejar los clics
  const handleClick = (e, objectName) => {
    e.stopPropagation() // Evita que el clic afecte otros elementos
    const position = e.object.position // Obtiene la posición del objeto clickeado
    setClickedObject({ name: objectName, position }) // Actualiza el estado con la información del objeto
  }
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 3.1]} scale={0.5} position={[2, 0, 0]}>
          <group name="ad388a4bcb5e46a0b069d16eb6b63330fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="RUR" rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                  name="RUR_RUR_u1_v1_0"
                  geometry={nodes.RUR_RUR_u1_v1_0.geometry}
                  material={materials.RUR_u1_v1}
                  onClick={(e) => handleClick(e, 'Erosión por salpicadura: ocurre cuando gotas de lluvia golpean el suelo con fuerza suficiente como para desplazar partículas. ')}
                />
                <mesh
                  name="RUR_RUR_u2_v1_0"
                  geometry={nodes.RUR_RUR_u2_v1_0.geometry}
                  material={materials.RUR_u2_v1}
                  onClick={(e) => handleClick(e, 'Erosión en surcos: se forman pequeños canales en el suelo debido al flujo constante de agua.')}
                />
                <mesh
                  name="RUR_RUR_u1_v2_0"
                  geometry={nodes.RUR_RUR_u1_v2_0.geometry}
                  material={materials.RUR_u1_v2}
                  onClick={(e) => handleClick(e, 'Erosión en cárcavas: cuando los surcos se agrandan y forman barrancos o canales profundos en el terreno.')}
                />
                {clickedObject && clickedObject.position && (
                  <Html
                    position={[clickedObject.position.x, clickedObject.position.y + 1, clickedObject.position.z]}
                    center
                    style={
                      {
                        width: 550,
                        top: -200
                      }
                    }
                  >
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      padding: '10px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                      width: '200px',
                      textAlign: 'center'
                    }}>

                      <p>{clickedObject.name}</p>
                    </div>
                  </Html>
                )}
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model3D/earthfragment.glb')

export default ModelSoil3D;