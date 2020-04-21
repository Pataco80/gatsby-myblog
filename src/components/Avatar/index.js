import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'
const Avatar = () => {
    const {avatarImage} = useStaticQuery(graphql`
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
    return (
        <Img fixed={avatarImage.childImageSharp.fixed} title='Profile Photo'/>
    )
}

export default Avatar
