import React, { createContext, useState, useEffect } from "react";
import AuthService from "../services/AuthService";
// import { Spinner } from "react-bootstrap";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const respBool = AuthService.isAuthenticated();
    if (respBool) {
      setIsAuthenticated(respBool);
      AuthService.getUserProfile().then((res) => {
        setUser(res);
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
