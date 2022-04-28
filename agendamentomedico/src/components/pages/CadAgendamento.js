import styles from './CadAgendamento.module.css';

import LinkButton from '../layout/LinkButton'
import SchedulingForm from '../scheduling/SchedulingForm'

function CadAgendamento(){
    return(
        <>
            <h1>Novo Agendamento:</h1>
            <LinkButton to="/agendamentos" text="Voltar" customClass="yellow"/>
            <SchedulingForm/>
        </>
    );
}

export default CadAgendamento;