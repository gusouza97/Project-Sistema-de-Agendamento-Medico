// libs
import {
  createContext, useContext, useState,
} from 'react';

// API
import getApi from '../../Middleware/Api/getApi';
import patchApi from '../../Middleware/Api/patchApi';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [dataAgendamentos, setDataAgendamentos] = useState([]);
  const [dataMedicos, setDataMedicos] = useState([]);
  const [dataStatusConsulta, setDataStatusConsulta] = useState([]);

  // FETCH API DOS DADOS
  // GETS
  // Get Agendamentos com Filter
  const getAgendamentosWithFilter = async (fiSearch, fiStatus, fiDoctor, fiDate, page) => {
    let url = '';

    if (fiDoctor) {
      url += `&medicoId=${fiDoctor}`;
    }

    if (fiStatus) {
      url += `&statusConsultaId=${fiStatus}`;
    }

    if (fiDate) {
      url += `&data=${fiDate}`;
    }

    if (fiSearch) {
      url += `&q=${fiSearch}`;
    }

    const res = await getApi.getConsultas(url, page);
    setDataAgendamentos(res[0].data);
  };

  // Get Status Consulta
  const getStatusConsulta = async () => {
    const res = await getApi.getStatusConsulta();
    setDataStatusConsulta(res[0].data);
  };

  // Get Medicos
  const getMedicos = async () => {
    const res = await getApi.getMedicos();
    setDataMedicos(res[0].data);
  };

  // PATCHS
  // Patch Cancelamento Agendamento
  const patchCancelAgendamento = async (id) => {
    await patchApi.patchAgendamentos(id);
  };

  // VALUES
  const agendamentos = {
    getAgendamentosWithFilter,
    dataAgendamentos,
    patchCancelAgendamento,
    setDataAgendamentos,
  };

  const medicos = {
    getMedicos,
    dataMedicos,
    setDataMedicos,
  };

  const statusConsulta = {
    getStatusConsulta,
    dataStatusConsulta,
    setDataStatusConsulta,
  };

  return (
    <AuthContext.Provider value={{
      agendamentos, medicos, statusConsulta,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
