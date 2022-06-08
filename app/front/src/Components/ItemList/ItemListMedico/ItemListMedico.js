// Library
import { useEffect, useState } from 'react';

// Styles
import style from './ItemListMedico.module.css';
import styleStandard from '../ItemList.module.css';
import '../../../Assets/Styles/global.css';

// API
import getApi from '../../../Middleware/Api/getApi';

// Components
import Button from '../../Button/Button';
import Row from '../../../Layout/Row/Row';

function ItemListMedico({ data }) {
  const [status, setStatus] = useState([]);
  const [ultimoAtendimento, setUltimoAtendimento] = useState();

  const checkContainsLastAtendimento = (lastAtendimento) => {
    if (data.id === lastAtendimento[0].medicoId) {
      setUltimoAtendimento(lastAtendimento[0].data);
    } else {
      setUltimoAtendimento('N/A');
    }
  };

  useEffect(() => {
    const loadAll = async () => {
      const statusData = await getApi.getStatusMedicoId(data.statusId);
      setStatus(statusData[0].data);

      const lastAtendimento = await getApi.getMedicoUltimoAtendimento(data.id);
      checkContainsLastAtendimento(lastAtendimento[0].data);
    };

    loadAll();
  }, []);

  return (
    <div className={`${styleStandard.itemList} ${style.listMedicos} fontWeight_medium`}>
      <div className="width_9">{data.id}</div>
      <div className="width_33">{data.nome_completo}</div>
      {data.statusId === 1 && (<div className="width_16 fontColor_green">{status.nome_status}</div>)}
      {data.statusId === 2 && (<div className="width_16 fontColor_red">{status.nome_status}</div>)}
      <div className="width_16">{data.CRM}</div>
      <div className="width_16">{ultimoAtendimento}</div>
      <div className="width_9 flex alignItems_center">
        <Row>
          <div className="width_40 flex">
            <Button color="button--color_green" type="View" />
          </div>
          {status.id === 1 && (
            <div className="width_40 flex">
              <Button color="button--color_red" type="Delete" />
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}

export default ItemListMedico;
