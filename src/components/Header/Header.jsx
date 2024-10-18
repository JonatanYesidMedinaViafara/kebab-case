import "./Header.css"; // Importa los estilos del archivo Header.css
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom para la navegación

// Definición del componente Header como una función de React
const Header = () => {
  return (
    // Contenedor principal con la clase "header"
    <div className="header">
      <header>
        <nav>
          <ul>
            {/* Cada <li> contiene un enlace a diferentes rutas usando el componente Link */}
            <li>
              {/* Link a la página de login */}
              <Link to="/login">login</Link>
            </li>
            <li>
              {/* Link a la página de inicio */}
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              {/* Link a la página de erosión */}
              <Link to="/soil-erosion">erosión</Link>
            </li>
            <li>
              {/* Link a la página de reciclaje */}
              <Link to="/recycling">3D</Link>
            </li>
            <li>
              {/* Link al quiz */}
              <Link to="/quiz">quiz</Link>
            </li>
            <li>
              {/* Link a la pagina afsr */}
              <Link to="/management">residuos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

// Exporta el componente para que pueda ser utilizado en otros lugares de la aplicación
export default Header;
