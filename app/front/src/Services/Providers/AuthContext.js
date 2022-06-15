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
  const [dataAgendamentoId, setDataAgendamentoId] = useState([]);
  const [dataMedicos, setDataMedicos] = useState([]);
  const [dataMedicoId, setDataMedicoId] = useState([]);
  const [dataPacientes, setDataPacientes] = useState([]);
  const [dataPacienteId, setDataPacienteId] = useState([]);
  const [dataEspecialidades, setDataEspecialidades] = useState([]);
  const [dataEspecialidadeId, setDataEspecialidadeId] = useState([]);
  const [dataConvenios, setDataConvenios] = useState([]);
  const [dataConvenioId, setDataConvenioId] = useState([]);
  const [dataStatusConsulta, setDataStatusConsulta] = useState([]);
  const [dataStatusConsultaId, setDataStatusConsultaId] = useState([]);

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

  // Get Agendamento Id
  const getAgendamentoId = async (id) => {
    const res = await getApi.getConsultaId(id);
    setDataAgendamentoId(res[0].data);
  };

  // Get Status Consulta
  const getStatusConsulta = async () => {
    const res = await getApi.getStatusConsulta();
    setDataStatusConsulta(res[0].data);
  };

  // Get Status Consulta
  const getStatusConsultaId = async (id) => {
    const res = await getApi.getStatusConsultaId(id);
    setDataStatusConsultaId(res[0].data);
  };

  // Get Medicos
  const getMedicos = async () => {
    const res = await getApi.getMedicos();
    setDataMedicos(res[0].data);
  };

  // Get Medicos Id
  const getMedicoId = async (id) => {
    const res = await getApi.getMedicoId(id);
    setDataMedicoId(res[0].data);
  };

  // Get Pacientes
  const getPacientes = async () => {
    const res = await getApi.getPacientes();
    setDataPacientes(res[0].data);
  };

  // Get Pacientes Id
  const getPacienteId = async (id) => {
    const res = await getApi.getPacienteId(id);
    setDataPacienteId(res[0].data);
  };

  // Get Especialidades
  const getEspecialidades = async () => {
    const res = await getApi.getEspecialidades();
    setDataEspecialidades(res[0].data);
  };

  // Get Especialidade Id
  const getEspecialidadeId = async (id) => {
    const res = await getApi.getEspecialidadeId(id);
    setDataEspecialidadeId(res[0].data);
  };

  // Get Convenios
  const getConvenios = async () => {
    const res = await getApi.getConvenios();
    setDataConvenios(res[0].data);
  };

  // Get Especialidade Id
  const getConvenioId = async (id) => {
    const res = await getApi.getConvenioId(id);
    setDataConvenioId(res[0].data);
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
    getAgendamentoId,
    dataAgendamentoId,
    patchCancelAgendamento,
  };

  const medicos = {
    getMedicos,
    dataMedicos,
    getMedicoId,
    dataMedicoId,
  };

  const pacientes = {
    getPacientes,
    dataPacientes,
    getPacienteId,
    dataPacienteId,
  };

  const convenios = {
    getConvenios,
    dataConvenios,
    getConvenioId,
    dataConvenioId,
  };

  const especialidades = {
    getEspecialidades,
    dataEspecialidades,
    getEspecialidadeId,
    dataEspecialidadeId,
  };

  const statusConsulta = {
    getStatusConsulta,
    dataStatusConsulta,
    getStatusConsultaId,
    dataStatusConsultaId,
  };

  return (
    <AuthContext.Provider value={{
      agendamentos, medicos, pacientes, convenios, especialidades, statusConsulta,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
