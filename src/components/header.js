import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

import headerStyles from "./header.module.scss";

const Header = () => {
    return(
        <header className={headerStyles.header}>
        <span>
        <Link to="/" className={headerStyles.title}>Sebastian Zielonka</Link>
        </span>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" className={headerStyles.navItem}>Strona główna</Link>
                    </li>
                    <li>
                        <Link to="/transformation" className={headerStyles.navItem}>Transformacje</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.navItem}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
            <ul className={headerStyles.headerSocialMedia}>
                <li><a href="https://www.instagram.com/sebastian__zielonka/?fbclid=IwAR3EAr29t_51d_TWlKWsP5hy7Wz_-7_8RVN_OutZw3f0FzcdRXeA33twVZk"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
                <li><a href="https://www.facebook.com/Sebastian__Zielonka-105454837854619/"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
            </ul>
        </header>

    )
}

export default Header;