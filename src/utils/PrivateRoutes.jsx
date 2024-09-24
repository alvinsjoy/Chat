import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './hooks/authHook';

const PrivateRoutes = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (location.pathname === '/verify') {
    return <Outlet />;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user && !user.emailVerification) {
    return <Navigate to="/verify" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
