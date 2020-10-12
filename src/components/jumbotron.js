import React from "react";

import jumboStyles from "../styles/componentsStyles/jumbotron.module.scss";

const Jumbotron = () => {
    return (
        <div className={jumboStyles.jumbotron}>
        <div className={jumboStyles.jumbotronContent}>
          <h3>Gym Instructor</h3>
          <p>
          Zmień swoją sylwetkę
          </p>
        </div>
      </div>
    )
}

export default Jumbotron;