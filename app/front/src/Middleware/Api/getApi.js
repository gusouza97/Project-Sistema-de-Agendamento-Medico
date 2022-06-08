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
  getMedicosWithLimit: async (limit) => [
    {
      data: await basicFetch(
        `/medicos/?_limit=${limit}&_sort=nome_completo&_order=asc`,
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
  getMedicoSearch: async (string) => [
    {
      data: await basicFetch(
        `/medicos?q=${string}`,
      ),
    },
  ],
  getMedicoUltimoAtendimento: async (medicoId) => [
    {
      data: await basicFetch(
        `/consultas?medicoId=${medicoId}&_limit=1&_sort=data&_order=desc`,
      ),
    },
  ],
  getMedicosStatusId: async (value) => [
    {
      data: await basicFetch(
        `/medicos?statusId=${value}&_sort=nome_completo`,
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
  getConsultasWithLimit: async (limit) => [
    {
      data: await basicFetch(
        `/consultas/?_limit=${limit}&_sort=data&_order=desc`,
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
  getConsultaSearch: async (string) => [
    {
      data: await basicFetch(
        `/consultas?q=${string}`,
      ),
    },
  ],
  getConsultasStatusId: async (value) => [
    {
      data: await basicFetch(
        `/consultas?statusConsultaId=${value}&_sort=data&_order=desc`,
      ),
    },
  ],
  getConsultasMedicoId: async (value) => [
    {
      data: await basicFetch(
        `/consultas?medicoId=${value}&_sort=data&_order=desc`,
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
