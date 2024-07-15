import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

function Footer(){
    return(
        <ul className={styles['footer-container']}>
            <li><img src="/logo-placeholder.jpg" className={styles['image']} /></li>
            <hr className={styles['hr']}></hr>
            <li><Link to={'/privacy-policy'}>Privacy Policy</Link> | <Link to={'/terms-of-service'}>Terms of Service</Link></li>
            <li>Copyright © 2024 Logo</li>
        </ul>
    )
}

export default Footer