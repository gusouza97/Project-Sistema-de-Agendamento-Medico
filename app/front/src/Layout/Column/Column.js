// Library
import PropTypes from 'prop-types';

// Styles
import style from './Column.module.css';

function Column({ children, flexWrap, width }) {
  return (
    <div className={`${style.column} ${style[flexWrap]} ${style[width]}`}>
      {children}
    </div>
  );
}

Column.defaultProps = {
  flexWrap: '',
  width: '',
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  flexWrap: PropTypes.string,
  width: PropTypes.string,
};

export default Column;
