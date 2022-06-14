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
            <div className={style.header_agendamentoTitle}>
              <Title text={`AGENDAMENTO Nº ${agendamento.id}`} />
              <div className={style.container_buttons}>
                <Button color="button--color_orange" type="Edit" handle="" />
                <Button color="button--color_red" type="Delete" handle="" />
                <Button color="button--color_blue" type="Back" handle="" />
              </div>
            </div>
          </Row>
          <Row>
            <Column>
              <div className={style.container_agendamentoInputs}>
                <p>Coluna de Inputs</p>
              </div>
            </Column>
            <Column>
              <div className={style.container_agendamentosPhotoProfile}>
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
