"use client"
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
}

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const isTokenExpired = (token: string) => {
  const payload = JSON.parse(JSON.stringify(token));
  const currentTime = Math.floor(Date.now() / 1000)
  return (payload.exp < currentTime)
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (userData: User) => setUser(userData);
  const logout = () => {
    setUser(null);
    document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  useEffect(() => {
    const checkToken = () => {
      const accessToken = document.cookie.split(";").find((cookie) => cookie.includes("accessToken="));
      if (accessToken) {
        const token = accessToken.split("=")[1];
        if (token && isTokenExpired(token)) {
          logout();
        }
      }
    }
    checkToken()

    const interval = setInterval(checkToken, 3600);

    return () => clearInterval(interval)

  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
