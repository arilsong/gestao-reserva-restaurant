// ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, loading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  /* if (!isAuthenticated) {
    console.log(location.pathname);
    if(location.pathname == "/restaurante/dashboard"){
        return <Navigate to="/restaurante/login" state={{ from: location }} replace />;
    }
    // Redireciona para login, salvando a página atual
    return <Navigate to="/cliente/login" state={{ from: location }} replace />;
    
  } */

  // Verificação de autorização por papel/role
  if (requiredRole && user.roles !== requiredRole) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Acesso Negado</h2>
          <p className="text-gray-600">Você não tem permissão para acessar esta página.</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;