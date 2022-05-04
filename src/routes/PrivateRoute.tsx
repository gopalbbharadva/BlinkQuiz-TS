import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ChildrenProps } from "../types/ReactEvents.types";

export const PrivateRoute = ({ children }: ChildrenProps) => {
  const { user, isLoading, setIsLoading } = useAuth();
  const location = useLocation();

  console.log(user)

  user?.email ? setIsLoading(false) : setIsLoading(true);

  return (
    <>
      {!isLoading ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};
