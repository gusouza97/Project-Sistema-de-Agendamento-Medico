// Library
import PropTypes from 'prop-types';

// Styles
import style from './ItemListMedico.module.css';
import styleStandard from '../ItemList.module.css';

function ItemListMedico({ datas }) {
  return (
    <div className={`${styleStandard.itemList}`}>
      <h1>Item List</h1>
    </div>
  );
}

ItemListMedico.propTypes = {
  datas: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ItemListMedico;
