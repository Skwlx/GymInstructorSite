import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

import footerStyles from "../styles/componentsStyles/footer.module.scss"

const Footer = () =>{
  return (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.footerContent}>
      <h3 className={footerStyles.footerTitle}><Link className={footerStyles.footerContact} to="/contact">Skontaktuj</Link> się ze mną, lub zajrzyj na moje social media.</h3>
      <a className={footerStyles.footerSocial} href="https://www.instagram.com/sebastian__zielonka/?fbclid=IwAR3EAr29t_51d_TWlKWsP5hy7Wz_-7_8RVN_OutZw3f0FzcdRXeA33twVZk">
      <FontAwesomeIcon icon={faInstagram} size="3x"/></a>
      <a className={footerStyles.footerSocial} href="https://www.facebook.com/Sebastian__Zielonka-105454837854619/">
      <FontAwesomeIcon icon={faFacebook} size="3x"/></a>
      <p className={footerStyles.footerCopy}>Copyright © {new Date().getFullYear()} Paweł Sławuta</p>
    </div>
  </footer>
  )
}

export default Footer;