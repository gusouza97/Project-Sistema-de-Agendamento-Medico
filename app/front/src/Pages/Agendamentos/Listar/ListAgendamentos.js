// Library
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

// Context
import { useAuth } from '../../../Services/Providers/AuthContext';

function ListAgendamentos() {
  const { agendamentos, medicos, statusConsulta } = useAuth();

  const [pagination, setPagination] = useState(10);
  const [fiSearch, setFilterSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterDoctor, setFilterDoctor] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // INCREMENTANDO PAGINAÇÃO
  const handleFiltersMain = () => {
    agendamentos.getAgendamentosWithFilter(
      fiSearch,
      filterStatus,
      filterDoctor,
      filterDate,
      pagination,
    );
  };

  const incrementPagination = () => {
    const page = pagination + 10;
    setPagination(page);
  };

  // HANDLES DE EVENTOS INPUTS
  const handleSearchAgendamento = (value) => {
    setFilterSearch(value);
    setPagination(10);
  };

  const handleFilterStatusAgendamento = (value) => {
    setFilterStatus(value);
    setPagination(10);
  };

  const handleFilterMedicoIdAgendamento = (value) => {
    setFilterDoctor(value);
    setPagination(10);
  };

  const handleFilterDateAgendamento = (value) => {
    if (value) {
      setFilterDate(value);
      setPagination(10);
    }
  };

  const handleCancelAgendamento = (id) => {
    agendamentos.patchCancelAgendamento(id);
    window.location.reload();
  };

  useEffect(() => {
    handleFiltersMain();
  }, [fiSearch, filterStatus, filterDoctor, filterDate, pagination]);

  useEffect(() => {
    handleFiltersMain();
    medicos.getMedicos();
    statusConsulta.getStatusConsulta();
  }, []);

  return (
    <Wrapper>
      <Panel width="ExtraLarge">
        <Column width="width_100">
          <Row marginBottom="mb_20px">
            <Title text="AGENDAMENTOS" color="title--color_dark" fontsize="title--fontsize_18px" />
            <Link to="/agendamentos/cadastrar"><Button color="button--color_green" type="New" text="Novo Agendamento" /></Link>
          </Row>
          <Row marginBottom="mb_20px" width="width_98">
            <div className="width_43">
              <InputSearch handleSearch={handleSearchAgendamento} />
            </div>
            <div className="width_13">
              <InputSelect name="Status" text="Status" datas={statusConsulta.dataStatusConsulta} handleSelect={handleFilterStatusAgendamento} />
            </div>
            <div className="width_23">
              <InputSelect name="Doutor" text="Doutor" datas={medicos.dataMedicos} handleSelect={handleFilterMedicoIdAgendamento} />
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
     agendamentos.dataAgendamentos.map((value, index) => (
       <li key={value.id}>
         <ItemListAgendamento
           data={agendamentos.dataAgendamentos[index]}
           handle={handleCancelAgendamento}
         />
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
