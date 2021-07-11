import React, { createContext, useCallback, useState, useContext } from 'react';
import {decode} from 'jsonwebtoken'
import api from '../services/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('BGP:token');
    const user = localStorage.getItem('BGP:user');

    if(token){
      const { exp } = decode(token);
      if (Date.now() >= exp * 1000) {
        return false;
    }
    }
    

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {};
  });
  const signOut = useCallback(() => {
    localStorage.removeItem('BGP:token');
    localStorage.removeItem('BGP:user');
    setData({});
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/auth', { user: email, password:password });
    const { token, user } = response.data;
    localStorage.setItem('BGP:token', token);
    localStorage.setItem('BGP:user', JSON.stringify(user));
    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const updateUser = useCallback(
    (user) => {
      localStorage.setItem('BGP:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token, setData],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('use auth must be used within an AuthProvider');
  }
  return context;
}
