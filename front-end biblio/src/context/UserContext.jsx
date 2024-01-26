import React, { createContext, useContext, useState } from 'react';
import PublieurApi from '../service/api/PublieurApi';

export const userStateContext = createContext({
  user: {},
  setUser: () => {},
  logout: () => {},
  login: (email, password) => {},
  setAuthenticated: () => {},
  setToken: () => {},
});

function UserContext({ children }) {
  const [user, setUser] = useState({ name: 'omaaaan' });
  const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'))

  const logout = () => {
    setUser({});
    setAuthenticated(false);
  };

  const login = async (email, password) => {
    return PublieurApi.login(email, password)
  }

  const setAuthenticated = (isAuthenticated) => {
    _setAuthenticated(isAuthenticated)
    window.localStorage.setItem('AUTHENTICATED', isAuthenticated)
  }

  const setToken = (token) => {
    window.localStorage.setItem('token', token);
  };

  return (
    <userStateContext.Provider
      value={{
        user,
        setUser,
        logout,
        authenticated,
        login,
        setToken,
        setAuthenticated, // Corrected function name
      }}
    >
      {children}
    </userStateContext.Provider>
  );
}

export default UserContext;

export const useUserContext = () => useContext(userStateContext);
