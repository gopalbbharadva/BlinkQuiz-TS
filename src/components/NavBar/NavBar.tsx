import "./NavBar.css";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navigation-bar pd-sm">
      <div className="nav-left-section">
        <span className="menu-icon">
          <i className="fas fa-bars"></i>
        </span>
        <div className="nav-link">
          <Link to="/">
            <p className="logo-link fs-xlg pointer">BlinkQuiz</p>
          </Link>
          <Link to="/result">
            <p className="rules-link pointer">Result</p>
          </Link>
        </div>
      </div>
      <div className="nav-right-part flex-center flex-dir-col">
        <Link to="/login">
          <p className="pointer profile-icon">
            <FaRegUser className="fs-lg" />
          </p>
        </Link>
      </div>
    </nav>
  );
};
