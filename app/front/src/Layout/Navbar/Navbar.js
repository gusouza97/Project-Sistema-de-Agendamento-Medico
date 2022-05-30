// Styles
import { AiOutlineCalendar } from 'react-icons/ai';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={style.nav}>
      <h1>CLINIC REAL</h1>
      <div className={style.icon}>
        <AiOutlineCalendar />
      </div>
    </nav>
  );
}

export default Navbar;
