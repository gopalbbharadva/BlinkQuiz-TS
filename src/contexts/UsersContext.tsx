import { DocumentData, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { usersRef } from "../firebase/FirebaseConfig";
import { ChildrenProps } from "../types/ReactEvents.types";


type UsersContextTypes = {
  users: DocumentData;
  setUsers: React.Dispatch<React.SetStateAction<DocumentData[]>>;
  getUsers: () => Promise<void>;
};

const UsersContext = createContext({} as UsersContextTypes);

const UsersProvider = ({ children }: ChildrenProps) => {
  const [users, setUsers] = useState<DocumentData[]>([]);

  const getUsers = async () => {
    try {
      const res = await getDocs(usersRef);
      const usersArray = res.docs.map((user) => ({
        ...user.data(),
        id: user.id,
      }));
      setUsers(usersArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UsersContext.Provider value={{ users, setUsers, getUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

const useAllUsers = () => useContext(UsersContext);

export { UsersProvider, useAllUsers };
