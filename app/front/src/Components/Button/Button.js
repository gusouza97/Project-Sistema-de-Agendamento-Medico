/* Icons -> Types
    New -> Redirect Page Post
    Post -> Post Datas
    Back -> Back Page
    Edit -> ON Edit Datas
    View -> View Datas
    Delete -> Delete Datas
*/
// New Icon
import { FaRegEdit } from 'react-icons/fa';
// Post Icon // Search Icon // Load Icon
import { AiOutlineCheck, AiOutlineSearch, AiOutlineReload } from 'react-icons/ai';
// Edit Icon
import { MdOutlineModeEditOutline } from 'react-icons/md';
// View Icon
import { VscOpenPreview } from 'react-icons/vsc';
// Delete Icon // Back Icon
import { RiDeleteBack2Line, RiArrowGoBackFill } from 'react-icons/ri';

// Styles
import style from './Button.module.css';

function Button({
  color, type, text, handle,
}) {
  return (
    <button className={`${style.button} ${style[color]}`} type="button" onClick={handle}>
      {type === 'New' && (<FaRegEdit />)}
      {type === 'Post' && (<AiOutlineCheck />)}
      {type === 'Back' && (<RiArrowGoBackFill />)}
      {type === 'Edit' && (<MdOutlineModeEditOutline />)}
      {type === 'View' && (<VscOpenPreview />)}
      {type === 'Delete' && (<RiDeleteBack2Line />)}
      {type === 'Search' && (<AiOutlineSearch />)}
      {type === 'Reload' && (<AiOutlineReload />)}
      {text && (<span>{text}</span>)}
    </button>
  );
}

export default Button;
