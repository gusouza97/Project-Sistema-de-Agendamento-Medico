const API_BASE = 'http://localhost:3004';

const basicFetch = async (endpoint) => {
  await fetch(`${API_BASE}${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(
      {
        statusConsultaId: 2,
      },
    ),
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(`Houve um erro! ${err}`));
};

export default {
  patchAgendamentos: async (id) => [
    {
      data: await basicFetch(`/consultas/${id}`),
    },
  ],
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
  getConsultas: async (uri, limit) => [
    {
      data: await basicFetch(
        `/consultas?_limit=${limit}${uri}&_sort=data&_order=desc`,
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
  getConsultasData: async (value) => [
    {
      data: await basicFetch(
        `/consultas?data=${value}`,
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
