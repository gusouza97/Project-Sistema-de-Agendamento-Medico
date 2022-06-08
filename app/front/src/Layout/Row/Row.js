// Styles
import style from './Row.module.css';

function Row({
  children, flexWrap, width, marginBottom,
}) {
  return (
    <div className={`${style.row} ${style[flexWrap]} ${style[width]} ${style[width]} ${style[marginBottom]}`}>
      {children}
    </div>
  );
}

export default Row;
