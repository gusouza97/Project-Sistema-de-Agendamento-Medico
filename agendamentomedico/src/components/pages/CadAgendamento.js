import styles from './CadAgendamento.module.css';

import LinkButton from '../layout/LinkButton'
import SchedulingForm from '../scheduling/SchedulingForm'

import Card from '../layout/Card'
import Break from '../layout/Break';

function CadAgendamento(){
    return(
        <>
            <h1>Novo Agendamento:</h1>
            <LinkButton to="/agendamentos" text="Voltar" customClass="yellow"/>
            <Break/>
            <Card>
                <SchedulingForm/>
            </Card>
        </>
    );
}

export default CadAgendamento;