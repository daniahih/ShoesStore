import { Link } from "react-router-dom";
import "./MainNavbar.css";
const MainNavBar = () => {
  return (
    <header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/shoes"> Shoes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
