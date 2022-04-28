import style from './Sidebar.module.css';

import { NavLink } from 'react-router-dom';

import { MdSpaceDashboard } from 'react-icons/md'
import { AiFillSchedule } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { BiCube } from 'react-icons/bi'
import { ImArrowLeft } from 'react-icons/im'

function Sidebar(){
    const navLinkStyles = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'white' : '#3B82F6',
            color: isActive ? '#3B82F6' : 'white'
        }
    }

    return(
        <aside className={style.aside}>
            <ul className={style.menuSup}>
                <li><NavLink to="/dashboard" style={navLinkStyles}><MdSpaceDashboard/><span>Dashboard</span></NavLink></li>
                <li><NavLink to="/agendamentos" style={navLinkStyles}><AiFillSchedule/><span>Agendamentos</span></NavLink></li>
                <li><NavLink to="/pacientes" style={navLinkStyles}><BsFillPersonFill/><span>Pacientes</span></NavLink></li>
                <li><NavLink to="/medicos" style={navLinkStyles}><MdOutlineHealthAndSafety/><span>Médicos</span></NavLink></li>
                <li><NavLink to="/especialidades" style={navLinkStyles}><BiCube/><span>Especialidades</span></NavLink></li>
            </ul>
            <ul className={style.menuInf}>
                <li><NavLink to="/"><ImArrowLeft/><span>Voltar ao início</span></NavLink></li>
            </ul>
        </aside>
    );
}

export default Sidebar;