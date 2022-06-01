// Library
import PropTypes from 'prop-types';

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
// Post Icon
import { AiOutlineCheck } from 'react-icons/ai';
// Edit Icon
import { MdOutlineModeEditOutline } from 'react-icons/md';
// View Icon
import { VscOpenPreview } from 'react-icons/vsc';
// Delete Icon // Back Icon
import { RiDeleteBack2Line, RiArrowGoBackFill } from 'react-icons/ri';

// Styles
import style from './Button.module.css';

function Button({
  color, type, text, to,
}) {
  return (
    <div className={`${style.button} ${style[color]}`}>
      {
          ({ type } === 'New' && <FaRegEdit />)({ type } === 'Post' && <AiOutlineCheck />)({ type } === 'Back' && <RiArrowGoBackFill />)({ type } === 'Edit' && <MdOutlineModeEditOutline />)({ type } === 'View' && <VscOpenPreview />)({ type } === 'Delete' && <RiDeleteBack2Line />)
      }
      <span>{text}</span>
    </div>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Button;
