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
            name
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

  if(data.allStrapiArticle === null || data.allStrapiArticle === undefined){
    console.log("Blad");
  }


  return (
    <Layout>
      <div className={tranasformationStyles.transformationBox}>
        {data.allStrapiArticle.edges.map(edge =>{
          return (
            <div className={tranasformationStyles.transformationContent} key={edge.node.title} data-aos="fade-up">
            <h2 className={tranasformationStyles.transformationContentTitle}>{edge.node.title}</h2>
            <Img 
            key={edge.node.image.name} 
            fluid={edge.node.image.childImageSharp.fluid} 
            className={tranasformationStyles.transformationContentImage}
            alt={edge.node.title} 
            />
              <div className={tranasformationStyles.transformationContentBox}>
              <div data-aos="fade-right"
              className={tranasformationStyles.transformationContentBoxText}
              dangerouslySetInnerHTML={{ __html: converter.makeHtml(edge.node.beforeContent)}}>
                </div>
              <div data-aos="fade-left"
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