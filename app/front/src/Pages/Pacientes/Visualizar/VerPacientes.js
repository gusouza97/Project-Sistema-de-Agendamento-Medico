// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';

function VerPacientes() {
  const params = useParams();
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getPacienteId(params.id);
      setPaciente(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <p>{paciente.id}</p>
      <p>{paciente.nome_completo}</p>
    </>
  );
}

export default VerPacientes;
