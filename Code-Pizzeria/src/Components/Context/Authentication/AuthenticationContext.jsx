import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export default function AuthenticationContextProvider({ children }) {
  const userValue = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(userValue || null);
  const isAuthenticated = !!user;

  const handleLogin = (email) => {
    localStorage.setItem("user", JSON.stringify({ email }));
    setUser({ email });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, isAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
