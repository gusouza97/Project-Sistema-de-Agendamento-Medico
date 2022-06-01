// Library
import PropTypes from 'prop-types';

// Styles
import style from './ItemListAgendamento.module.css';
import styleStandard from '../ItemList.module.css';

function ItemListAgendamento({ datas }) {
  return (
    <div className={`${styleStandard.itemList}`}>
      <h1>Item List</h1>
    </div>
  );
}

ItemListAgendamento.propTypes = {
  datas: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default ItemListAgendamento;
