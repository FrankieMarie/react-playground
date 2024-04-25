import { createContext, useContext } from 'react';

export interface UserData {
  id?: string;
  userName?: string;
  email?: string;
  githubId?: number;
}

export interface AuthContext {
  user: UserData | null;
  login: (data: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext | null>(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};
