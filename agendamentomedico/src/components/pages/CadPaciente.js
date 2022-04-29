import styles from './CadPaciente.module.css';

import LinkButton from '../layout/LinkButton'
import Card from '../layout/Card'
import PatientForm from '../patient/PatientForm'

function CadPaciente(){
    return(
        <>
            <h1>Cadastrar Paciente:</h1>
            <LinkButton to="/pacientes" text="Voltar" customClass="yellow"/>
            <Card>
                <PatientForm/>
            </Card>
        </>
    );
}

export default CadPaciente;