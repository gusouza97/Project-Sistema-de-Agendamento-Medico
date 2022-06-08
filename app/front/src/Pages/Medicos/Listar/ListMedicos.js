// Library
import { useEffect, useState } from 'react';

// API
import getApi from '../../../Middleware/Api/getApi';

// Components
import ItemListMedico from '../../../Components/ItemList/ItemListMedico/ItemListMedico';
import Wrapper from '../../../Layout/Wrapper/Wrapper';
import Column from '../../../Layout/Column/Column';
import Title from '../../../Components/Title/Title';
import Row from '../../../Layout/Row/Row';
import Button from '../../../Components/Button/Button';
import Panel from '../../../Components/Panel/Panel';
import InputSearch from '../../../Components/InputSearch/InputSearch';
import InputSelect from '../../../Components/InputSelect/InputSelect';

function ListMedicos() {
  const [medicos, setMedicos] = useState([]);
  const [statusMedico, setStatusMedico] = useState([]);
  const [pagination, setPagination] = useState(10);

  const loadAll = async () => {
    const dataMedicos = await getApi.getMedicosWithLimit(pagination);
    setMedicos(dataMedicos[0].data);

    const dataStatusMedico = await getApi.getStatusMedico();
    setStatusMedico(dataStatusMedico[0].data);
  };

  const incrementPagination = () => {
    const page = pagination + 10;
    setPagination(page);
    loadAll();
  };

  const handleSearchMedico = async (value) => {
    const dataMedicos = await getApi.getMedicoSearch(value);
    setMedicos(dataMedicos[0].data);
  };

  const handleFilterStatusMedico = async (value) => {
    const dataMedicos = await getApi.getMedicosStatusId(value);
    setMedicos(dataMedicos[0].data);
  };

  useEffect(() => {
    loadAll();
  }, []);

  return (
    <Wrapper>
      <Panel width="ExtraLarge">
        <Column width="width_100">
          <Row marginBottom="mb_20px">
            <Title text="Médicos" fontsize="title--fontsize_18px" />
            <Button color="button--color_green" type="New" text="Cadastrar Médico" />
          </Row>
          <Row marginBottom="mb_20px" width="width_98">
            <div className="width_80">
              <InputSearch handleSearch={handleSearchMedico} />
            </div>
            <div className="width_17">
              <InputSelect name="Status" text="Status" datas={statusMedico} handleSelect={handleFilterStatusMedico} />
            </div>
          </Row>
          <div className="width_98 fontSize_14px fontColor_theme fontWeight_medium">
            <Row marginBottom="mb_10px">
              <div className="width_9">Nº</div>
              <div className="width_32">Nome do Médico</div>
              <div className="width_15">Status</div>
              <div className="width_15">CRM</div>
              <div className="width_15">Último Atendimento</div>
              <div className="width_9">Ações</div>
            </Row>
          </div>
          { medicos
      && (
      <ul>
        {
          medicos.map((value, index) => (
            <li key={value.id}><ItemListMedico data={medicos[index]} /></li>
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

export default ListMedicos;
