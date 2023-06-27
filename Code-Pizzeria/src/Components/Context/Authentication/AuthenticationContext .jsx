import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

const userValue = JSON.parse(localStorage.getItem("user"));

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(userValue);

  const handleLogin = (email) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
