// usePermissions.js
import { useAuth } from '../../context/AuthContext';

export const usePermissions = () => {
  const { user, isAuthenticated } = useAuth();

  const hasRole = (role) => {
    return isAuthenticated && user?.role === role;
  };

  const hasPermission = (permission) => {
    return isAuthenticated && user?.permissions?.includes(permission);
  };

  const hasAnyRole = (roles) => {
    return isAuthenticated && roles.includes(user?.role);
  };

  const hasAnyPermission = (permissions) => {
    return isAuthenticated && permissions.some(permission => 
      user?.permissions?.includes(permission)
    );
  };

  const canAccess = (requiredRoles = [], requiredPermissions = []) => {
    if (!isAuthenticated) return false;
    
    const hasRequiredRole = requiredRoles.length === 0 || hasAnyRole(requiredRoles);
    const hasRequiredPermission = requiredPermissions.length === 0 || hasAnyPermission(requiredPermissions);
    
    return hasRequiredRole && hasRequiredPermission;
  };

  return {
    hasRole,
    hasPermission,
    hasAnyRole,
    hasAnyPermission,
    canAccess,
    isAdmin: hasRole('admin'),
    isModerator: hasRole('moderator'),
    isUser: hasRole('user'),
  };
};