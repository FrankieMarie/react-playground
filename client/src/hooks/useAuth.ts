import { createContext, useContext } from "react";

export interface UserData {
  firstName?: string;
  lastName?: string;
  userName: string;
  email: string;
  token?: string | null;
  roles?: string[];
}

export interface AuthContext {
  user: UserData | null;
  login: (data: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};
