import React from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./header";
import Footer from "./footer";

import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";

AOS.init({once: true})

const Layout = (props) => {
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