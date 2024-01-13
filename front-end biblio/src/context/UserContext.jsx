import { createContext, useContext, useState } from "react";
import PublieurApi from "../service/api/PublieurApi";
import { useNavigate } from "react-router-dom";

export const stateContext = createContext({
  user: {},
  authenticated: false,
  setUser: () => {},
  logout: () => {},
  login: (email, password) => {},
  setAuthenticated: () => {
  },
  setToken: () => {},
});

function UserContext({ children }) {
  const [user, setUser] = useState({ name: 'oman' });
  const [authenticated, setAuthenticated] = useState(false);

  const logout = () => {
    setAuthenticated(false);
    setUser({});
  };

  const login = async (email, password) => {
    return PublieurApi.login(email, password)
  }

  const setToken = (token) => {
    // Handle storing token in localStorage or a more secure storage method
    window.localStorage.setItem('token', token);
  };

  return (
    <stateContext.Provider
      value={{
        user,
        setUser,
        logout,
        authenticated,
        login,
        setToken,
      }}
    >
      {children}
    </stateContext.Provider>
  );
}

export default UserContext;
export const useUsercontext = () => useContext(stateContext);
