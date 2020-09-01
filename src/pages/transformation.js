import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Marked from "marked"
import SanitizeHtml from "sanitize-html";

const Transformation = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          title
          content
          image {
            childImageSharp {
              fixed(width: 400) {
                  base64
                  width
                  height
                  src
                  srcSet
              }
            }
          }
        }
      }
    }
  }`)

  return (
  <div>
    <Layout>
      <div>
        {data.allStrapiArticle.edges.map(edge =>{
          return (
            <div>
            <h1>{edge.node.title}</h1>
            <p>{Marked(edge.node.content)}</p>
            <Img fixed={edge.node.image.childImageSharp.fixed}></Img>
            </div>
          )
        })}
      </div>
    </Layout>
  </div>
  )
}

export default Transformation;