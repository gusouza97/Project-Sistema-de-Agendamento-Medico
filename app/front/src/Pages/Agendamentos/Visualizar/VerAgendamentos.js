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
import Input from '../../../Components/Input/Input';

function VerAgendamentos() {
  const params = useParams();
  const [agendamento, setAgendamento] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleEdit = () => {
    if (disabled === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    const loadAll = async () => {
      const list = await getApi.getConsultaId(params.id);
      setAgendamento(list[0].data);
    };
    setDisabled(true);
    loadAll();
  }, []);

  return (
    <Wrapper>
      <Panel width="ExtraLarge">
        <div className={style.container_main}>
          <Column>
            <Row>
              <div className={style.header_agendamentoTitle}>
                <Title fontsize="title--fontsize_18px" color="title--color_dark" text={`AGENDAMENTO Nº ${agendamento.id}`} />
                <div className={style.container_buttons}>
                  <Button color="button--color_orange" type="Edit" handle={handleEdit} />
                  <Button color="button--color_red" type="Delete" handle="" />
                  <Button color="button--color_blue" type="Back" handle="" />
                </div>
              </div>
            </Row>
            <Row>
              <Column>
                <div className={style.container_agendamentoInputs}>
                  <Row>
                    <Column>
                      <Title text="Nº" />
                      <Input placeholder="Registro" type="text" value={agendamento.id} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Data" />
                      <Input placeholder="Data" type="date" value={agendamento.date} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Horário" />
                      <Input placeholder="Horário" type="time" value={agendamento.horario} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Status" />
                      <Input placeholder="Status Consulta" type="text" value={agendamento.statusConsultaId} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Especialidade" />
                      <Input placeholder="Especialidade" type="text" value={agendamento.especialidadeId} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Médico" />
                      <Input placeholder="Médico" type="text" value={agendamento.medicoId} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="CRM" />
                      <Input placeholder="CRM" type="text" value="CRM" disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Nome do Paciente" />
                      <Input placeholder="Nome do Paciente" type="text" value={agendamento.pacienteId} disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="CPF" />
                      <Input placeholder="CPF" type="text" value="000.000.000-00" disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Idade" />
                      <Input placeholder="Idade" type="text" value="Idade" disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Sexo" />
                      <Input placeholder="Sexo" type="text" value="Sexo" disabled={disabled} />
                    </Column>
                    <Column>
                      <Title text="Convênio" />
                      <Input placeholder="Convênio" type="text" value="Convênio" disabled={disabled} />
                    </Column>

                  </Row>
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
        </div>
      </Panel>
    </Wrapper>
  );
}

export default VerAgendamentos;
