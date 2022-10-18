import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer(){
    return(
       <footer className={`${styles.footer} `}>
            <ul className={`${styles.social_list} `}>
                <li><FaFacebook></FaFacebook></li>
                <li><FaInstagram></FaInstagram></li>
                <li><FaLinkedin></FaLinkedin></li>
            </ul>
            <p lassName={`${styles.copy_right} `}>
                <span>Costs</span> &copy; 2022
            </p>
       </footer>
    )

}

export default Footer