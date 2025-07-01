"use client";

import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: number;
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ tambahkan loading

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setUser(JSON.parse(userData));
    }

    setLoading(false); // ✅ setelah selesai cek localStorage, ubah loading ke false

    // Jangan redirect langsung di sini. Redirect dilakukan oleh komponen halaman
  }, []);

  const login = (userData: User, token: string) => {
    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
