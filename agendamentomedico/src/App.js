// Bibliotecas
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Layouts
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Container from './components/layout/Container';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import ListEspecialidades from './components/pages/ListEspecialidades';
import ListMedicos from './components/pages/ListMedicos';
import ListPacientes from './components/pages/ListPacientes';
import ListAgendamentos from './components/pages/ListAgendamentos';
import CalendarAgendamento from './components/pages/CalendarAgendamento';
import CadAgendamento from './components/pages/CadAgendamento';
import CadEspecialidade from './components/pages/CadEspecialidade';
import CadMedico from './components/pages/CadMedico';
import CadPaciente from './components/pages/CadPaciente';

function App() {
  return ( 
      <Router>
        <Navbar/>
        <Container>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home/>}/> 
            <Route path='/sobre' element={<About/>}/>
            <Route path='/especialidades' element={<ListEspecialidades/>}/> 
            <Route path='/medicos' element={<ListMedicos/>}/> 
            <Route path='/pacientes' element={<ListPacientes/>}/> 
            <Route path='/agendamentos' element={<ListAgendamentos/>}/>
            <Route path='/calendario' element={<CalendarAgendamento/>}/> 
            <Route path='/agendamentos/cadastrar' element={<CadAgendamento/>}/>
            <Route path='/especialidades/cadastrar' element={<CadEspecialidade/>}/> 
            <Route path='/medicos/cadastrar' element={<CadMedico/>}/> 
            <Route path='/pacientes/cadastrar' element={<CadPaciente/>}/> 
          </Routes>  
        </Container>
      </Router>
  );
}

export default App;