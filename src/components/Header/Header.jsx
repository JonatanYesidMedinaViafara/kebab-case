import "./Header.css"; // Importa los estilos del archivo Header.css
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom para la navegación
import useAuthStore from "../.././stores/use-auth-store";

// Definición del componente Header como una función de React
const Header = () => {
  const { logout } = useAuthStore(); // Accede a la función logout desde el store

  const handleLogout = () => {
    logout(); // Llama a la función logout cuando se haga clic en "Cerrar sesión"
  };


  return (
    // Contenedor principal con la clase "header"
    <div className="header">
      <header>
        <nav>
          <ul>
            {/* Cada <li> contiene un enlace a diferentes rutas usando el componente Link */}
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li className="dropdown">
              <Link to="/map" className="dropbtn">Mapa</Link>
              <div className="dropdown-content">
                <Link to="/soil-erosion">Erosión</Link>
                <Link to="/management">Residuos</Link>
                <Link to="/biodiversity">perdida</Link>
                <Link to="/deforestation">deforestacion</Link>
              </div>
            </li>
            <li>
              <Link to="/recycling">3D</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <div id="perfil">
              <li className="dropdown">
                <Link to="#profile" className="dropbtn">Perfil</Link>
                <div className="dropdown-content">
                  <Link to="/login">Mi perfil</Link>
                  <Link to="#logout" onClick={handleLogout}>Cerrar sesión</Link>
                </div>
              </li>
            </div>

            <div id="nosotros">
              <li className="dropdown">
                <Link to="#profile" className="dropbtn">nosotros</Link>
              </li>
            </div>

            
          </ul>
        </nav>
      </header>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otros lugares de la aplicación
export default Header;
