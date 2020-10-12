import React from "react"
import Layout from "../components/layout"

import tranasformationStyles from '../styles/pagesStyles/transformation.module.scss'

import photo from "../images/Me.jpg"

const Transformation = () => {

  return (
    <Layout>
      <div className={tranasformationStyles.transformationBox}>
        <div className={tranasformationStyles.transformationContent} data-aos="fade-up">
            <h2 className={tranasformationStyles.transformationContentTitle}>Imię</h2>
            <img 
            src={photo}
            className={tranasformationStyles.transformationContentImage}
            />
              <div className={tranasformationStyles.transformationContentBox}>
              <div data-aos="fade-right"
              className={tranasformationStyles.transformationContentBoxText}>
              DANE
                </div>
              <div data-aos="fade-left"
              className={tranasformationStyles.transformationContentBoxText}>
              DANE
                </div>
              </div>
            </div>
      </div>
    </Layout>
    
  )
}

export default Transformation;