import React, { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./header";
import Footer from "./footer";

import layoutStyles from "../styles/componentsStyles/layout.module.scss";
import "../styles//index.scss";


const Layout = (props) => {
    useEffect(() => {
        AOS.init({once: true})
    })
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;