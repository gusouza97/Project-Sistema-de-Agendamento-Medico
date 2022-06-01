// Library
import PropTypes from 'prop-types';

// Styles
import style from './ItemListPaciente.module.css';
import styleStandard from '../ItemList.module.css';

function ItemListPaciente({ datas }) {
  return (
    <div className={`${styleStandard.itemList}`}>
      <h1>Item List</h1>
    </div>
  );
}

ItemListPaciente.propTypes = {
  datas: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ItemListPaciente;
