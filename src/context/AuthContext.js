import React, { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import AuthService from "../services/AuthService";

export const AuthContext = createContext();
// Adding this functionality to do the TESTS. (We wrap the useContext here as a hook.)
export const useMockContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const respBool = AuthService.isAuthenticated();
    if (respBool) {
      setIsAuthenticated(respBool);
      AuthService.getUserProfile()
        .then((res) => {
          setUser(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
