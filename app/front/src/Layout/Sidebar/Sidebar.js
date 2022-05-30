// Library
import { NavLink } from 'react-router-dom';

// Styles
import {
  AiOutlineClockCircle, AiOutlineDashboard, AiOutlineUser, AiOutlineCompress, AiOutlineFileText,
} from 'react-icons/ai';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import style from './Sidebar.module.css';

function Sidebar() {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? '#F1F5F9' : '',
    color: isActive ? '#000' : 'white',
  });

  return (
    <aside className={style.aside}>
      <ul>
        <li>
          <NavLink to="/dashboard" style={navLinkStyles}>
            <AiOutlineDashboard />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/agendamentos" style={navLinkStyles}>
            <AiOutlineClockCircle />
            <span>Agendamentos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/medicos" style={navLinkStyles}>
            <MdOutlineHealthAndSafety />
            <span>Médicos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pacientes" style={navLinkStyles}>
            <AiOutlineUser />
            <span>Pacientes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/convenios" style={navLinkStyles}>
            <AiOutlineFileText />
            <span>Convênios</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/especialidades" style={navLinkStyles}>
            <AiOutlineCompress />
            <span>Especialidades</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
