import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/authHook';

const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user && !user.emailVerification) {
    return <Navigate to="/verify" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
