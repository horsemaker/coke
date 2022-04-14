import { createContext, useContext, useState } from "react";
import { COKE_AUTH_USER_DATA, COKE_AUTH_USER_TOKEN } from "../constants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    status: localStorage.getItem(COKE_AUTH_USER_TOKEN) ? true : false,
    token: localStorage.getItem(COKE_AUTH_USER_TOKEN),
    user: JSON.parse(localStorage.getItem(COKE_AUTH_USER_DATA)),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
