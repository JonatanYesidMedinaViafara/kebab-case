import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/home"> Inicio </Link>
            </li>
            <li>
              <Link to="/recycling">3D</Link>
            </li>
            <li>
              <Link to="/quiz">quiz</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
