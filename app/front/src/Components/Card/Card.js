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

function Card({ color, name, value }) {
  return (
    <div className={`${style.card} ${style[color]} width_100`}>
      <div className="flex flexDirection_row alignItems_center justifyContent_spaceEvenly width_100">
        <div className={`${style.cardIcon} flex`}>
          {name === 'Pacientes' && (<FaUserAlt />)}
          {name === 'Médicos' && (<FaUserNurse />)}
          {name === 'Agendamentos' && (<GiHealthNormal />)}
          {name === 'Convênios' && (<HiDocumentText />)}
        </div>
        <div className="flex flexDirection_column alignItems_center">
          <span className={style.cardNumber}>{value}</span>
          <span className={style.cardName}>{name}</span>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  color: '',
  name: '',
  value: 0,
};

Card.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
};

export default Card;
