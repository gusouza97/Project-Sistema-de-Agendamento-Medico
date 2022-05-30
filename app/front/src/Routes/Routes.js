// Library
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ListAgendamentos from '../Pages/Agendamentos/Listar/ListAgendamentos';
import CadAgendamentos from '../Pages/Agendamentos/Cadastrar/CadAgendamentos';
import VerAgendamentos from '../Pages/Agendamentos/Visualizar/VerAgendamentos';
import ListMedicos from '../Pages/Medicos/Listar/ListMedicos';
import CadMedicos from '../Pages/Medicos/Cadastrar/CadMedicos';
import VerMedicos from '../Pages/Medicos/Visualizar/VerMedicos';
import ListPacientes from '../Pages/Pacientes/Listar/ListPacientes';
import CadPacientes from '../Pages/Pacientes/Cadastrar/CadPacientes';
import VerPacientes from '../Pages/Pacientes/Visualizar/VerPacientes';
import ListConvenios from '../Pages/Convenios/Listar/ListConvenios';
import CadConvenios from '../Pages/Convenios/Cadastrar/CadConvenios';
import VerConvenios from '../Pages/Convenios/Visualizar/VerConvenios';
import ListEspecialidades from '../Pages/Especialidades/Listar/ListEspecialidades';
import CadEspecialidades from '../Pages/Especialidades/Cadastrar/CadEspecialidades';
import VerEspecialidades from '../Pages/Especialidades/Visualizar/VerEspecialidades';
import Calendario from '../Pages/Calendario/Calendario';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="agendamentos" element={<ListAgendamentos />} />
        <Route path="agendamentos/cadastrar" element={<CadAgendamentos />} />
        <Route path="agendamentos/:id" element={<VerAgendamentos />} />
        <Route path="medicos" element={<ListMedicos />} />
        <Route path="medicos/cadastrar" element={<CadMedicos />} />
        <Route path="medicos/:id" element={<VerMedicos />} />
        <Route path="pacientes" element={<ListPacientes />} />
        <Route path="pacientes/cadastrar" element={<CadPacientes />} />
        <Route path="pacientes/:id" element={<VerPacientes />} />
        <Route path="convenios" element={<ListConvenios />} />
        <Route path="convenios/cadastrar" element={<CadConvenios />} />
        <Route path="convenios/:id" element={<VerConvenios />} />
        <Route path="especialidades" element={<ListEspecialidades />} />
        <Route path="especialidades/cadastrar" element={<CadEspecialidades />} />
        <Route path="especialidades/:id" element={<VerEspecialidades />} />
        <Route path="calendario" element={<Calendario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
