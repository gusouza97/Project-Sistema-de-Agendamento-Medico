// Library
import PropTypes from 'prop-types';

// Styles
import style from './Layout.module.css';

// Layouts
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

function Layout({ children }) {
  return (
    <div className={`${style.layout} ${style.flexColumn}`}>
      <Navbar />
      <div className={style.flexRow}>
        <Sidebar />
        <Main>
          {children}
        </Main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
