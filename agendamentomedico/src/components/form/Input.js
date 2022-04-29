import styles from './Input.module.css';

function Input({type, name, text, placeholder, value, customClass}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}: </label>
            <input className={`${styles[customClass]}`}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}

export default Input;