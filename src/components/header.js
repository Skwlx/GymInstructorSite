import React, { useEffect } from "react"
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

    useEffect(() =>{

        const addAnimation = (arrEl, animation) => {
            [...burgerParts][arrEl].classList.add(animation);
        };
        const removeAnimation = (arrEl, animation) => {
            [...burgerParts][arrEl].classList.remove(animation);
        };

        const burger = document.querySelector(`.${headerStyles.navContainerBurger}`);
        const menu = document.querySelector(`.${headerStyles.navContainer}`);
        let burgerParts = document.querySelectorAll(`.${headerStyles.navContainerBurgerLine}`)
        let toggle = 0;
        burger.addEventListener('click', () => {
            if(toggle === 0){
            toggle = 1;
            addAnimation(0,headerStyles.disapear);
            addAnimation(1,headerStyles.rotateToXA);
            addAnimation(2,headerStyles.rotateToXB);
            menu.classList.remove(headerStyles.hideMenu);
            menu.classList.add(headerStyles.displayMenu);
            }
            else{
                toggle = 0;
                removeAnimation(0, headerStyles.disapear);
                removeAnimation(1, headerStyles.rotateToXA);
                removeAnimation(2, headerStyles.rotateToXB);
                menu.classList.remove(headerStyles.displayMenu);
                menu.classList.add(headerStyles.hideMenu);
            }
        })
    })
    return(
        <header className={headerStyles.header}>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" /> 
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
        <div className={headerStyles.navContainer}>
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
        </div>
        <div className={headerStyles.navContainerBurger}>
        <span className={headerStyles.navContainerBurgerLine}></span>
        <span className={headerStyles.navContainerBurgerLine}></span>
        <span className={headerStyles.navContainerBurgerLine}></span>
        </div>
        </header>

    )
}

export default Header;