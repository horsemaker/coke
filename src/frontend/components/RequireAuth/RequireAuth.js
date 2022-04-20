import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

export const RequireAuth = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return auth.status ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};
