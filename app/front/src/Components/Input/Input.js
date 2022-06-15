// Styles
import style from './Input.module.css';

function Input({
  placeholder, type, value, disabled, size, handle,
}) {
  return (
    <div className={`${style.Input} ${style[size]}`}>
      {disabled === true && (
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          onChange={handle}
          disabled
        />
      )}

      {disabled === false && (
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        className={`${style[size]}`}
        onChange={handle}
      />
      )}

    </div>
  );
}

export default Input;
