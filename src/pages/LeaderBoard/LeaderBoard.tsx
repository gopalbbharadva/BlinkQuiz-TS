import { DocumentData } from "firebase/firestore";
import { useEffect } from "react";
import { useAllUsers } from "../../contexts/UsersContext";
import "./Leaderboard.css";

export const LeaderBoard = () => {
  const { users, getUsers } = useAllUsers();

  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="board-container flex-center">
      <div className="leader-board">
        <p className="fs-xlg align-center text-primary">Leader Board</p>
        {users?.map((user: DocumentData) => (
          <div className="user">
            <p>
              {user?.firstname}
              {user?.lastname}
            </p>
            <p>{user?.category}</p>
            <p>{user?.result}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
