import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  Auth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "../types/ReactEvents.types";
import {
  AuthUser,
  ContextProps,
} from "../types/ContextTypes/AuthContext.types";
import { auth } from "../firebase/FirebaseConfig";

export const AuthContext = createContext({} as ContextProps);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState({} as AuthUser);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);

  setTimeout(() => {
    setShowLoader(false);
  }, 1500);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser({ email: currentUser?.email });
      setIsLoading(false);
    });
    return unsubscribe;
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
