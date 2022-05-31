// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';

function VerAgendamentos() {
  const params = useParams();
  const [agendamento, setAgendamento] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getConsultaId(params.id);
      setAgendamento(list[0].data);
    };

    loadAll();
  }, []);

  return (
    <>
      <p>{agendamento.id}</p>
      <p>{agendamento.detalhes}</p>
    </>
  );
}

export default VerAgendamentos;
