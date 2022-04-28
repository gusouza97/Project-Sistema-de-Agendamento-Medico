import styles from './CadPaciente.module.css';

import LinkButton from '../layout/LinkButton'
import PatientForm from '../patient/PatientForm'

function CadPaciente(){
    return(
        <>
            <h1>Cadastrar Paciente:</h1>
            <LinkButton to="/pacientes" text="Voltar" customClass="yellow"/>
            <PatientForm/>
        </>
    );
}

export default CadPaciente;