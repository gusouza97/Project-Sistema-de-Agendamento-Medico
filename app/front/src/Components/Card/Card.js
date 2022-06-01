// Library
import PropTypes from 'prop-types';

/* Icons -> Types
    Pacientes -> Number Total Users
    Agendamentos -> Number Total Scheduling
    Convenios -> Number Total Health Insurance
    Medicos -> Number Total Doctors
*/
// Pacientes Icon / Medicos Icon
import { FaUserAlt, FaUserNurse } from 'react-icons/fa';
// Agendamentos Icon
import { GiHealthNormal } from 'react-icons/gi';
// Convenios Icon
import { HiDocumentText } from 'react-icons/hi';

// Styles
import style from './Card.module.css';
import '../../Assets/Styles/global.css';

function Card({ color, name }) {
  return (
    <div className={`${style.card} ${style[color]} flex alignItems_center justifyContent_center`}>
      <div className="flex flexDirection_row alignItems_center justifyContent_spaceEvenly width_100">
        <div className={`${style.cardIcon} flex`}>
          {name === 'Pacientes' && (<FaUserAlt />)}
          {name === 'Medicos' && (<FaUserNurse />)}
          {name === 'Agendamentos' && (<GiHealthNormal />)}
          {name === 'Convenios' && (<HiDocumentText />)}
        </div>
        <div className="flex flexDirection_column alignItems_center">
          <span className={style.cardNumber}>850</span>
          <span className={style.cardName}>{name}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
