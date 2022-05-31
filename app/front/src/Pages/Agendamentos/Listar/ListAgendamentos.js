// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

function ListAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getConsultas();
      setAgendamentos(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <h2>Lista de Agendamentos</h2>
      { agendamentos
      && (
      <ul>
        {
          agendamentos.map((value) => (
            <li key={value.id}>{value.detalhes}</li>
          ))
        }
      </ul>
      ) }
    </>
  );
}

export default ListAgendamentos;
