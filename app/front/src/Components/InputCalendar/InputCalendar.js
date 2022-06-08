// Styles
import style from './InputCalendar.module.css';

function InputSelect({ name }) {
  return (
    <input className={style.InputCalendar} type="date" id={name} name={name} />
  );
}

export default InputSelect;
