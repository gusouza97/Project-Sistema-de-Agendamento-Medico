// Styles
import '../../Assets/Styles/global.css';

// Components
import Card from '../../Components/Card/Card';
import Panel from '../../Components/Panel/Panel';
import Title from '../../Components/Title/Title';

function Dashboard() {
  return (
    <div className="wrapper flexDirection_column mg-bottom_30px">
      <div className="flex width_100 justifyContent_spaceBetween ">
        <div className="flex height_120px width_22">
          <Card color="card--color_red" name="Pacientes" />
        </div>
        <div className="flex height_120px width_22">
          <Card color="card--color_green" name="Agendamentos" />
        </div>
        <div className="flex height_120px width_22">
          <Card color="card--color_blue" name="Convenios" />
        </div>
        <div className="flex height_120px width_22">
          <Card color="card--color_orange" name="Medicos" />
        </div>
      </div>

      <div className="flex justifyContent_spaceBetween mg-top_30px mg-bottom_30px">
        <div className="flex width_65 height_300px">
          <Panel>
            <div className="flex width_100 justifyContent_center">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONSULTAS REALIZADAS NOS ÚLTIMOS 7 DIAS" />
            </div>
          </Panel>
        </div>
        <div className="flex width_30 height_300px">
          <Panel>
            <div className="flex width_100 justifyContent_center">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="ÚLTIMOS PACIENTES ATENDIDOS" />
            </div>
          </Panel>
        </div>
      </div>

      <div className="flex justifyContent_spaceBetween mg-top_30px">
        <div className="flex width_30 height_300px">
          <Panel>
            <div className="flex width_100 justifyContent_center">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONSULTAS REALIZADAS x CANCELADAS" />
            </div>
          </Panel>
        </div>
        <div className="flex width_30 height_300px">
          <Panel>
            <div className="flex width_100 justifyContent_center">
              <Title color="title--color_dark" fontsize="title--fontsize_18px" text="CONVÊNIOS MAIS ATENDIDOS" />
            </div>
          </Panel>
        </div>
        <div className="flex flexDirection_column width_30 height_300px justifyContent_spaceBetween">
          <div className="flex height_120px">
            <Panel>
              <div className="flex width_100 justifyContent_center">
                <Title color="title--color_dark" fontsize="title--fontsize_18px" text="MÉDICOS E ATENDIMENTOS" />
              </div>
            </Panel>
          </div>
          <div className="flex height_120px">
            <Panel color="panel--color_green">
              <div className="flex flexDirection_column width_100 alignItems_center justifyContent_spaceAround">
                <Title color="title--color_white" fontsize="title--fontsize_18px" text="ÍNDICE DE SATISFAÇÃO" />
                <Title color="title--color_white" fontsize="title--fontsize_46px" text="9.20" />
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
