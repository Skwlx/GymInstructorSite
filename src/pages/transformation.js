import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import tranasformationStyles from '../styles/pagesStyles/transformation.module.scss'

const Transformation = () => {
  let showdown  = require('showdown');
  let converter = new showdown.Converter();
  const data = useStaticQuery(graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          title
          afterContent
          beforeContent
          image {
            id
            childImageSharp {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
    }
  }`)

  return (
    <Layout>
      <div className={tranasformationStyles.transformationBox}>
        {data.allStrapiArticle.edges.map(edge =>{
          return (
            <div className={tranasformationStyles.transformationContent}>
            <h2 className={tranasformationStyles.transformationContentTitle}>{edge.node.title}</h2>
            <Img 
            fluid={edge.node.image.childImageSharp.fluid} 
            className={tranasformationStyles.transformationContentImage} 
            key={edge.node.image.id} 
            />
              <div className={tranasformationStyles.transformationContentBox}>
              <div 
              className={tranasformationStyles.transformationContentBoxText}
              dangerouslySetInnerHTML={{ __html: converter.makeHtml(edge.node.beforeContent)}}>
                </div>
              <div 
              className={tranasformationStyles.transformationContentBoxText}
              dangerouslySetInnerHTML={{ __html: converter.makeHtml(edge.node.afterContent)}}>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Transformation;