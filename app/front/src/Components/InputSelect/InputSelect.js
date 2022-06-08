// Styles
import style from './InputSelect.module.css';

function InputSelect({
  name, text, datas, handleSelect,
}) {
  return (
    <div className={style.InputSelect}>
      <select defaultValue="DEFAULT" id={name} name={name} onChange={(e) => { handleSelect(e.target.value); }}>
        <option value="DEFAULT" disabled>{text}</option>
        {
          name === 'Status'
            && datas.map((value) => (
              <option key={value.id} value={value.id}>{value.nome_status}</option>
            ))
        }
        {
          name === 'Doutor'
            && datas.map((value) => (
              <option key={value.id} value={value.id}>{value.nome_completo}</option>
            ))
        }
      </select>
    </div>
  );
}

export default InputSelect;
