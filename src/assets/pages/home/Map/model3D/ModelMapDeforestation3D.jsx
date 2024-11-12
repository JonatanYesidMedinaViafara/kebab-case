import { useGLTF } from "@react-three/drei"; // Importa la función useGLTF para cargar modelos 3D en formato GLTF
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// Definición del componente funcional TrashCan
    const ModelMapDeforestation3D = (props) => {
    const { nodes, materials } = useGLTF("/model3D/forest.glb");
  const soilRef = useRef();

  // Hook para rotar el modelo continuamente
  useFrame(() => {
    if (soilRef.current) {
      soilRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación si es necesario
    }
  });

  return (
    <group {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.872}>
        <group name="May_holidayfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="RootNode">
            <group
              name="Soil"
              position={[3.144, -25.611, -0.447]}
              rotation={[Math.PI / 2, 0, 2.755]}
              scale={[-639.722, 639.722, 363.86]}>
              <mesh
                name="Soil_soil_0"
                geometry={nodes.Soil_soil_0.geometry}
                material={materials.soil}
              />
            </group>
            <group
              name="Circle"
              position={[20.578, -24.335, -510.979]}
              rotation={[-1.659, -0.081, -0.383]}
              scale={87.462}>
              <mesh
                name="Circle_Birch_tree_0"
                geometry={nodes.Circle_Birch_tree_0.geometry}
                material={materials.Birch_tree}
              />
              <mesh
                name="Circle_foliage_base_color_0"
                geometry={nodes.Circle_foliage_base_color_0.geometry}
                material={materials.foliage_base_color}
              />
            </group>
            <group
              name="Circle001"
              position={[192.346, 1.099, -204.752]}
              rotation={[-1.606, 0.019, -1.087]}
              scale={[96.626, 96.627, 96.626]}>
              <mesh
                name="Circle001_Fir_0"
                geometry={nodes.Circle001_Fir_0.geometry}
                material={materials.material}
              />
              <mesh
                name="Circle001_Line__0"
                geometry={nodes.Circle001_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle002"
              position={[45.116, -7.285, -375.498]}
              rotation={[-1.771, -0.041, -1.279]}
              scale={96.626}>
              <mesh
                name="Circle002_Wood_0"
                geometry={nodes.Circle002_Wood_0.geometry}
                material={materials.Wood}
              />
              <mesh
                name="Circle002_Line__0"
                geometry={nodes.Circle002_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle004"
              position={[456.494, 89.101, -128.499]}
              rotation={[1.65, -0.167, 1.018]}
              scale={96.626}>
              <mesh
                name="Circle004_Wood_0"
                geometry={nodes.Circle004_Wood_0.geometry}
                material={materials.Wood}
              />
              <mesh
                name="Circle004_Line__0"
                geometry={nodes.Circle004_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle003"
              position={[-271.381, 16.013, 156.027]}
              rotation={[-0.362, 1.255, 0.435]}
              scale={122.394}>
              <mesh
                name="Circle003_Wood_0"
                geometry={nodes.Circle003_Wood_0.geometry}
                material={materials.Wood}
              />
              <mesh
                name="Circle003_Line__0"
                geometry={nodes.Circle003_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle005"
              position={[378.468, -32.878, 334.553]}
              rotation={[-1.469, 0.096, 3.035]}
              scale={90.85}>
              <mesh
                name="Circle005_Birch_tree_0"
                geometry={nodes.Circle005_Birch_tree_0.geometry}
                material={materials.Birch_tree}
              />
              <mesh
                name="Circle005_foliage_base_color_0"
                geometry={nodes.Circle005_foliage_base_color_0.geometry}
                material={materials.foliage_base_color}
              />
            </group>
            <group
              name="Circle007"
              position={[90.562, -35.182, 470.127]}
              rotation={[-1.496, 0.063, -1.636]}
              scale={96.626}>
              <mesh
                name="Circle007_Fir_0"
                geometry={nodes.Circle007_Fir_0.geometry}
                material={materials.material}
              />
              <mesh
                name="Circle007_Line__0"
                geometry={nodes.Circle007_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle008"
              position={[-124.574, -21.891, 433.42]}
              rotation={[-1.473, 0.034, 1.102]}
              scale={100.716}>
              <mesh
                name="Circle008_Birch_tree_0"
                geometry={nodes.Circle008_Birch_tree_0.geometry}
                material={materials.Birch_tree}
              />
              <mesh
                name="Circle008_foliage_base_color_0"
                geometry={nodes.Circle008_foliage_base_color_0.geometry}
                material={materials.foliage_base_color}
              />
            </group>
            <group
              name="Circle009"
              position={[287.156, -27.665, 350.382]}
              rotation={[-1.415, 0.1, -1.203]}
              scale={96.626}>
              <mesh
                name="Circle009_Wood_0"
                geometry={nodes.Circle009_Wood_0.geometry}
                material={materials.Wood}
              />
              <mesh
                name="Circle009_Line__0"
                geometry={nodes.Circle009_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle010"
              position={[225.768, -11.424, -440.74]}
              rotation={[-1.774, -0.005, -1.085]}
              scale={76.923}>
              <mesh
                name="Circle010_Fir_0"
                geometry={nodes.Circle010_Fir_0.geometry}
                material={materials.material}
              />
              <mesh
                name="Circle010_Line__0"
                geometry={nodes.Circle010_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Circle011"
              position={[450.311, -4.6, -264.688]}
              rotation={[-1.597, 0.1, 2.488]}
              scale={100.366}>
              <mesh
                name="Circle011_Birch_tree_0"
                geometry={nodes.Circle011_Birch_tree_0.geometry}
                material={materials.Birch_tree}
              />
              <mesh
                name="Circle011_foliage_base_color_0"
                geometry={nodes.Circle011_foliage_base_color_0.geometry}
                material={materials.foliage_base_color}
              />
            </group>
            <group
              name="Cube"
              position={[253.839, 22.324, -336.985]}
              rotation={[-1.685, 0.016, -1.685]}
              scale={96.626}>
              <mesh
                name="Cube_Stones_0"
                geometry={nodes.Cube_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube_Line__0"
                geometry={nodes.Cube_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube001"
              position={[184.205, 13.437, -372.95]}
              rotation={[-0.119, 0.85, 1.624]}
              scale={96.626}>
              <mesh
                name="Cube001_Stones_0"
                geometry={nodes.Cube001_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube001_Line__0"
                geometry={nodes.Cube001_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube002"
              position={[379.582, 5.62, -259.556]}
              rotation={[-1.562, 0.046, -1.634]}
              scale={[35.57, 35.57, 11.154]}>
              <mesh
                name="Cube002_Stones_0"
                geometry={nodes.Cube002_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube002_Line__0"
                geometry={nodes.Cube002_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube004"
              position={[-70.935, -1.47, 340.749]}
              rotation={[-1.476, -0.051, -1.515]}
              scale={[35.57, 35.57, 11.154]}>
              <mesh
                name="Cube004_Stones_0"
                geometry={nodes.Cube004_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube004_Line__0"
                geometry={nodes.Cube004_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube005"
              position={[-160.16, 1.813, 375.201]}
              rotation={[-2.866, 1.198, -1.725]}
              scale={96.626}>
              <mesh
                name="Cube005_Stones_0"
                geometry={nodes.Cube005_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube005_Line__0"
                geometry={nodes.Cube005_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube006"
              position={[265.978, -39.911, 484.461]}
              rotation={[-1.466, 0.063, 2.803]}
              scale={[35.57, 35.57, 11.154]}>
              <mesh
                name="Cube006_Stones_0"
                geometry={nodes.Cube006_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube006_Line__0"
                geometry={nodes.Cube006_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube007"
              position={[-19.843, -6.027, -432.619]}
              rotation={[-0.163, -1.28, 1.376]}
              scale={96.626}>
              <mesh
                name="Cube007_Stones_0"
                geometry={nodes.Cube007_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube007_Line__0"
                geometry={nodes.Cube007_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube008"
              position={[421.251, -11.086, 229.196]}
              rotation={[-1.435, 0.117, 0.632]}
              scale={[96.626, 96.627, 96.626]}>
              <mesh
                name="Cube008_Stones_0"
                geometry={nodes.Cube008_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube008_Line__0"
                geometry={nodes.Cube008_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube021"
              position={[455.465, -24.403, 309.853]}
              rotation={[0.134, 0.95, 1.487]}
              scale={96.626}>
              <mesh
                name="Cube021_Stones_0"
                geometry={nodes.Cube021_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube021_Line__0"
                geometry={nodes.Cube021_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube022"
              position={[-270.091, 1.813, 76.412]}
              rotation={[-2.866, 1.198, -1.725]}
              scale={96.626}>
              <mesh
                name="Cube022_Stones_0"
                geometry={nodes.Cube022_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube022_Line__0"
                geometry={nodes.Cube022_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube023"
              position={[507.612, -49.377, 365.111]}
              rotation={[-0.001, -0.548, 0.86]}
              scale={[121.527, 188.314, 210.297]}>
              <mesh
                name="Cube023_Stones_0"
                geometry={nodes.Cube023_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube023_Line__0"
                geometry={nodes.Cube023_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube024"
              position={[254.348, -40.654, -559.192]}
              rotation={[-2.013, 0.246, -2.39]}
              scale={[36.501, 45.607, 13.681]}>
              <mesh
                name="Cube024_Stones_0"
                geometry={nodes.Cube024_Stones_0.geometry}
                material={materials.Stones}
              />
              <mesh
                name="Cube024_Line__0"
                geometry={nodes.Cube024_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Cube003"
              position={[-100.095, 3.95, -114.911]}
              rotation={[-2.124, 0.473, -0.508]}
              scale={7.4}>
              <mesh
                name="Cube003_Vaz_2107_0"
                geometry={nodes.Cube003_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube009"
              position={[-79.093, 7.237, -131.973]}
              rotation={[-0.7, 1.209, -1.579]}
              scale={7.4}>
              <mesh
                name="Cube009_Vaz_2107_0"
                geometry={nodes.Cube009_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube010"
              position={[-110.914, 3.95, -98.5]}
              rotation={[-0.982, 0.426, -2.459]}
              scale={7.4}>
              <mesh
                name="Cube010_Vaz_2107_0"
                geometry={nodes.Cube010_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube011"
              position={[-90.252, 3.95, -116.877]}
              rotation={[-2.277, -0.095, 0.239]}
              scale={7.4}>
              <mesh
                name="Cube011_Vaz_2107_0"
                geometry={nodes.Cube011_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube012"
              position={[-83.506, 3.084, -147.956]}
              rotation={[2.275, 0.139, 1.746]}
              scale={7.4}>
              <mesh
                name="Cube012_Vaz_2107_0"
                geometry={nodes.Cube012_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube013"
              position={[-125.344, 7.272, -116.533]}
              rotation={[2.438, -0.136, 1.499]}
              scale={7.4}>
              <mesh
                name="Cube013_Vaz_2107_0"
                geometry={nodes.Cube013_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube014"
              position={[-190.269, 59.277, -25.126]}
              rotation={[-2.17, 0.262, -0.289]}
              scale={6.235}>
              <mesh
                name="Cube014_Vaz_2107_0"
                geometry={nodes.Cube014_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube015"
              position={[-176.255, 59.183, -40.163]}
              rotation={[2.504, 0.747, 1.471]}
              scale={6.235}>
              <mesh
                name="Cube015_Vaz_2107_0"
                geometry={nodes.Cube015_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube016"
              position={[-195.09, 58.328, -9.309]}
              rotation={[-1.092, 0.515, -2.146]}
              scale={6.235}>
              <mesh
                name="Cube016_Vaz_2107_0"
                geometry={nodes.Cube016_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube017"
              position={[-177.446, 60.034, -24.866]}
              rotation={[-2.204, -0.324, 0.426]}
              scale={6.235}>
              <mesh
                name="Cube017_Vaz_2107_0"
                geometry={nodes.Cube017_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube018"
              position={[-190.875, 56.391, -49.816]}
              rotation={[2.326, -0.004, 1.489]}
              scale={6.235}>
              <mesh
                name="Cube018_Vaz_2107_0"
                geometry={nodes.Cube018_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube019"
              position={[-211.191, 60.632, -20.355]}
              rotation={[2.417, -0.31, 1.257]}
              scale={6.235}>
              <mesh
                name="Cube019_Vaz_2107_0"
                geometry={nodes.Cube019_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Cube020"
              position={[-203.743, 55.327, -38.284]}
              rotation={[1.943, 0.663, 2.611]}
              scale={6.235}>
              <mesh
                name="Cube020_Vaz_2107_0"
                geometry={nodes.Cube020_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
            </group>
            <group
              name="Car"
              position={[96.777, 89.964, 92.262]}
              rotation={[-1.572, 0.024, 0.491]}
              scale={[103.563, 49.458, 49.458]}>
              <mesh
                name="Car_Vaz_2107_0"
                geometry={nodes.Car_Vaz_2107_0.geometry}
                material={materials.Vaz_2107}
              />
              <mesh
                name="Car_Line__0"
                geometry={nodes.Car_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Barbecue"
              position={[-191.245, 53.107, -33.332]}
              rotation={[-1.51, -0.028, -0.445]}
              scale={[188.132, 188.132, 150.478]}>
              <mesh
                name="Barbecue_Barbecue_0"
                geometry={nodes.Barbecue_Barbecue_0.geometry}
                material={materials.Barbecue}
              />
              <mesh
                name="Barbecue_Line__0"
                geometry={nodes.Barbecue_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Plane"
              position={[-94.197, 19.249, -145.175]}
              rotation={[-1.6, 0.03, 2.312]}
              scale={100}>
              <mesh
                name="Plane_Brick_0"
                geometry={nodes.Plane_Brick_0.geometry}
                material={materials.Brick}
              />
              <mesh
                name="Plane_Line__0"
                geometry={nodes.Plane_Line__0.geometry}
                material={materials.Line}
              />
            </group>
            <group
              name="Smoke_albedo"
              position={[-203.981, 134.278, -34.634]}
              rotation={[-3.086, -1.282, 1.739]}
              scale={119.969}>
              <mesh
                name="Smoke_albedo_Smoke_albedo_0"
                geometry={nodes.Smoke_albedo_Smoke_albedo_0.geometry}
                material={materials.Smoke_albedo}
              />
            </group>
            <group
              name="Fire_albedo"
              position={[-202.704, 103.375, -33.911]}
              rotation={[-2.499, -0.931, -2.642]}
              scale={113.941}>
              <mesh
                name="Fire_albedo_Fire_albedo_0"
                geometry={nodes.Fire_albedo_Fire_albedo_0.geometry}
                material={materials.Fire_albedo}
              />
            </group>
            <group
              name="grass_albedo002"
              position={[-213.332, 7.677, 421.943]}
              rotation={[0.243, -0.615, 0.096]}
              scale={[68.519, 80.636, 68.519]}>
              <mesh
                name="grass_albedo002_grass_0"
                geometry={nodes.grass_albedo002_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo001"
              position={[-435.813, -8.805, 121.85]}
              rotation={[0.223, 0.765, 0.085]}
              scale={[68.519, 80.636, 68.519]}>
              <mesh
                name="grass_albedo001_grass_0"
                geometry={nodes.grass_albedo001_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo003"
              position={[-319.099, 7.528, 187.455]}
              rotation={[-0.016, 0.946, 0.066]}
              scale={[61.59, 72.482, 61.59]}>
              <mesh
                name="grass_albedo003_grass_0"
                geometry={nodes.grass_albedo003_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo004"
              position={[-19.53, 14.324, -386.467]}
              rotation={[-0.256, -0.352, -0.051]}
              scale={[53.735, 63.238, 53.735]}>
              <mesh
                name="grass_albedo004_grass_0"
                geometry={nodes.grass_albedo004_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo005"
              position={[-125.809, 17.716, -234.762]}
              rotation={[-0.055, -0.003, -0.05]}
              scale={[57.155, 34.307, 57.142]}>
              <mesh
                name="grass_albedo005_grass_0"
                geometry={nodes.grass_albedo005_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo006"
              position={[150.661, 22.803, -58.456]}
              rotation={[0.045, 0.203, -0.116]}
              scale={[67.606, 57.752, 68.114]}>
              <mesh
                name="grass_albedo006_grass_0"
                geometry={nodes.grass_albedo006_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo007"
              position={[128.554, 17.716, -243.309]}
              rotation={[-0.055, -0.003, -0.05]}
              scale={[59.526, 35.731, 59.513]}>
              <mesh
                name="grass_albedo007_grass_0"
                geometry={nodes.grass_albedo007_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo008"
              position={[176.875, 23.142, -330.962]}
              rotation={[-0.142, 0.013, -0.047]}
              scale={[59.602, 50.56, 59.604]}>
              <mesh
                name="grass_albedo008_grass_0"
                geometry={nodes.grass_albedo008_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo009"
              position={[181.184, -1.329, -567.773]}
              rotation={[-0.256, -0.352, -0.051]}
              scale={[53.735, 63.238, 53.735]}>
              <mesh
                name="grass_albedo009_grass_0"
                geometry={nodes.grass_albedo009_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo010"
              position={[455.147, 15.671, -91.056]}
              rotation={[0.026, -0.359, 0.029]}
              scale={[53.735, 63.238, 53.735]}>
              <mesh
                name="grass_albedo010_grass_0"
                geometry={nodes.grass_albedo010_grass_0.geometry}
                material={materials.grass}
              />
            </group>
            <group
              name="grass_albedo011"
              position={[227.943, -8.14, 351.951]}
              rotation={[0.138, 0.206, -0.069]}
              scale={[57.155, 34.307, 57.142]}>
              <mesh
                name="grass_albedo011_grass_0"
                geometry={nodes.grass_albedo011_grass_0.geometry}
                material={materials.grass}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>

  );
};

export default ModelMapDeforestation3D; // Exporta el componente TrashCan para ser utilizado en otras partes de la aplicación

// Precarga el modelo 3D para mejorar el rendimiento y reducir el tiempo de carga
useGLTF.preload("/model3D/forest.glb");
