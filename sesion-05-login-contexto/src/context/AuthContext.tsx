import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Corregido: El tipo de retorno (: boolean) va después de los paréntesis
  const login = (email: string, password: string): boolean => {
    if (email === "admin@admin.com" && password === "1234") {
      setUser({ email });
      return true;
    }
    return false;
    
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  // Corregido: El contexto por defecto es null, no undefined
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};