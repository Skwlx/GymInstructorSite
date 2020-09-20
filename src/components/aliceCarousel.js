import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import feedStyles from "../styles/componentsStyles/instaFeed.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart
} from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {
  const instaData = useStaticQuery(graphql`
  query {
    allInstaNode(limit: 12) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fixed {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalName
              }
            }
          }
        }
      }
    }
  }
  `)

  const responsive = {
    450: { items: 1 },
    800: {items: 2},
    1024: { items: 3 },
    1700: {items: 4}
  }
return (
  <AliceCarousel buttonsDisabled={true} dotsDisabled={true} autoPlay={true} infinite={true} autoPlayInterval={1000} responsive={responsive} autoHeight={true}>
  {instaData.allInstaNode.edges.map(edge => {
      return(
        <div>
        <Img className={feedStyles.instaFeedContainerPhoto} fixed={edge.node.localFile.childImageSharp.fixed} alt={edge.node.caption} key={edge.node.id}/>
        <p className={feedStyles.instaFeedContainerLikesAmount}><FontAwesomeIcon className={feedStyles.instaFeedContainerPhotoLikes} icon={faHeart}/>{edge.node.likes}</p>
        </div>
      )
  })}
  </AliceCarousel>
    )
}

export default Gallery;