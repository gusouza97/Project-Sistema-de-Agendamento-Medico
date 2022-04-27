import style from './Navbar.module.css';
import calendarIcon from '../../img/icon-calendar.png'

function Navbar(){
    return(
        <nav className={style.navbar}>
            <h1 className={style.titulo}>AGENDAMENTOS</h1>
            <img src={calendarIcon} className={style.icon}></img>
        </nav>
    );
}

export default Navbar;