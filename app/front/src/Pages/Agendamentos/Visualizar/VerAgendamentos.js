// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';

// Styles
import style from './VerAgendamentos.module.css';

// Components
import Panel from '../../../Components/Panel/Panel';
import Wrapper from '../../../Layout/Wrapper/Wrapper';
import Column from '../../../Layout/Column/Column';
import Row from '../../../Layout/Row/Row';
import Title from '../../../Components/Title/Title';
import Button from '../../../Components/Button/Button';

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
    <Wrapper>
      <Panel width="ExtraLarge">
        <Column>
          <Row>
            <div className={style.agendamentoTitle_header}>
              <Title text={`AGENDAMENTO Nº ${agendamento.id}`} />
              <Button text="teste" />
            </div>
          </Row>
          <Row>
            <Column>
              <div className={style.agendamentoInputs_container}>
                <p>Coluna de Inputs</p>
              </div>
            </Column>
            <Column>
              <div className={style.agendamentoPhotoProfile_container}>
                <p>Coluna de Inputs</p>
              </div>
            </Column>
          </Row>
          <p>{agendamento.id}</p>
          <p>{agendamento.detalhes}</p>
        </Column>
      </Panel>
    </Wrapper>
  );
}

export default VerAgendamentos;
