import React from "react";

import jumboStyles from "../styles/componentsStyles/jumbotron.module.scss";

const Jumbotron = () => {
    return (
        <div className={jumboStyles.jumbotron}>
        <div className={jumboStyles.jumbotronContent}>
          <h3>Sebastian Zielonka</h3>
          <p>
          Razem zmienimy twoją sylwetkę
          </p>
        </div>
      </div>
    )
}

export default Jumbotron;