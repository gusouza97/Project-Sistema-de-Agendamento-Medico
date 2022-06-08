// Styles
import style from './InputCalendar.module.css';

function InputSelect({ name, handleCalendar }) {
  return (
    <input className={style.InputCalendar} type="date" id={name} name={name} onChange={(e) => { handleCalendar(e.target.value); }} />
  );
}

export default InputSelect;
