import Header from "../../../header/Header";
import "./biodiversity.css";
import BiodiversityScene from './illustrations_3D/illustration_3D_1';
import Scene from "./illustrations_3D/ilustration_3D_2";
import Scene3 from "./illustrations_3D/ilustration_3D_3";
import BiodiversityLossScene from "./loss_RigidBody";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";


import causa_1 from './image/causa_1.jpg';
import causa_2 from './image/causa_2.jpg';
import causa_3 from './image/causa_3.jpg';
import causa_4 from './image/causa_4.jpg';
import causa_5 from './image/causa_5.jpg';
import causa_6 from './image/causa_6.jpg';
import consecuencia_1 from './image/consecuencia_1.jpg';
import consecuencia_2 from './image/consecuencia_2.jpg';
import consecuencia_3 from './image/consecuencia_3.jpg';
import consecuencia_4 from './image/consecuencia_4.jpg';
import introduction_1 from './image/introduction_1.jpg';
import introduction_2 from './image/introduction_2.jpg';
import introduction_3 from './image/introduction_3.jpg';
import introduction_4 from './image/introduction_4.jpg';
import introduction_5 from './image/introduction_5.jpg';
import reflexion_1 from './image/reflexion_1.jpg';
import reflexion_2 from './image/reflexion_2.jpg';
import reflexion_3 from './image/reflexion_3.jpg';
import solucion_1 from './image/solucion_1.jpg';
import solucion_2 from './image/solucion_2.jpg';
import solucion_3 from './image/solucion_3.jpg';
import solucion_4 from './image/solucion_4.jpg';
import solucion_5 from './image/solucion_5.jpg';


