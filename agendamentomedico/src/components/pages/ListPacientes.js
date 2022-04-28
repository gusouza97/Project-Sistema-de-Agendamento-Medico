import styles from './ListPacientes.module.css';

import LinkButton from '../layout/LinkButton';

function ListPacientes(){
    return(
        <>
            <h1>Pacientes</h1>
            <LinkButton to="/pacientes/cadastrar" text="Cadastrar Paciente" customClass="green"/>
        </>
    );
}

export default ListPacientes;