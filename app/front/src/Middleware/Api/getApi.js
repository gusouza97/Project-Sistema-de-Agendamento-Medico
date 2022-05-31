const API_BASE = 'http://localhost:3004';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getPacientes: async () => [
    {
      data: await basicFetch(
        '/pacientes',
      ),
    },
  ],
  getPacienteId: async (id) => [
    {
      data: await basicFetch(
        `/pacientes/${id}`,
      ),
    },
  ],
  getMedicos: async () => [
    {
      data: await basicFetch(
        '/medicos',
      ),
    },
  ],
  getMedicoId: async (id) => [
    {
      data: await basicFetch(
        `/medicos/${id}`,
      ),
    },
  ],
  getConvenios: async () => [
    {
      data: await basicFetch(
        '/convenios',
      ),
    },
  ],
  getConvenioId: async (id) => [
    {
      data: await basicFetch(
        `/convenios/${id}`,
      ),
    },
  ],
  getConsultas: async () => [
    {
      data: await basicFetch(
        '/consultas',
      ),
    },
  ],
  getConsultaId: async (id) => [
    {
      data: await basicFetch(
        `/consultas/${id}`,
      ),
    },
  ],
  getStatusConsulta: async () => [
    {
      data: await basicFetch(
        '/status_consultas',
      ),
    },
  ],
  getStatusConsultaId: async (id) => [
    {
      data: await basicFetch(
        `/status_consultas/${id}`,
      ),
    },
  ],
  getStatusMedico: async () => [
    {
      data: await basicFetch(
        '/status_medico',
      ),
    },
  ],
  getStatusMedicoId: async (id) => [
    {
      data: await basicFetch(
        `/status_medico/${id}`,
      ),
    },
  ],
  getEspecialidades: async () => [
    {
      data: await basicFetch(
        '/especialidades',
      ),
    },
  ],
  getEspecialidadeId: async (id) => [
    {
      data: await basicFetch(
        `/especialidades/${id}`,
      ),
    },
  ],
};
