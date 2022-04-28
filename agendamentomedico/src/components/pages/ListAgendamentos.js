import LinkButton from '../layout/LinkButton';
import styles from './ListAgendamentos.module.css';

function ListAgendamentos(){
    return(
        <>
            <h1>Agendamentos</h1>
            <LinkButton to="/agendamentos/cadastrar" text="Novo Agendamento" customClass="green"/>
        </>
    );
}

export default ListAgendamentos;