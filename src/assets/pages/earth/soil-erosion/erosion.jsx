import Header from "../../../../components/Header/Header";
import "./erosion.css";

const Erosion = () => {
    return (
        <>
            <Header />
            <div className="home-erosion">
                <h1 className="tituloPrincipal">Erosión del Suelo: Un Problema Global</h1>

                <div className="seccion">
                    <h3 className="tituloSeccion">¿Cómo se produce la erosión del suelo?</h3>
                    <ul>
                        <li className="elementoLista"><strong>Erosión hídrica:</strong> El agua de lluvia o de los ríos puede arrastrar las partículas del suelo, especialmente si el terreno está inclinado o no está cubierto por vegetación.</li>
                        <li className="elementoLista"><strong>Erosión eólica:</strong> El viento puede transportar las partículas del suelo, especialmente en áreas secas y áridas.</li>
                        <li className="elementoLista"><strong>Erosión por gravedad:</strong> La fuerza de la gravedad puede hacer que las partículas del suelo se desprendan de las laderas y se desplacen hacia abajo.</li>
                    </ul>
                </div>

                <div className="seccion">
                    <h3 className="tituloSeccion">Consecuencias de la erosión del suelo</h3>
                    <ul>
                        <li className="elementoLista"><strong>Pérdida de fertilidad del suelo:</strong> La capa superior del suelo es la más fértil, por lo que su pérdida reduce la capacidad del suelo para producir alimentos y otros productos agrícolas.</li>
                        <li className="elementoLista"><strong>Contaminación del agua:</strong> Las partículas del suelo erosionado pueden contaminar las aguas superficiales y subterráneas, lo que afecta la calidad del agua potable y la vida acuática.</li>
                        <li className="elementoLista"><strong>Desertificación:</strong> La erosión del suelo puede contribuir a la desertificación, un proceso que convierte las tierras fértiles en desiertos.</li>
                        <li className="elementoLista"><strong>Pérdida de biodiversidad:</strong> La erosión del suelo puede destruir los hábitats de las plantas y los animales, lo que lleva a la pérdida de biodiversidad.</li>
                    </ul>
                </div>

                <div className="seccion">
                    <h3 className="tituloSeccion">¿Cómo podemos prevenir la erosión del suelo?</h3>
                    <ul>
                        <li className="elementoLista"><strong>Prácticas agrícolas sostenibles:</strong> La rotación de cultivos, la agricultura de conservación y el uso de cultivos de cobertura ayudan a proteger el suelo de la erosión.</li>
                        <li className="elementoLista"><strong>Manejo de pastos:</strong> Evitar el pastoreo excesivo y la sobrecarga de los pastizales ayuda a mantener la cobertura vegetal y a proteger el suelo.</li>
                        <li className="elementoLista"><strong>Reforestación:</strong> Plantar árboles en áreas degradadas ayuda a proteger el suelo de la erosión y a mejorar la calidad del agua.</li>
                        <li className="elementoLista"><strong>Construcción de terrazas:</strong> Las terrazas ayudan a reducir la velocidad del agua de lluvia y a evitar la erosión.</li>
                        <li className="elementoLista"><strong>Manejo de cuencas hidrográficas:</strong> Controlar el flujo de agua en las cuencas hidrográficas ayuda a reducir la erosión y a mejorar la calidad del agua.</li>
                    </ul>
                </div>

                <div className="conclusion">
                    <p>La erosión del suelo es un problema grave que afecta a la salud de nuestro planeta. Es importante tomar medidas para prevenir la erosión del suelo y proteger nuestros recursos naturales.</p>
                </div>
            </div>
        </>
    );
};

export default Erosion;
