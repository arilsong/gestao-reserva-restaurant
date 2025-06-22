import { Client } from '@/interfaces/client';
import { Employee } from '@/interfaces/employee';
import api from '@/service/api/api';
import { AUTH_ENDPOINTS } from '@/service/api/endpoints';
import axios from 'axios';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


// Definindo a interface para o contexto
interface AuthContextType {
  user: Client | Employee;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
}

// Criando o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hook personalizado para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Definindo as props do AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Client | Employee | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Verificar se o usuário está autenticado ao carregar a aplicação
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async (): Promise<void> => {
    try {
      const response = await fetch('/api/auth/me', {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const userData: Client | Employee = await response.json();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Erro ao verificar status de autenticação:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {

      const response = await api.post(AUTH_ENDPOINTS.LOGIN,{ email, password })

      if (response.status == 200) {
        const userData: Client | Employee = await response.data.user;
        setUser(userData);
        return { success: true };
      } else {
        const error: { message: string } = await response.data;
        return { success: false, error: error.message };
      }
    } catch (error) {
      return { success: false, error: 'Erro de conexão' };
    }
  };
  

  const logout = async (): Promise<void> => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    } finally {
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};