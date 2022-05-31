// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';

function VerMedicos() {
  const params = useParams();
  const [medico, setMedico] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getMedicoId(params.id);
      setMedico(list[0].data);
    };

    loadAll();
  }, []);
  return (
    <>
      <p>{medico.id}</p>
      <p>{medico.nome_completo}</p>
    </>
  );
}

export default VerMedicos;
