import styles from './ListMedicos.module.css';

import LinkButton from '../layout/LinkButton';

function ListMedicos(){
    return(
        <>
            <h1>Medicos</h1>
            <LinkButton to="/medicos/cadastrar" text="Cadastrar Médico" customClass="green"/>
        </>
    );
}

export default ListMedicos;