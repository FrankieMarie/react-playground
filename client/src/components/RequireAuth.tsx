import { useUser } from '@clerk/clerk-react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireAuth = () => {
  // const { login } = useAuthContext
  const { user, isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  if (isLoaded && !user && !isSignedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isLoaded && user && isSignedIn) {
    return <Outlet />;
  }

  return <></>;
};
