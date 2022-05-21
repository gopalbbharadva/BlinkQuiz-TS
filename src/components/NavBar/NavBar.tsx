import "./NavBar.css";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineLeaderboard } from "react-icons/md";
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
        </div>
      </div>
      <div className="nav-right-part flex-center">
        <Link to="/leaderboard">
          <p className="pointer profile-icon">
            <MdOutlineLeaderboard className="fs-lg" />
          </p>
        </Link>
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
