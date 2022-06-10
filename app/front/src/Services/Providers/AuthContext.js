// libs
import {
  createContext, useContext, useState,
} from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [agendamentos, setAgendamentos] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [statusConsulta, setStatusConsulta] = useState([]);

  const value = {
    agendamentos,
    setAgendamentos,
    medicos,
    setMedicos,
    statusConsulta,
    setStatusConsulta,
  };

  return (
    <AuthContext.Provider value={{ value }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
