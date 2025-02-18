import React, { createContext, useState, useContext, useCallback } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('@BaseRepo:user');
    const storedToken = localStorage.getItem('@BaseRepo:token');
    
    if (storedUser && storedToken) {
      api.defaults.headers.authorization = `Bearer ${storedToken}`;
      return JSON.parse(storedUser);
    }

    return null;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/login', { email, password });
      const { token, user: userData } = response.data;

      localStorage.setItem('@BaseRepo:token', token);
      localStorage.setItem('@BaseRepo:user', JSON.stringify(userData));
      
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userData);
    } catch (error) {
      console.error('Erro no login:', error);
      throw new Error(error.response?.data?.error || 'Erro ao fazer login');
    }
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    try {
      const response = await api.post('/register', { name, email, password });
      const { token, user: userData } = response.data;

      localStorage.setItem('@BaseRepo:token', token);
      localStorage.setItem('@BaseRepo:user', JSON.stringify(userData));
      
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userData);
    } catch (error) {
      console.error('Erro no registro:', error);
      throw new Error(error.response?.data?.error || 'Erro ao criar conta');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@BaseRepo:token');
    localStorage.removeItem('@BaseRepo:user');
    api.defaults.headers.authorization = '';
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 