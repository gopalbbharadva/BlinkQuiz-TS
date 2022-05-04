import { useAuth } from "../../contexts/AuthContext";
import "./Profile.css";

export const ProfilePage = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="profile-container">
      <div className="profile-info pd-lg mg-lg flex-center flex-dir-col">
        <p>{user?.email}</p>
        <button
          onClick={logOut}
          className="btn is-outline mg-top-1 fs-btw-ml bg-transparent"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
