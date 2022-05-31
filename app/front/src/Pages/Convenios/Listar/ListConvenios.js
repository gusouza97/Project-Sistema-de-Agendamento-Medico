// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

function ListConvenios() {
  const [convenios, setConvenios] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getConvenios();
      setConvenios(list[0].data);
    };

    loadAll();
  }, []);
  return (
    <>
      <h2>Lista de Convenios</h2>
      { convenios
      && (
      <ul>
        {
          convenios.map((value) => (
            <li key={value.id}>{value.nome_convenio}</li>
          ))
        }
      </ul>
      ) }
    </>
  );
}

export default ListConvenios;
