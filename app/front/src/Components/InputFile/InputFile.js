// Icons
// import { AiOutlineCloudUpload } from 'react-icons/ai';

// Images
// import iconUpload from '../../Assets/Images/iconUpload.png';

// Styles
import style from './InputFile.module.css';

function ImgArea() {
  return (
    <div className={style.ImgArea}>
      {/* <img src={iconUpload} alt="Upload" /> */}
      <input type="file" />
    </div>
  );
}

export default ImgArea;
