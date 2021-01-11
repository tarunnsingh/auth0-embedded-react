import React, { useContext } from "react";

const defaultValues = {
  isAuthenticated: true,
  user: {
    nickname: "",
    email: "",
    email_verified: false,
    picture: "",
    last_updated: "",
  },
  setUser: () => {},
  setIsAuthenticated: () => {},
};

const MockContext = React.createContext(defaultValues);
export const useMockContext = () => useContext(MockContext);

export default MockContext;
