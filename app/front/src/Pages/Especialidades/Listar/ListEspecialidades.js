// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

function ListEspecialidades() {
  const [especialidades, setEspecialidades] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getEspecialidades();
      setEspecialidades(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <h2>Lista de Especialidades</h2>
      { especialidades
      && (
      <ul>
        {
          especialidades.map((value) => (
            <li key={value.id}>{value.nome_especialidade}</li>
          ))
        }
      </ul>
      ) }
    </>
  );
}

export default ListEspecialidades;
