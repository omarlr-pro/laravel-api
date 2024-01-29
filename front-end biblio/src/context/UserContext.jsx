import React, { createContext, useContext, useState } from 'react';
import PublieurApi from '../service/api/PublieurApi';

export const userStateContext = createContext({
  user: {},
  setUser: () => {},
  logout: () => {},
  login: (email, password) => {},
  setAuthenticated: () => {},
  setToken: () => {},
  register: (name, email, password) => {},
  addBook: ({ name, text, description }) => {}, 
});

function UserContext({ children }) {
  const [user, setUser] = useState({ name: 'omaaaan' });
  const [authenticated, _setAuthenticated] = useState('true' === window.localStorage.getItem('AUTHENTICATED'));

  const logout = () => {
    setUser({});
    setAuthenticated(false);
  };

  const login = async (email, password) => {
    return PublieurApi.login(email, password);
  };

  const register = async (name, email, password) => {
    return PublieurApi.register(name, email, password);
  };

  const setAuthenticated = (isAuthenticated) => {
    _setAuthenticated(isAuthenticated);
    window.localStorage.setItem('AUTHENTICATED', isAuthenticated.toString());
  };

  const setToken = (token) => {
    window.localStorage.setItem('token', token);
  };

  const addBook = async ({ name, text, description }) => {
     return await PublieurApi.addBook({ name, text, description });
      console.log('Book added successfully');
  };

  const storedToken = window.localStorage.getItem('token');
  console.log('Stored Token:', storedToken);

  return (
    <userStateContext.Provider
      value={{
        user,
        setUser,
        logout,
        authenticated,
        login,
        register,
        setToken,
        setAuthenticated,
        addBook, 
      }}
    >
      {children}
    </userStateContext.Provider>
  );
}

export default UserContext;

export const useUserContext = () => useContext(userStateContext);
