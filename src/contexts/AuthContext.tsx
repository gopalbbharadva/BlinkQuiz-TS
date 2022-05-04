import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";
import "../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "../types/ReactEvents.types";
import { AuthUser, ContextProps } from "../types/AuthContext.types";

const auth = getAuth();
export const AuthContext = createContext({} as ContextProps);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState({} as AuthUser);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  setTimeout(() => {
    setShowLoader(false);
  }, 1500);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser({ email: currentUser?.email });
      setIsLoading(false);
    });
    setIsLoading(false);
  }, []);

  const login = (auth: Auth, email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = (auth: Auth, email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        signUp,
        logOut,
        isLoading,
        setIsLoading,
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
