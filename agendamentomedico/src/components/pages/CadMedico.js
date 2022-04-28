import styles from './CadMedico.module.css';

import LinkButton from '../layout/LinkButton'
import ProjectForm from '../project/ProjectForm'

function CadMedico(){
    return(
        <>
            <h1>Cadastrar Médico:</h1>
            <LinkButton to="/pacientes" text="Voltar" customClass="yellow"/>
            <ProjectForm/>
        </>
    );
}

export default CadMedico;