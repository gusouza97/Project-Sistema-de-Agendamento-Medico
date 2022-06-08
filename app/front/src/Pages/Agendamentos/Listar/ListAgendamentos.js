// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

// Components
import ItemListAgendamento from '../../../Components/ItemList/ItemListAgendamento/ItemListAgendamento';
import Wrapper from '../../../Layout/Wrapper/Wrapper';
import Column from '../../../Layout/Column/Column';
import Title from '../../../Components/Title/Title';
import Row from '../../../Layout/Row/Row';
import Button from '../../../Components/Button/Button';
import Panel from '../../../Components/Panel/Panel';
import InputSearch from '../../../Components/InputSearch/InputSearch';
import InputSelect from '../../../Components/InputSelect/InputSelect';
import InputCalendar from '../../../Components/InputCalendar/InputCalendar';

function ListAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [statusConsulta, setStatusConsulta] = useState([]);
  const [pagination, setPagination] = useState(10);

  const loadAll = async () => {
    const dataAgendamentos = await getApi.getConsultasWithLimit(pagination);
    setAgendamentos(dataAgendamentos[0].data);

    const dataStatusConsulta = await getApi.getStatusConsulta();
    setStatusConsulta(dataStatusConsulta[0].data);

    const dataMedicos = await getApi.getMedicos();
    setMedicos(dataMedicos[0].data);
  };

  const incrementPagination = () => {
    const page = pagination + 10;
    setPagination(page);
    loadAll();
  };

  const handleSearchAgendamento = async (value) => {
    const dataAgendamentos = await getApi.getConsultaSearch(value);
    setAgendamentos(dataAgendamentos[0].data);
  };

  const handleFilterStatusAgendamento = async (value) => {
    const dataAgendamentos = await getApi.getConsultasStatusId(value);
    setAgendamentos(dataAgendamentos[0].data);
  };

  const handleFilterMedicoIdAgendamento = async (value) => {
    const dataAgendamentos = await getApi.getConsultasMedicoId(value);
    setAgendamentos(dataAgendamentos[0].data);
  };

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <Wrapper>
      <Panel width="ExtraLarge">
        <Column width="width_100">
          <Row marginBottom="mb_20px">
            <Title text="Agendamentos" fontsize="title--fontsize_18px" />
            <Button color="button--color_green" type="New" text="Novo Agendamento" />
          </Row>
          <Row marginBottom="mb_20px" width="width_98">
            <div className="width_43">
              <InputSearch handleSearch={handleSearchAgendamento} />
            </div>
            <div className="width_13">
              <InputSelect name="Status" text="Status" datas={statusConsulta} handleSelect={handleFilterStatusAgendamento} />
            </div>
            <div className="width_23">
              <InputSelect name="Doutor" text="Doutor" datas={medicos} handleSelect={handleFilterMedicoIdAgendamento} />
            </div>
            <div className="width_13">
              <InputCalendar name="Calendar" />
            </div>
          </Row>
          <div className="width_98 fontSize_14px fontColor_theme fontWeight_medium">
            <Row marginBottom="mb_10px">
              <div className="width_9">Nº</div>
              <div className="width_32">Nome do Paciente</div>
              <div className="width_16">Status</div>
              <div className="width_9">Data</div>
              <div className="width_9">Horário</div>
              <div className="width_16">Doutor</div>
              <div className="width_9">Ações</div>
            </Row>
          </div>
          { agendamentos
      && (
      <ul>
        {
          agendamentos.map((value, index) => (
            <li key={value.id}><ItemListAgendamento data={agendamentos[index]} /></li>
          ))
        }
      </ul>
      ) }
          <Row marginBottom="mb_10px" />
          <Row>
            <div className="flex width_100 alignItems_center justifyContent_center">
              <Button color="button--color_blue" type="Reload" text="Carregar mais dados" handle={incrementPagination} />
            </div>
          </Row>
        </Column>
      </Panel>
    </Wrapper>
  );
}

export default ListAgendamentos;
