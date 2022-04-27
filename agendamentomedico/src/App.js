import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Container>
          <Sidebar />
        </Container>
    </div>
  );
}

export default App;