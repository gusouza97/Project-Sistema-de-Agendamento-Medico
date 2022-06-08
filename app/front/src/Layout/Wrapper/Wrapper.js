// Library
import PropTypes from 'prop-types';

// Styles
import style from './Wrapper.module.css';

function Wrapper({ children }) {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
