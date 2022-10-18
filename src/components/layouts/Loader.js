import styles from './Loader.module.css'
import loading from '../../imgs/loading.svg'

function Loader(){
    return(
        <div className={styles.loader_container}>
            <img  className={styles.loader} src={loading} alt="loading"></img>
        </div>
    )
}

export default Loader