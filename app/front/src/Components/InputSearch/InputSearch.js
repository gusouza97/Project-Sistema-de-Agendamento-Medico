// Components
import Button from '../Button/Button';

// Styles
import style from './InputSearch.module.css';
import '../../Assets/Styles/global.css';

function InputSearch({ handleSearch }) {
  return (
    <div className={style.InputSearch}>
      <input type="search" placeholder="Pesquisar..." onChange={(e) => { handleSearch(e.target.value); }} />
      <Button color="button--color-grey" type="Search" />
    </div>
  );
}

export default InputSearch;
