import styles from './ListPacientes.module.css';

import LinkButton from '../layout/LinkButton';
import Card from '../layout/Card';

function ListPacientes(){
    return(
        <>
            <h1>Pacientes</h1>
            <LinkButton to="/pacientes/cadastrar" text="Cadastrar Paciente" customClass="green"/>
            <Card>
                
            </Card>
        </>
    );
}

export default ListPacientes;