import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'

// Import Components for App

// Styles from styled-components
import * as S from './styled'

// Component
const Avatar = () => {

  // GraphQl Queries
  const { avatarImage } = useStaticQuery(graphql`
    {
      avatarImage:file(relativePath: {eq: "photo-cv.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  // Render Component
  return (
    <S.AvatarImage fluid={avatarImage.childImageSharp.fluid} title='Profile Photo'/>
  )
}

// React PropTypes and more...



export default Avatar
