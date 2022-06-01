// Library
import PropTypes from 'prop-types';

// Styles
import style from './Panel.module.css';

function Panel({ children, color }) {
  return (
    <div className={`${style.panel} ${style[color]}`}>
      {children}
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Panel;
