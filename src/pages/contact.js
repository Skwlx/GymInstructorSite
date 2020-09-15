import React, { useEffect } from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
    faPhoneAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import contactStyles from "../styles/pagesStyles/contact.module.scss"

const Contact = () =>{

  useEffect(() => {
    let letters = document.querySelectorAll(`.${contactStyles.contactListElement}`);
    [...letters].map((el, i) =>{
      setTimeout(() => {
        el.classList.add(contactStyles.animate);
      }, i * 350);
    });
  });

  return (
  <div>
    <Layout>
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactContent}  data-aos="fade-in">
          <h2>Masz pytanie? Chcesz się umówić? Skontaktuj się!<span role="img" aria-label="emoji-Finger">👇</span></h2>
          <ul className={contactStyles.contactList}>
            <li className={contactStyles.contactListElement}>
            <a aria-label="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/Sebastian__Zielonka-105454837854619/">
              <FontAwesomeIcon icon={faFacebook} size="3x"/>
            </a>
            <span>Napisz wiadomość przez Facebook'a.</span>
            </li>
            <li className={contactStyles.contactListElement}>
              <a aria-label="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/zielony_trener/">
                <FontAwesomeIcon icon={faInstagram} size="3x"/>
              </a>
              <span className={contactStyles.brokenSpan}>Zajrzyj na Instagrama.</span>
            </li>
            <li className={contactStyles.contactListElement}>
              <a href="tel:+48 534 304 262">
                <FontAwesomeIcon icon={faPhoneAlt} size="3x"/>
              </a>
              <span>Zadzwoń (+48 534 304 262).</span>
            </li>
            <li className={contactStyles.contactListElement}>
              <a href="mailto:sebastianzielonka32@gmail.com" aria-label="Wyslij email">
                <FontAwesomeIcon icon={faEnvelope} size="3x"/>
              </a>
              <span>Wyślij maila (sebastianzielonka32@gmail.com).</span>
            </li>
            </ul>
        </div>
      </div>
    </Layout>
  </div>
  
  )
}

export default Contact;