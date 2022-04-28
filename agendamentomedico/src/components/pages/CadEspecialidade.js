import styles from './CadEspecialidade.module.css';

import LinkButton from '../layout/LinkButton'
import SpecialtyForm from '../specialty/SpecialtyForm'

function CadEspecialidade(){
    return(
        <>
            <h1>Nova Especialidade:</h1>
            <LinkButton to="/especialidades" text="Voltar" customClass="yellow"/>
            <SpecialtyForm/>
        </>
    );
}

export default CadEspecialidade;