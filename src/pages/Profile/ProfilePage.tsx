import { DocumentData } from "firebase/firestore";
import { useAllUsers, useAuth } from "../../contexts/contextExport";
import "./Profile.css";

export const ProfilePage = () => {
  const { user, logOut } = useAuth();
  const { users } = useAllUsers();
  const currentUser = users?.find(
    (item: DocumentData) => item.email === user?.email
  );
  

  return (
    <div className="profile-container">
      <div className="profile-info pd-lg mg-lg flex-center flex-dir-col">
        <p>
          {" "}
          Hey 👋 {currentUser?.firstname} {currentUser?.lastname}
        </p>
        <div className="avatar flex-center">
          <p className="fs-xlg">
            {currentUser?.firstname[0]}
            {currentUser?.lastname[0]}
          </p>
        </div>
        <p>{currentUser?.email}</p>

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
