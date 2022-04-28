import styles from './CadMedico.module.css';

import LinkButton from '../layout/LinkButton'
import DoctorForm from '../doctor/DoctorForm'

function CadMedico(){
    return(
        <>
            <h1>Cadastrar Médico:</h1>
            <LinkButton to="/medicos" text="Voltar" customClass="yellow"/>
            <DoctorForm/>
        </>
    );
}

export default CadMedico;