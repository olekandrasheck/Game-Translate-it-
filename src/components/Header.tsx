import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav className="nav-bar">
      <ul className="header-ul">
        <li>
          <Link to="/" className="header-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/listOfWords" className="header-link">
            List of words
          </Link>
        </li>
        <li>
          <Link to="/game" className="header-link">
            Game
          </Link>
        </li>
      </ul>
    </nav>
  );
};
