import { AuthContext, UserData } from "@/hooks/useAuth";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserData | null>(null);

  const login = (data: UserData) => {
    setUser(data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
