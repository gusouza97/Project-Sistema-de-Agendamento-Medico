// Library
import PropTypes from 'prop-types';

// Styles
import style from './Title.module.css';

function Title({ color, fontsize, text }) {
  return (
    <span className={`${style[color]} ${style[fontsize]}`}>{ text }</span>
  );
}

Title.propTypes = {
  color: PropTypes.string.isRequired,
  fontsize: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Title;