const Biodiversity = () => {
  return (
    <>
      <Header />
      <h1 className="biodiversity_title">Guia de perdida de biodiversidad</h1>

        {/* Sección 0 - Introducción */}
        <section className="section">
        <h2 className="biodiversity_sub_title">0. Introducción</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
        {/*<BiodiversityScene/>"*/}
        <BiodiversityScene/>

        </div>

        <div>
        <Canvas
              camera={{ position: [-10, 10, -10], fov: 60 }}>
             {/*} <Dog position={[-15, 6.8, -7]} />*/}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/* Envuelve el bosque en Physics */}
            <Physics>
              
              <BiodiversityLossScene/>
            </Physics>
          </Canvas>
        </div>

        <ul className="section-points">
          <li>La biodiversidad hace referencia a la variedad de todas las formas de vida en la Tierra, 
            incluyendo plantas, animales, hongos, microorganismos, y los ecosistemas que los sustentan. 
            Esta diversidad biológica es esencial para el equilibrio y el funcionamiento de los ecosistemas, 
            ya que permite que los procesos naturales, como la polinización, el ciclo de nutrientes, 
            la regulación del clima y la purificación del agua, ocurran de manera efectiva.</li>
            <section className="sectionf">
             <img src={introduction_1} />
             <img src={introduction_2} />
             <img src={introduction_3} />
             <img src={introduction_4} />
             <img src={introduction_5} />
             </section>
        </ul>
      </section>

        {/* Sección 1 - causas */}
        <section className="section">
        <h2 className="biodiversity_sub_title">1. Causas</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
        <Scene/>
        </div>
        <ul className="section-points">
          <h3>Cambio climático</h3>
          <li>Las alteraciones en el clima global están modificando los hábitats y afectando a las especies, lo que provoca extinciones</li>
          <h3>Contaminación</h3>
          <li>Los químicos tóxicos, plásticos, residuos industriales y pesticidas degradan los ecosistemas y matan especies.</li>
          <h3>Sobreexplotación de recursos naturales</h3>
          <li>La caza excesiva, la pesca desmedida y la explotación insostenible de recursos.</li>
          <h3>Deforestación y cambio en el uso del suelo</h3>
          <li>La destrucción de hábitats naturales debido a la expansión agrícola, urbanización, minería y tala indiscriminada.</li>
          <h3>Fragmentación del hábitat</h3>
          <li>La división de ecosistemas grandes en áreas más pequeñas y aisladas, lo que afecta la supervivencia de las especies.</li>
          <h3>Especies invasoras</h3>
          <li>La introducción de especies no autóctonas que desplazan a las nativas.</li>
          <section className="sectionf">
             <img src={causa_1} />
             <img src={causa_2} />
             <img src={causa_3} />
             <img src={causa_4} />
             <img src={causa_5} />
             <img src={causa_6} />
             </section>
        </ul>
      </section>

        {/* Sección 2 - Consecuencias */}
        <section className="section">
        <h2 className="biodiversity_sub_title">2. Consecuencias</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
        <Scene3/>
        </div>
        <ul className="section-points">
          <h3>Desestabilización de los ecosistemas</h3>
          <li>Los ecosistemas son redes complejas donde todas las especies, desde los microorganismos hasta los grandes depredadores, 
            cumplen un papel esencial. La desaparición de una o varias especies puede interrumpir el equilibrio de los ecosistemas 
            y afectar los procesos ecológicos vitales</li>
          <li>Polinización: La pérdida de insectos polinizadores, como las abejas, pone en riesgo la reproducción de muchas plantas,
             incluidas aquellas que producen alimentos para los seres humanos.</li>
          <li>Ciclo de nutrientes: Los organismos del suelo, como los hongos y bacterias, ayudan a descomponer materia orgánica y
             reciclar nutrientes; su desaparición afecta la fertilidad del suelo.</li>
          <li>Regulación de plagas: Los depredadores naturales controlan las poblaciones de plagas. Sin ellos, las plagas pueden 
            proliferar sin control, afectando cultivos y otros recursos.</li>
            <h3> _______________________________</h3>
          <h3>Pérdida de servicios ecosistémicos</h3>
          <li>La biodiversidad proporciona servicios ecosistémicos, que son los beneficios directos e indirectos que obtenemos 
            de la naturaleza. La pérdida de biodiversidad reduce la capacidad de los ecosistemas para ofrecer estos servicios, como:</li>
            <ul class="sublist">
            <li>Producción de alimentos: Los ecosistemas saludables sostienen la agricultura y la pesca. La degradación de estos sistemas 
                puede llevar a una disminución de la productividad agrícola y pesquera, afectando la seguridad alimentaria.</li>
            <li>Regulación del clima: Los ecosistemas ricos en biodiversidad, como los bosques y los océanos, ayudan a regular el clima al 
                absorber dióxido de carbono. La deforestación y la degradación de ecosistemas disminuyen la capacidad de la Tierra para 
                mitigar el cambio climático.</li>
            <li>Purificación del agua: Los humedales y bosques filtran el agua y la purifican de contaminates Su destrucción reduce la 
                calidad del agua disponible para el consumo humano.</li>
            <li>Recursos medicinales: Muchas medicinas provienen de plantas y animales. La extinción de especies disminuye el potencial 
                de encontrar nuevos compuestos para tratar enfermedades.</li>
            </ul>
            
            <h3>Impacto en la salud humana</h3>
            <li>Emergencia de nuevas enfermedades: La degradación de hábitats naturales y la disminución de especies alteran los equilibrios
                entre patógenos y sus huéspedes, aumentando el riesgo de que enfermedades infecciosas (como el COVID-19 o el ébola)
                salten de los animales a los humanos.</li>
            <li>Aire y agua contaminados: La destrucción de ecosistemas que regulan la calidad del aire y el agua puede aumentar los niveles
                 de contaminación, afectando la salud respiratoria y general de las poblaciones humanas.</li>

            <h3>Impacto en la economía</h3>
            <li>Muchos sectores económicos dependen directamente de los recursos naturales, como la agricultura, la pesca, el turismo 
                y la medicina. La pérdida de biodiversidad puede provocar:</li>
            <li>Reducción de la productividad agrícola y pesquera: Las prácticas agrícolas y pesqueras sostenibles dependen de la biodiversidad.
                La disminución de especies polinizadoras, la erosión del suelo y la sobreexplotación de recursos pesqueros pueden afectar la 
                producción, aumentando los costos y reduciendo los beneficios económicos.</li>
            <li>Afectación al turismo: Los destinos turísticos naturales, como parques nacionales, arrecifes de coral o selvas tropicales, 
                pierden atractivo a medida que la biodiversidad disminuye. Esto afecta las economías locales que dependen del turismo ecológico.</li>
            
            <h3>Extinciones masivas</h3>
            <li>Actualmente, el mundo está experimentando una sexta extinción masiva, impulsada principalmente por la actividad humana. 
                La tasa de extinción actual es entre 100 y 1,000 veces mayor que la tasa natural, lo que significa que estamos perdiendo 
                especies a un ritmo alarmante.</li>
            <li>La pérdida de biodiversidad disminuye la resiliencia de los ecosistemas, es decir, su capacidad de recuperarse de perturbaciones 
                como incendios forestales, sequías o tormentas.</li>
            <li>Esta extinción masiva no solo afecta a los ecosistemas, sino que también pone en riesgo la estabilidad y bienestar de la humanidad a largo plazo.</li>

            <h3>Cambio climático local y global</h3>
            <li>Los ecosistemas equilibrados ayudan a regular el clima. La deforestación y la destrucción de ecosistemas ricos en carbono, como los bosques y 
                los humedales, liberan grandes cantidades de gases de efecto invernadero, lo que contribuye al calentamiento global. Además, los cambios locales en
                la biodiversidad pueden alterar el clima local, por ejemplo, modificando los patrones de lluvia o aumentando las temperaturas en zonas urbanas y rurales</li>

            <h3>Disminución de la resiliencia ante desastres naturales</h3>
            <li>Los ecosistemas saludables pueden actuar como barreras naturales frente a desastres naturales. Por ejemplo, los manglares y los arrecifes de coral
                protegen las costas de la erosión y reducen la fuerza de las tormentas y tsunamis. La degradación de estos ecosistemas expone a las comunidades 
                humanas a un mayor riesgo de inundaciones, tormentas y desastres climáticos.</li>
                <section className="sectionf">
             <img src={consecuencia_1} />
             <img src={consecuencia_2} />
             <img src={consecuencia_3} />
             <img src={consecuencia_4} />
             </section>

        </ul>
      </section>

      {/* Sección 3 - Soluciones */}
      <section className="section">
        <h2 className="biodiversity_sub_title">3. Soluciones</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
        
        </div>
        <ul className="section-points">
          <h3>Control de especies invasoras</h3>
          <li>
            Prevención de la introducción de especies no nativas: Implementar regulaciones más estrictas sobre la importación de 
            plantas, animales y otros organismos que puedan convertirse en especies invasoras
            <ul className="sublist">
              <li>Ejemplo: Programas de vigilancia y control en puertos y aeropuertos para evitar la introducción accidental de especies invasoras.</li>
            </ul>
          </li>
          <li>
            Erradicación y control: Implementar programas de control para eliminar o gestionar las especies invasoras que ya están presentes
            y que representan una amenaza para los ecosistemas nativos.
            <ul className="sublist">
              <li>Ejemplo: El control de especies invasoras como ratas y gatos en islas, donde han devastado poblaciones de aves nativas.</li>
            </ul>
          </li>
          
          <h3>Combatir el cambio climático</h3>
          <li>
            Reducción de emisiones de gases de efecto invernadero: Adoptar energías renovables (solar, eólica, hidroeléctrica), 
            promover la eficiencia energética y reducir el uso de combustibles fósiles son esenciales para mitigar el cambio 
            climático, que es una de las principales causas de la pérdida de biodiversidad.
          </li>
          <li>
            Reforestación y conservación de bosques: Los bosques capturan dióxido de carbono, lo que contribuye a la 
            lucha contra el cambio climático. Reforestar y evitar la deforestación son estrategias clave para mitigar 
            el cambio climático y proteger la biodiversidad
          </li>
          
          <h3>Educación y concienciación</h3>
          <li>
            Sensibilización pública: Es vital educar a las personas sobre la importancia de la biodiversidad y cómo sus acciones 
            cotidianas afectan a los ecosistemas. Esto incluye reducir el consumo de productos que impactan negativamente al medio 
            ambiente, como productos derivados de la deforestación.
            <ul className="sublist">
              <li>Ejemplo: Campañas de concienciación sobre el uso de productos sostenibles, como evitar el uso de plásticos de
                  un solo uso o comprar productos con certificaciones ambientales.</li>
            </ul>
          </li>
          <li>
            Participación comunitaria: Fomentar la participación de las comunidades locales en la conservación de sus entornos 
            naturales. Las comunidades que dependen directamente de los recursos naturales suelen ser las mejores aliadas para 
            proteger la biodiversidad.
          </li>
          <li>Impacto y consecuencias futuras</li>
          <li>Reflexión final sobre la importancia de este tema</li>
          <section className="sectionf">
             <img src={solucion_1} />
             <img src={solucion_2} />
             <img src={solucion_3} />
             <img src={solucion_4} />
             <img src={solucion_5} />
             </section>
        </ul>
      </section>


     
        {/* Sección 4 - Reflexion*/}
        <section className="section">
        <h2 className="biodiversity_sub_title">4. Reflexion</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
     
        </div>
        <ul className="section-points">

        <li>Reflexion</li>

        <section className="sectionf">
             <img src={reflexion_1} />
             <img src={reflexion_2} />
             <img src={reflexion_3} />

             </section>
        </ul>
      </section>

     <button className="btn">
              <div className="wrapper">
                <a href="/quiz" className="inicio">INICIAR PARTIDA</a>
                {[...Array(6)].map((_, i) => (
                  <div className={`flower flower${i + 1}`} key={i}>
                    {[...Array(4)].map((_, j) => (
                      <div className={`petal ${["one", "two", "three", "four"][j]}`} key={j} />
                    ))}
                  </div>
                ))}
              </div>
            </button>

    </>
  );
};

export default Biodiversity;