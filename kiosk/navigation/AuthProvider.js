import React, { createContext } from "react";
import { login, logout } from "../firebase/firebaseFunctions";
import { useState } from "react";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [userRfid, setUserRfid] = useState("");
  const [userUID, setUserUID] = useState("");
  return (
    <AuthContext.Provider
      value={{
        userRfid,
        setUserRfid,
        userUID,
        setUserUID,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
