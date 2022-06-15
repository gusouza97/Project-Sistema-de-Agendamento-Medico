// Library
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
import InputFile from '../../../Components/InputFile/InputFile';

// Context
import { useAuth } from '../../../Services/Providers/AuthContext';

function VerAgendamentos() {
  const params = useParams();

  const {
    agendamentos, medicos, statusConsulta, pacientes, convenios, especialidades,
  } = useAuth();

  const [disabled, setDisabled] = useState(true);

  const handleEdit = () => {
    if (disabled === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  /* const handleOnChange = () => {

  } */

  useEffect(() => {
    agendamentos.getAgendamentoId(params.id);
  }, []);

  useEffect(() => {
    medicos.getMedicoId(agendamentos.dataAgendamentoId.medicoId);
    pacientes.getPacienteId(agendamentos.dataAgendamentoId.pacienteId);
    statusConsulta.getStatusConsultaId(agendamentos.dataAgendamentoId.statusConsultaId);
    especialidades.getEspecialidadeId(agendamentos.dataAgendamentoId.especialidadeId);
  }, [agendamentos.dataAgendamentoId]);

  useEffect(() => {
    convenios.getConvenioId(pacientes.dataPacienteId.convenioId);
  }, [pacientes.dataPacienteId]);

  return (
    <Wrapper>
      <Panel width="ExtraLarge">
        <div className={style.container_main}>
          <form>
            <Column>
              <Row>
                <div className={style.header_agendamentoTitle}>
                  <Title fontsize="title--fontsize_18px" color="title--color_dark" text={`AGENDAMENTO Nº ${agendamentos.dataAgendamentoId.id}`} />
                  <div className={style.container_buttons}>
                    <Button color="button--color_orange" type="Edit" handle={handleEdit} />
                    <Button color="button--color_red" type="Delete" />
                    <Button color="button--color_blue" type="Back" />
                  </div>
                </div>
              </Row>
              <Row>
                <Column>
                  <div className={style.container_agendamentoInputs}>
                    <Row>
                      <Column>
                        <Title text="Nº" />
                        <Input placeholder="Registro" type="text" value={agendamentos.dataAgendamentoId.id} size="Extra-Small" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Data" />
                        <Input placeholder="Data" type="date" value={agendamentos.dataAgendamentoId.date} size="Small" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Horário" />
                        <Input placeholder="Horário" type="time" value={agendamentos.dataAgendamentoId.horario} size="Small" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Status" />
                        <Input placeholder="Status Consulta" type="text" value={statusConsulta.dataStatusConsultaId.nome_status} size="Middle" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Especialidade" />
                        <Input placeholder="Especialidade" type="text" value={especialidades.dataEspecialidadeId.nome_especialidade} size="Large" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Médico" />
                        <Input placeholder="Médico" type="text" value={medicos.dataMedicoId.nome_completo} size="Middle" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="CRM" />
                        <Input placeholder="CRM" type="text" value={medicos.dataMedicoId.CRM} size="Middle" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Nome do Paciente" />
                        <Input placeholder="Nome do Paciente" type="text" value={pacientes.dataPacienteId.nome_completo} size="Extra-Large" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="CPF" />
                        <Input placeholder="CPF" type="text" value={pacientes.dataPacienteId.CPF} size="Middle" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Data de Nascimento" />
                        <Input placeholder="Data de Nascimento" type="text" value={pacientes.dataPacienteId.data_nascimento} size="Small" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Sexo" />
                        <Input placeholder="Sexo" type="text" value={pacientes.dataPacienteId.sexo} size="Middle" disabled={disabled} />
                      </Column>
                      <Column>
                        <Title text="Convênio" />
                        <Input placeholder="Convênio" type="text" value={convenios.dataConvenioId.nome_convenio} size="Middle" disabled={disabled} />
                      </Column>
                    </Row>
                  </div>
                </Column>
                <Column>
                  <div className={style.container_agendamentosPhotoProfile}>
                    <div>
                      <InputFile />
                    </div>
                  </div>
                </Column>
              </Row>
              <p>{agendamentos.dataAgendamentoId.id}</p>
              <p>{agendamentos.dataAgendamentoId.detalhes}</p>
            </Column>
          </form>
        </div>
      </Panel>
    </Wrapper>
  );
}

export default VerAgendamentos;
