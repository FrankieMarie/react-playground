import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface Props {
  allowedRoles?: string[];
}

export const RequireAuth = ({ allowedRoles }: Props) => {
  const auth = useAuth();
  const location = useLocation();

  return auth?.user?.roles?.find((role: string) =>
    allowedRoles?.includes(role)
  ) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
