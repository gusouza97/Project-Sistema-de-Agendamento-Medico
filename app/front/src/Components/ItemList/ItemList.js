// Library
import PropTypes from 'prop-types';

// Styles
import style from './ItemList.module.css';

function ItemList({ datas, bgColor }) {
  return (
    <div className={`${style.itemList} ${style[bgColor]}`}>
      <h1>Item List</h1>
    </div>
  );
}

ItemList.propTypes = {
  datas: PropTypes.arrayOf(PropTypes.array()).isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ItemList;
