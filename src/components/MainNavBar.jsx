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
            <Link to="/shoes"> New Arrivals</Link>
          </li>
          <li>Women</li>
          <li> Men</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavBar;
