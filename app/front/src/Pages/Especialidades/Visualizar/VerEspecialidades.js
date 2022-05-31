// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';

function VerEspecialidades() {
  const params = useParams();
  const [especialidade, setEspecialidade] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getEspecialidadeId(params.id);
      setEspecialidade(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <p>{especialidade.id}</p>
      <p>{especialidade.nome_especialidade}</p>
    </>
  );
}

export default VerEspecialidades;
