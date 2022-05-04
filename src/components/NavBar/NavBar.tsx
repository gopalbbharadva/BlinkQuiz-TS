import "./NavBar.css";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export const NavBar = () => {
  const { user } = useAuth();

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
          {user?.email ? (
            <Link to="/result">
              <p className="rules-link pointer">Result</p>
            </Link>
          ) : (
            <Link to="/login">
              <p className="rules-link pointer">Result</p>
            </Link>
          )}
        </div>
      </div>
      <div className="nav-right-part flex-center">
        {user?.email ? (
          <Link to="/profile">
            <p className="pointer profile-icon">
              <FaRegUser className="fs-lg" />
            </p>
          </Link>
        ) : (
          <Link to="/login">
            <p className="pointer profile-icon">
              <FaRegUser className="fs-lg" />
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
};
