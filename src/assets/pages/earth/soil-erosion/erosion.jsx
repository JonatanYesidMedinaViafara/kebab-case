import Header from "../../../../components/Header/Header";
import "./erosion.css";
import Background from "./prueba/Fondo";

const Erosion = () => {
    return (
        <>
            <Header />
            <div>
                <Background />
            </div>

            <div className="content-container">
                <h3 className="section-title">¿Cómo se produce la erosión del suelo?</h3>
                <div className="erosion-content erosion-grid">
                    {/* Contenedor principal para la erosión */}
                    <div className="erosion-card">
                        {/* Sección sobre cómo se produce la erosión */}
                        <div className="info-section">
                            <p>Erosión hídrica:</p>El agua de lluvia o de los ríos puede arrastrar las partículas del suelo, especialmente si el terreno está inclinado o no está cubierto por vegetación.
                        </div>
                    </div>
                    <div className="erosion-card">
                        {/* Sección sobre cómo se produce la erosión */}
                        <div className="info-section">
                            <p>Erosión eólica:</p>El viento puede transportar las partículas del suelo, especialmente en áreas secas y áridas.
                        </div>
                    </div>
                    <div className="erosion-card">
                        {/* Sección sobre cómo se produce la erosión */}
                        <div className="info-section">
                            <p>Erosión por gravedad:</p>La fuerza de la gravedad puede hacer que las partículas del suelo se desprendan de las laderas y se desplacen hacia abajo.
                        </div>
                    </div>
                </div>
            </div>

            {/* Sección de conclusión */}
            <div className="erosion-content">
                <div className="content-container">
                    <div className="info-section">
                        <h3 className="section-title">¿Cómo se produce la erosión del suelo?</h3>
                        <ul>
                            <li className="list-item"><strong>Erosión hídrica:</strong> El agua de lluvia o de los ríos puede arrastrar las partículas del suelo, especialmente si el terreno está inclinado o no está cubierto por vegetación.</li>
                            <li className="list-item"><strong>Erosión eólica:</strong> El viento puede transportar las partículas del suelo, especialmente en áreas secas y áridas.</li>
                            <li className="list-item"><strong>Erosión por gravedad:</strong> La fuerza de la gravedad puede hacer que las partículas del suelo se desprendan de las laderas y se desplacen hacia abajo.</li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <h3 className="section-title">Consecuencias de la erosión del suelo</h3>
                        <ul>
                            <li className="list-item"><strong>Pérdida de fertilidad del suelo:</strong> La capa superior del suelo es la más fértil, por lo que su pérdida reduce la capacidad del suelo para producir alimentos y otros productos agrícolas.</li>
                            <li className="list-item"><strong>Contaminación del agua:</strong> Las partículas del suelo erosionado pueden contaminar las aguas superficiales y subterráneas, lo que afecta la calidad del agua potable y la vida acuática.</li>
                            <li className="list-item"><strong>Desertificación:</strong> La erosión del suelo puede contribuir a la desertificación, un proceso que convierte las tierras fértiles en desiertos.</li>
                            <li className="list-item"><strong>Pérdida de biodiversidad:</strong> La erosión del suelo puede destruir los hábitats de las plantas y los animales, lo que lleva a la pérdida de biodiversidad.</li>
                        </ul>
                    </div>
                    <div className="info-section">
                        <h3 className="section-title">¿Cómo podemos prevenir la erosión del suelo?</h3>
                        <ul>
                            <li className="list-item"><strong>Prácticas agrícolas sostenibles:</strong> La rotación de cultivos, la agricultura de conservación y el uso de cultivos de cobertura ayudan a proteger el suelo de la erosión.</li>
                            <li className="list-item"><strong>Manejo de pastos:</strong> Evitar el pastoreo excesivo y la sobrecarga de los pastizales ayuda a mantener la cobertura vegetal y a proteger el suelo.</li>
                            <li className="list-item"><strong>Reforestación:</strong> Plantar árboles en áreas degradadas ayuda a proteger el suelo de la erosión y a mejorar la calidad del agua.</li>
                            <li className="list-item"><strong>Construcción de terrazas:</strong> Las terrazas ayudan a reducir la velocidad del agua de lluvia y a evitar la erosión.</li>
                            <li className="list-item"><strong>Manejo de cuencas hidrográficas:</strong> Controlar el flujo de agua en las cuencas hidrográficas ayuda a reducir la erosión y a mejorar la calidad del agua.</li>
                        </ul>
                    </div>
                </div>
                <div className="summary">
                    <p>La erosión del suelo es un problema grave que afecta a la salud de nuestro planeta. Es importante tomar medidas para prevenir la erosión del suelo y proteger nuestros recursos naturales.</p>
                </div>
            </div>

            {/* Efecto de burbujas de fondo */}
            <div className="background-effects">
                <div className="floating-bubbles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="bubble-animation"></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Erosion;
