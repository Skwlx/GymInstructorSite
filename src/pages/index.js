import React from "react"
import Layout from "../components/layout"

import indexStyles from "./index.module.scss";

const IndexPage = () =>{
  return (
  <div>
    <Layout>
      <div className={indexStyles.jumbotron}>
        <div className={indexStyles.jumbotronContent}>
          <h3>Sebastian Zielonka</h3>
          <p>
          Razem zmienimy twoją sylwetkę
          </p>
        </div>
      </div>
    </Layout>
  </div>
  )
}

export default IndexPage;