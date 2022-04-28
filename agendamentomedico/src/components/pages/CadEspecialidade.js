import styles from './CadEspecialidade.module.css';

import LinkButton from '../layout/LinkButton'
import ProjectForm from '../project/ProjectForm'

function CadEspecialidade(){
    return(
        <>
            <h1>Nova Especialidade:</h1>
            <LinkButton to="/pacientes" text="Voltar" customClass="yellow"/>
            <ProjectForm/>
        </>
    );
}

export default CadEspecialidade;