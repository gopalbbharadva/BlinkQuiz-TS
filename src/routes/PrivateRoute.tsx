import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ChildrenProps } from "../types/ReactEvents.types";

export const PrivateRoute = ({ children }: ChildrenProps) => {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <>
      {user?.email ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};
