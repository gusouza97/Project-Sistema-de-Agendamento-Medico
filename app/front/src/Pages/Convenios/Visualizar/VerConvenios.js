// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';

function VerConvenios() {
  const params = useParams();
  const [convenio, setConvenio] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getConvenioId(params.id);
      setConvenio(list[0].data);
    };

    loadAll();
  }, []);
  return (
    <>
      <p>{convenio.id}</p>
      <p>{convenio.nome_convenio}</p>
    </>
  );
}

export default VerConvenios;
