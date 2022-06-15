// Styles
import style from './Input.module.css';

function Input({
  placeholder, type, value, disabled,
}) {
  return (
    <div className={style.Input}>

      {disabled === true && (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          disabled
        />
      )}

      {disabled === false && (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
      />
      )}

    </div>
  );
}

export default Input;
