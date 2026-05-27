import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import { checkPermission } from '../utils/auth';

const ProtectedRoute = ({ children, requiredPermission }) => {
  const { user } = useAuthStore();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredPermission && !checkPermission(user.role, requiredPermission)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
};

export default ProtectedRoute;