// Library
import PropTypes from 'prop-types';

// Styles
import style from './Panel.module.css';

function Panel({
  children, color, width, height,
}) {
  return (
    <div className={`${style.panel} ${style[color]} ${style[width]} ${style[height]}`}>
      {children}
    </div>
  );
}

Panel.defaultProps = {
  color: '',
  width: '',
  height: '',
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Panel;
