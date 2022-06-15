// Icons
// import { AiOutlineCloudUpload } from 'react-icons/ai';

// Images
import iconUpload from '../../Assets/Images/iconUpload.png';

// Styles
import style from './InputFile.module.css';

function InputFile() {
  return (
    <div className={style.ImgArea}>
      <input type="file" name="file" id="file" className={style.inputfile} />
      <label htmlFor="file"><img src={iconUpload} alt="Upload" /></label>
    </div>
  );
}

export default InputFile;
