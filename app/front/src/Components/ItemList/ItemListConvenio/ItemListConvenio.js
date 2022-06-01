// Library
import PropTypes from 'prop-types';

// Styles
import style from './ItemListConvenio.module.css';
import styleStandard from '../ItemList.module.css';

function ItemListConvenio({ datas }) {
  return (
    <div className={`${styleStandard.itemList}`}>
      <h1>Item List</h1>
    </div>
  );
}

ItemListConvenio.propTypes = {
  datas: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ItemListConvenio;
