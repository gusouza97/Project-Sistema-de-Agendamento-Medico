import style from './Sidebar.module.css';
import { MdSpaceDashboard } from 'react-icons/md'
import { AiFillSchedule } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { BiCube } from 'react-icons/bi'
import { ImArrowLeft } from 'react-icons/im'

function Sidebar(){
    return(
        <aside className={style.aside}>
            <ul className={style.menuSup}>
                <li><MdSpaceDashboard/><span>Dashboard</span></li>
                <li><AiFillSchedule/><span>Agendamentos</span></li>
                <li><BsFillPersonFill/><span>Pacientes</span></li>
                <li><MdOutlineHealthAndSafety/><span>Médicos</span></li>
                <li><BiCube/><span>Especialidades</span></li>
            </ul>
            <ul className={style.menuInf}>
                <li><ImArrowLeft/><span>Voltar ao início</span></li>
            </ul>
        </aside>
    );
}

export default Sidebar;