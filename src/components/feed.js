import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import feedStyles from "../styles/componentsStyles/instaFeed.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faComment
} from '@fortawesome/free-solid-svg-icons'

const Feed  = () => {
  const instaData = useStaticQuery(graphql`
  query {
    allInstaNode(limit: 6) {
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

  // Setting amout of photos in one slide depends on screen width
  const responsive = {
    450: { items: 1 },
    800: {items: 2},
    1230: { items: 3 },
    1700: {items: 4}
  }
  

return (
  <div className={feedStyles.instaFeedContainer}>
  <h3 className={feedStyles.instaFeedContainerTitle}>INSTAGRAM</h3>
  <AliceCarousel 
  buttonsDisabled={true} 
  dotsDisabled={true} 
  autoPlay={true} 
  infinite={true} 
  autoPlayInterval={2000} 
  responsive={responsive} 
  autoHeight={true}
  fadeOutAnimation={true}
  >

  {instaData.allInstaNode.edges.map(edge => {
      return(
        <div>
        <Img 
        imgStyle={{ objectFit: 'contain' }}
        className={feedStyles.instaFeedContainerPhoto} 
        fixed={edge.node.localFile.childImageSharp.fixed} 
        alt={edge.node.caption} key={edge.node.id}/>
        <p className={feedStyles.instaFeedContainerLikesAmount}>
        <FontAwesomeIcon className={feedStyles.instaFeedContainerPhotoLikes} icon={faHeart}/>
        {edge.node.likes}
        </p>
        <p className={feedStyles.instaFeedContainerCommentsAmount}>
        <FontAwesomeIcon className={feedStyles.instaFeedContainerPhotoComments} icon={faComment}/>
        {edge.node.comments}
        </p>
        </div>
      )
    })}
  </AliceCarousel>
  </div>
    )
}

export default Feed;