import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import logo from '../../imgs/costs_logo.png'
import Container from './Container'

function Navbar(props){
    return(
        <nav className={`${styles.navbar} `}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs"></img>
                </Link>
                <ul className={`${styles.list} `}>
                    <li className={`${styles.item} `}><Link to="/">Home</Link></li>
                    <li className={`${styles.item} `}><Link to="/projects">Projetos</Link></li>
                    <li className={`${styles.item} `}><Link to="/company">Empresa</Link></li>
                    <li className={`${styles.item} `}><Link to="/contact">Contato</Link></li>
                    <li className={`${styles.item} `}><Link to="/newProject">Novo Projeto</Link></li>
                </ul>
            </Container>
        </nav>
    )

}

export default Navbar