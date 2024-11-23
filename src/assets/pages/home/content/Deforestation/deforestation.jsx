import React from 'react';
import Header from "../../../header/Header.jsx";
import "./deforestation.css";
import AnimationCanvas from './illustrations_3D/illustration_3D_1.jsx';
import SolutionsScene from "./illustrations_3D/illustration_3D_4.jsx";
import DeforestationScene from './illustrations_3D/ilustration_3D_2.jsx';


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
import reflexion_4 from './image/reflexion_4.jpg';
import solucion_1 from './image/solucion_1.jpg';
import solucion_2 from './image/solucion_2.jpg';
import solucion_3 from './image/solucion_3.jpg';
import solucion_4 from './image/solucion_4.jpg';
import solucion_5 from './image/solucion_5.jpg';

const Deforestation = () => {
  return (
    <>
      <Header />
      
      
      <h1 className="deforestation_title">Guia de perdida de Deforestación</h1>

        {/* Sección 0 - Introducción */}
        <section className="section">
        <h2 className="deforestation_sub_title">0. Introducción</h2>
        
        <div className="animation-container" style={{ height: '400px' }}>
        <AnimationCanvas />
        </div>
       {/* <div>
        <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <TreesComponent />
        </Canvas>
        </div>*/}
        <ul className="section-points">
          <li>La deforestación es el proceso mediante el cual se eliminan extensas áreas de bosques o masas 
            forestales, principalmente como resultado de actividades humanas, con el fin de utilizar el suelo
             para otros propósitos, como la agricultura, la ganadería, la expansión urbana, la minería y la 
             explotación maderera. Este fenómeno implica la tala, quema o limpieza de árboles y vegetación 
             en un área determinada, lo que ocasiona la pérdida del ecosistema forestal. Los bosques, 
             que cubren aproximadamente el 31% de la superficie terrestre del planeta, desempeñan un papel 
             vital en la regulación del clima, el mantenimiento de la biodiversidad y la protección de los suelos.</li>
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
        <h2 className="deforestation_sub_title">1. Causas</h2>

        <div className="animation-container" style={{ height: '400px' }}>
        {/* Animación 3D de introducción */}
        <DeforestationScene />
      </div>

        <ul className="section-points">
          <li>Agricultura intensiva: Se eliminan grandes áreas de bosque para cultivar productos agrícolas, 
            especialmente monocultivos como la soja o el aceite de palma.</li>
          <li>Ganadería: Se tala bosque para crear pastizales para el ganado.</li>
          <li>Urbanización: La expansión de ciudades y la construcción de infraestructuras implican la eliminación de bosques.</li>
          <li>Tala ilegal y comercial: La madera de los árboles se utiliza para fabricar productos madereros y para combustible</li>
          <li>Minería: La extracción de recursos minerales puede implicar la destrucción de áreas forestales.</li>
          <li>Incendios forestales (algunos inducidos): En ocasiones, los incendios son provocados para limpiar áreas rápidamente.</li>
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
        <h2 className="deforestation_sub_title">2. Consecuencias</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
       
        </div>
        <ul className="section-points">
          <h3> Pérdida de biodiversidad</h3>
        <li>Los bosques son el hogar de aproximadamente el 80% de la biodiversidad terrestre del planeta. 
          Al destruirlos, muchas especies de plantas, animales e insectos pierden su hábitat natural, 
          lo que lleva a una disminución en las poblaciones e incluso extinciones. La desaparición de estas
           especies puede alterar todo el ecosistema, ya que cada organismo juega un rol en la cadena alimentaria
            y en el equilibrio ecológico</li>
          <li>Por ejemplo, la desaparición de insectos polinizadores puede afectar la reproducción de plantas, 
            mientras que la extinción de depredadores puede provocar sobrepoblación de otras especies.</li>
          <h3>Erosión del suelo</h3>
          <li>Las raíces de los árboles y otras plantas ayudan a mantener el suelo en su lugar, evitando que sea 
            arrastrado por la lluvia o el viento. Sin vegetación, los suelos se vuelven más vulnerables a la erosión,
             lo que puede llevar a la pérdida de la capa fértil del suelo (humus), esencial para el crecimiento de plantas 
             y la agricultura</li>
             <li>esto afecta negativamente a la producción de alimentos y la capacidad del suelo para retener agua, 
              lo que a su vez provoca sequías y desertificación. Además, la erosión puede causar deslizamientos de 
              tierra y sedimentación en ríos, lo que afecta tanto a los ecosistemas acuáticos como a la disponibilidad 
              de agua potable</li>
              <h3>Alteración del ciclo del agua</h3>
              <li>Los árboles juegan un papel crucial en el ciclo del agua. Absorben agua a través de sus raíces y la                 liberan al aire mediante la transpiración, contribuyendo a la formación de nubes y la regulación de las                 precipitaciones. La deforestación interrumpe este ciclo, lo que puede provocar cambios en los patrones de lluvia.</li>
              <li>Esto puede resultar en menos lluvias en algunas áreas, agravando las sequías, mientras que en otras, sin la cobertura                 forestal para absorber el agua, puede aumentar la frecuencia y gravedad de las inundaciones. También se afecta la recarga
               de acuíferos subterráneos, reduciendo la disponibilidad de agua dulce.</li>
            <h3>Impacto en comunidades locales</h3>
            <li>Muchas comunidades rurales e indígenas dependen directamente de los bosques para su supervivencia, obteniendo alimentos,
               medicinas, agua, leña y materiales de construcción. La deforestación no solo pone en riesgo estos recursos, 
               sino que también amenaza la cultura y las tradiciones de estos pueblos.</li>
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
        <h2 className="deforestation_sub_title">3. Soluciones</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}
          <SolutionsScene/>
        </div>
        <ul className="section-points">
          <h3>Reforestación y forestación</h3>
        <li> Plantar árboles para restaurar áreas degradadas o crear nuevos bosques puede ayudar a mitigar los efectos de la deforestación.</li>
          <h3>Conservación y manejo sostenible de los bosques</h3>
          <li>Implementar políticas y prácticas que aseguren la explotación responsable de los recursos forestales sin agotar o destruir el ecosistema.</li>
          <h3>Promoción de la agricultura sostenible</h3>
          <li>La agricultura de tala y quema puede reemplazarse con prácticas agrícolas que preserven los bosques, como la agroforestería o la agricultura de conservación.</li>
          <h3>Protección de áreas naturales</h3>
          <li>Establecer áreas protegidas, reservas naturales y parques nacionales para evitar que se talen los bosques.</li>
          <h3>Promover el uso de productos sostenibles</h3>
          <li>Fomentar el consumo de productos certificados como sostenibles (por ejemplo, madera con certificación FSC) reduce la presión sobre los bosques. También, 
            usar materiales alternativos como el bambú o productos reciclados ayuda a disminuir la demanda de recursos forestales, promoviendo prácticas responsables 
            y cadenas de suministro transparentes.</li>
          <h3>Fortalecimiento de leyes y políticas ambientales</h3>
          <li>Implementar y hacer cumplir leyes más estrictas que regulen la tala ilegal y la conversión de tierras forestales es clave. Además, ofrecer incentivos económicos, 
            como pagos por servicios ambientales, anima a empresas y propietarios de tierras a adoptar prácticas de conservación y manejo forestal sostenible.</li>
            <section className="sectionf">
             <img src={solucion_1} />
             <img src={solucion_2} />
             <img src={solucion_3} />
             <img src={solucion_4} />
             <img src={solucion_5} />
             </section>
        </ul>
      </section>

     
        {/* Sección 4 - Reflexion */}
        <section className="section">
        <h2 className="deforestation_sub_title">4. Mensaje de Reflexion</h2>
        <div className="animation-container" style={{ height: '400px' }}>
          {/* Animación 3D de introducción */}

        </div>
        <ul className="section-points">
        <li>Mensaje de Reflexión</li>
        <section className="sectionf">
             <img src={reflexion_1} />
             <img src={reflexion_2} />
             <img src={reflexion_3} />
             <img src={reflexion_4} />

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

export default Deforestation; 

