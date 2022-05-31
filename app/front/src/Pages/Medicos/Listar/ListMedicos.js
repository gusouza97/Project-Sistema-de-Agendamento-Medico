// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

function ListMedicos() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getMedicos();
      setMedicos(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <h2>Lista de Medicos</h2>
      { medicos
      && (
      <ul>
        {
          medicos.map((value) => (
            <li key={value.id}>{value.nome_completo}</li>
          ))
        }
      </ul>
      ) }
    </>
  );
}

export default ListMedicos;
