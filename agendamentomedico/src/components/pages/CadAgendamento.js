import styles from './CadAgendamento.module.css';

import LinkButton from '../layout/LinkButton'
import ProjectForm from '../project/ProjectForm'

function CadAgendamento(){
    return(
        <>
            <h1>Novo Agendamento:</h1>
            <LinkButton to="/pacientes" text="Voltar" customClass="yellow"/>
            <ProjectForm/>
        </>
    );
}

export default CadAgendamento;