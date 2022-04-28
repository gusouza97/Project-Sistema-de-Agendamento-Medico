import styles from './ContainerPrincipal.module.css';

function ContainerPrincipal(props){
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    );
}

export default ContainerPrincipal;