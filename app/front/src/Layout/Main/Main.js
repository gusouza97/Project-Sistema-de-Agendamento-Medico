// Library
import PropTypes from 'prop-types';

import style from './Main.module.css';

function Main({ children }) {
  return (
    <main className={style.main}>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
