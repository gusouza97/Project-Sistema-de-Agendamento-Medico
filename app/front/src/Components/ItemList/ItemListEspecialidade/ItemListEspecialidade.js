// Library
import PropTypes from 'prop-types';

// Styles
import style from './ItemListMedico.module.css';
import styleStandard from '../ItemList.module.css';

function ItemListEspecialidade({ datas }) {
  return (
    <div className={`${styleStandard.itemList}`}>
      <h1>Item List</h1>
    </div>
  );
}

ItemListEspecialidade.propTypes = {
  datas: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ItemListEspecialidade;
