import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"
import { Helmet } from "react-helmet";

import Logo from "../images/logoS.png";

import headerStyles from "../styles/componentsStyles/header.module.scss";

import favIcon from "../images/fav2.ico";

const Header = () => {
    return(
        <header className={headerStyles.header}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Zielony trener</title>
            <meta name="description" content="Nazywam się Sebastian Zielonka, jestem trenerem Online." />
            <link rel="icon" type="image/png" href={favIcon}/>
        </Helmet>
        <div className={headerStyles.logoContainer}>
        <Link to="/"><img src={Logo}  className={headerStyles.title} alt="Logo"></img></Link>
        <ul className={headerStyles.headerSocialMedia}>
            <li><a aria-label="link" href="https://www.instagram.com/zielony_trener/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a></li>
            <li><a aria-label="link" href="https://www.facebook.com/Sebastian__Zielonka-105454837854619/"><FontAwesomeIcon icon={faFacebook} size="2x"/></a></li>
        </ul>
        </div>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Strona główna</Link>
                    </li>
                    <li>
                        <Link to="/transformation" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Przemiany</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;