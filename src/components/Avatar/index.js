import React from "react"

// Import components from Gatsby and plugins Gatsby
import { StaticImage } from "gatsby-plugin-image"

// Import Components for App

// Styles from styled-components
import * as S from "./styled"

// Component
const Avatar = () => {
  // GraphQl Queries

  // Render Component
  return (
    <S.AvatarWrapper>
      <StaticImage
        src="../../images/photo-cv.jpg"
        alt="Photo Ricardo Do Vale"
        placeholder="blurred"
      />
    </S.AvatarWrapper>
  )
}

// React PropTypes and more...

export default Avatar
