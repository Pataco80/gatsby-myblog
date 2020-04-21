import React from 'react'


// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


// Import Components for App


// Component
const Avatar = () => {

  // GraphQl Queries
  const { avatarImage } = useStaticQuery(graphql`
    {
      avatarImage:file(relativePath: {eq: "photo-cv.jpg"}) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  // Render Component
  return (
    <Img fixed={avatarImage.childImageSharp.fixed} title='Profile Photo'/>
  )
}

// React PropTypes and more...


// Styles from styled-components


export default Avatar
