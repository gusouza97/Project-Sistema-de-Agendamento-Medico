import styles from './ListEspecialidades.module.css';

import LinkButton from '../layout/LinkButton';

function ListEspecialidades(){
    return(
        <>
            <h1>Especialidades</h1>
            <LinkButton to="/especialidades/cadastrar" text="Nova Especialidade" customClass="green"/>
        </>
    );
}

export default ListEspecialidades;