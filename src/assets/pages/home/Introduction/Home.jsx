import Header from "../../Header/Header";
import Fondo from "./fondo";
import "./Home.css";
import Earth3d from "./models/Earth3d";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Fondo />
      <h1 className="title-earth">Tierra</h1>
      <div className="containerhome">
        <Earth3d className="container-3d-tierra" />
        <div className="container-home">
          <div className="text-container">
            <p style={{ color: "#404040" }}>
              La Tierra enfrenta graves desafíos ambientales, como la deforestación, la erosión del suelo
              y la pérdida de biodiversidad, en gran parte causados por actividades humanas. Estos problemas
              no solo dañan el medio ambiente, sino que también amenazan el bienestar de las futuras generaciones.
              Además, el manejo inadecuado de residuos contamina ecosistemas y afecta la calidad de vida en muchas
              comunidades. Esta página explora cómo estos problemas están conectados, analiza sus causas y
              consecuencias, y propone soluciones prácticas para reducir su impacto. Aunque el planeta aún puede
              regenerarse, es esencial que tomemos medidas ahora para protegerlo.
            </p>


            <div className="btn">
              <div className="wrapper">
                <li className="start-button">
                  <span className="start-icon">🗺️</span>
                  <Link to="/map" className="start-button-title">Mapa</Link>
                </li>
              </div>
            </div>



          </div>
        </div>

      </div>

    </>
  );
};

export default Home;
