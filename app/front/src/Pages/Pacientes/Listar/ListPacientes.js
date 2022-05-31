// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

function ListPacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getPacientes();
      setPacientes(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <h2>Lista de Pacientes</h2>
      { pacientes
      && (
      <ul>
        {
          pacientes.map((value) => (
            <li key={value.id}>{value.nome_completo}</li>
          ))
        }
      </ul>
      ) }
    </>
  );
}

export default ListPacientes;
