// Library
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import style from './ItemListAgendamento.module.css';
import styleStandard from '../ItemList.module.css';
import '../../../Assets/Styles/global.css';

// API
import getApi from '../../../Middleware/Api/getApi';

// Components
import Button from '../../Button/Button';
import Row from '../../../Layout/Row/Row';

function ItemListAgendamento({ data, handle }) {
  const [paciente, setPaciente] = useState([]);
  const [status, setStatus] = useState([]);
  const [medico, setMedico] = useState([]);
  const [dateFormatBrazil, setDateFormatBrazil] = useState();

  const convertDateFormatBrazil = () => {
    const arrDateFormat = data.data.split('-');
    const year = arrDateFormat[0];
    const day = arrDateFormat[2];
    const month = arrDateFormat[1];

    setDateFormatBrazil(`${day}/${month}/${year}`);
  };

  useEffect(() => {
    const loadAll = async () => {
      const pacienteData = await getApi.getPacienteId(data.pacienteId);
      setPaciente(pacienteData[0].data);

      const statusData = await getApi.getStatusConsultaId(data.statusConsultaId);
      setStatus(statusData[0].data);

      const medicoData = await getApi.getMedicoId(data.medicoId);
      setMedico(medicoData[0].data);

      convertDateFormatBrazil();
    };

    loadAll();
  }, []);

  return (
    <div className={`${styleStandard.itemList} ${style.listAgendamentos} fontWeight_medium`}>
      <div className="width_9">{data.id}</div>
      <div className="width_32">{paciente.nome_completo}</div>
      {status.id === 1 && (<div className="width_16 fontColor_orange">{status.nome_status}</div>)}
      {status.id === 2 && (<div className="width_16 fontColor_red">{status.nome_status}</div>)}
      {status.id === 3 && (<div className="width_16 fontColor_green">{status.nome_status}</div>)}
      <div className="width_9">{dateFormatBrazil}</div>
      <div className="width_9">{data.horario}</div>
      <div className="width_16">{medico.nome_completo}</div>
      <div className="width_9 flex alignItems_center">
        <Row>
          <div className="width_40 flex">
            <Link to={`/agendamentos/${data.id}`}><Button color="button--color_green" type="View" /></Link>
          </div>
          {status.id === 1 && (
          <div className="width_40 flex">
            <Button color="button--color_red" type="Delete" data={data} handle={handle} />
          </div>
          )}
        </Row>
      </div>
    </div>
  );
}

export default ItemListAgendamento;
