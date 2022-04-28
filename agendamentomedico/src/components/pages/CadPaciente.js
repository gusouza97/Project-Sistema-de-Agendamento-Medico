import styles from './CadPaciente.module.css';

import LinkButton from '../layout/LinkButton'
import ProjectForm from '../project/ProjectForm'

function CadPaciente(){
    return(
        <>
            <h1>Cadastrar Paciente:</h1>
            <LinkButton to="/pacientes" text="Voltar" customClass="yellow"/>
            <ProjectForm/>
        </>
    );
}

export default CadPaciente;