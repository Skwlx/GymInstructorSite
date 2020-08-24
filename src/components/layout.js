import React from "react"

import Header from "./header";
import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";

const Layout = (props) => {
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;