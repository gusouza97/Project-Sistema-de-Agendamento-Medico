// libs
import {
  createContext, useContext,
} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
