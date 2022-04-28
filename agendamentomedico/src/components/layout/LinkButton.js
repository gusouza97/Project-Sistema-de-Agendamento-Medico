import styles from './LinkButton.module.css';
import { Link } from 'react-router-dom';

function LinkButton({text, to, customClass}){
    return(
        <Link to={to} className={`${styles.btn} ${styles[customClass]}`}>{text}</Link>
    );
}

export default LinkButton;