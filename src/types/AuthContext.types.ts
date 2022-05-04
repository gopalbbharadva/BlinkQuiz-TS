import { Auth } from "firebase/auth";

export type AuthUser = {
  email: string | null | undefined;
};

export type ContextProps = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
  login: (auth: Auth, email: string, password: string) => Promise<{}>;
  signUp: (auth: Auth, email: string, password: string) => Promise<{}>;
  logOut: () => Promise<void>;
  showLoader: boolean;
  setShowLoader: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
