// Library
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// API
import getApi from '../../../Middleware/Api/getApi';
import patchApi from '../../../Middleware/Api/patchApi';

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
  const [cancel, setCancel] = useState(false);

  const [filterSearch, setFilterSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDoctor, setFilterDoctor] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // PERSONALIZAÇÃO DA URL DE BUSCA
  const customURIFilterSearch = () => {
    let URI = '';

    if (filterDoctor) {
      URI += `&medicoId=${filterDoctor}`;
    }

    if (filterStatus) {
      URI += `&statusConsultaId=${filterStatus}`;
    }

    if (filterDate) {
      URI += `&data=${filterDate}`;
    }

    if (filterSearch) {
      URI += `&q=${filterSearch}`;
    }

    // setFetchURI(URI);
    return URI;
  };

  // FETCH API DOS DADOS
  const loadAll = async () => {
    const url = customURIFilterSearch();

    const dataAgendamentos = await getApi.getConsultas(url, pagination);
    setAgendamentos(dataAgendamentos[0].data);

    const dataStatusConsulta = await getApi.getStatusConsulta();
    setStatusConsulta(dataStatusConsulta[0].data);

    const dataMedicos = await getApi.getMedicos();
    setMedicos(dataMedicos[0].data);
  };

  // INCREMENTANDO PAGINAÇÃO
  const incrementPagination = () => {
    const page = pagination + 10;
    setPagination(page);
  };

  // HANDLES DE EVENTOS INPUTS
  const handleSearchAgendamento = (value) => {
    setFilterSearch(value);
    setPagination(10);
    customURIFilterSearch();
  };

  const handleFilterStatusAgendamento = (value) => {
    setFilterStatus(value);
    setPagination(10);
    customURIFilterSearch();
  };

  const handleFilterMedicoIdAgendamento = (value) => {
    setFilterDoctor(value);
    setPagination(10);
    customURIFilterSearch();
  };

  const handleFilterDateAgendamento = (value) => {
    if (value) {
      setFilterDate(value);
      setPagination(10);
      customURIFilterSearch();
    }
  };

  // FUNÇÃO DE CANCELAMENTO AGENDAMENTO
  const handleCancelAgendamento = useCallback(async (id) => {
    await patchApi.patchAgendamentos(id);
    setCancel(true);
    console.log(cancel);
  });

  useEffect(() => {
    loadAll();
  }, [filterSearch, filterStatus, filterDoctor, filterDate, pagination, cancel]);

  return (
    <Wrapper>
      <Panel width="ExtraLarge">
        <Column width="width_100">
          <Row marginBottom="mb_20px">
            <Title text="Agendamentos" fontsize="title--fontsize_18px" />
            <Link to="/agendamentos/cadastrar"><Button color="button--color_green" type="New" text="Novo Agendamento" /></Link>
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
              <InputCalendar name="Calendar" handleCalendar={handleFilterDateAgendamento} />
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
            <li key={value.id}>
              <ItemListAgendamento data={agendamentos[index]} handle={handleCancelAgendamento} />
            </li>
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
