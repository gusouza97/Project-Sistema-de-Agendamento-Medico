// Styles
import style from './Title.module.css';

function Title({ color, fontsize, text }) {
  return (
    <span className={`${style[color]} ${style[fontsize]}`}>{ text }</span>
  );
}

export default Title;
