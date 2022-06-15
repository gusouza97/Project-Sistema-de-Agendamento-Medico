// Styles
import style from './Input.module.css';

function Input({
  placeholder, type, value, disabled, size,
}) {
  return (
    <div className={`${style.Input} ${style[size]}`}>
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
        className={`${style[size]}`}
      />
      )}

    </div>
  );
}

export default Input;
