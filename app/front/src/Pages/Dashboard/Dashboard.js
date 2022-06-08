// Librarys
import { useEffect, useState } from 'react';

// Get API
import API from '../../Middleware/Api/getApi';

// Styles
import '../../Assets/Styles/global.css';

// Components
import Card from '../../Components/Card/Card';
import Panel from '../../Components/Panel/Panel';
import Title from '../../Components/Title/Title';
import Wrapper from '../../Layout/Wrapper/Wrapper';
import Column from '../../Layout/Column/Column';
import Row from '../../Layout/Row/Row';
import ChartBars from '../../Components/ChartBars/ChartBars';

function Dashboard() {
  const [numberTotalPacientes, setNumberTotalPacientes] = useState(0);
  const [numberTotalAgendamentos, setNumberTotalAgendamentos] = useState(0);
  const [numberTotalConvenios, setNumberTotalConvenios] = useState(0);
  const [numberTotalMedicos, setNumberTotalMedicos] = useState(0);
  const [chartBarsData, setChartBarsData] = useState([]);

  useEffect(() => {
    const loadAll = () => {
      // Methods Functions
      const countNumberTotalPacientes = (result) => {
        setNumberTotalPacientes(result[0].data.length);
      };

      const countNumberTotalAgendamentos = (result) => {
        setNumberTotalAgendamentos(result[0].data.length);
      };

      const countNumberTotalConvenios = (result) => {
        setNumberTotalConvenios(result[0].data.length);
      };

      const countNumberTotalMedicos = (result) => {
        setNumberTotalMedicos(result[0].data.length);
      };

      const filterChartBarsData = (result) => {
        const arraysDatesForChart = [];
        for (let i = 0; i < result[0].data.length; i += 1) {
          arraysDatesForChart.push(result[0].data[i].data);
        }
        setChartBarsData(arraysDatesForChart);
      };

      // Get Functions API
      // Pacientes
      const getPacientes = async () => {
        const result = await API.getPacientes();
        countNumberTotalPacientes(result);
      };

      // Agendamentos
      const getAgendamentos = async () => {
        const result = await API.getConsultas();
        countNumberTotalAgendamentos(result);
        filterChartBarsData(result);
      };

      // Convenios
      const getConvenios = async () => {
        const result = await API.getConvenios();
        countNumberTotalConvenios(result);
      };

      // Medicos
      const getMedicos = async () => {
        const result = await API.getMedicos();
        countNumberTotalMedicos(result);
      };

      getPacientes();
      getAgendamentos();
      getConvenios();
      getMedicos();
    };

    loadAll();
  }, []);

  return (
    <Wrapper>
      <Column width="width_100">
        <Row width="width_100">
          <Card color="card--color_red" name="Pacientes" value={numberTotalPacientes} />
          <Card color="card--color_green" name="Agendamentos" value={numberTotalAgendamentos} />
          <Card color="card--color_blue" name="Convênios" value={numberTotalConvenios} />
          <Card color="card--color_orange" name="Médicos" value={numberTotalMedicos} />
        </Row>
        <Row width="width_100">
          <Panel width="Small" height="height_300">
            <div className="flex justifyContent_center width_100">
              <div className="flex flexDirection_column">
                <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONSULTAS REALIZADAS NOS ÚLTIMOS 7 DIAS" />
                <div className="flex alignItems_center height_100">
                  <ChartBars dataChartBar={chartBarsData} />
                </div>
              </div>
            </div>
          </Panel>
          <Panel width="Small" height="height_300">
            <div className="flex justifyContent_center width_100">
              <div className="flex flexDirection_column">
                <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONSULTAS REALIZADAS NOS ÚLTIMOS 7 DIAS" />
              </div>
            </div>
          </Panel>
          <Panel width="Small" height="height_300">
            <div className="flex justifyContent_center width_100">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="ÚLTIMOS PACIENTES ATENDIDOS" />
            </div>
          </Panel>
          <Panel width="Small" height="height_300">
            <div className="flex justifyContent_center width_100">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONSULTAS REALIZADAS x CANCELADAS" />
            </div>
          </Panel>
          <Panel width="Small" height="height_300">
            <div className="flex justifyContent_center width_100">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONVÊNIOS MAIS ATENDIDOS" />
            </div>
          </Panel>
          <Column width="Small">
            <Panel width="width_100" height="height_120">
              <div className="flex justifyContent_center width_100">
                <Title color="title--color_dark" fontsize="title--fontsize_18px" text="MÉDICOS E ATENDIMENTOS" />
              </div>
            </Panel>
            <Panel color="panel--color_green" height="height_120">
              <div className="flex flexDirection_column alignItems_center justifyContent_spaceAround width_100">
                <Title color="title--color_white" fontsize="title--fontsize_18px" text="ÍNDICE DE SATISFAÇÃO" />
                <Title color="title--color_white" fontsize="title--fontsize_46px" text="9.20" />
              </div>
            </Panel>
          </Column>
        </Row>
      </Column>
    </Wrapper>
  );
}

export default Dashboard;
