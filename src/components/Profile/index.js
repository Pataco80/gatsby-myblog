import React from 'react'


// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'


// Import Components for App
import Avatar from '../Avatar'

// Styles from styled-components
import * as S from './styled'

// Component
const Profile = () => {

  // GraphQl Queries
  const getSiteData = graphql`
    {
      site {
        siteMetadata {
          title
          myJob
          description
          author
        }
      }
    }
  `
  const siteData = useStaticQuery(getSiteData)
  const {title,myJob,description} = siteData.site.siteMetadata

  // Render Component
  return(
    <S.ProfileWrapper>
      <Avatar/>
      <S.ProfileLink>
        <S.ProfileAuthor>{title}
          <S.ProfileMyJob>{myJob}</S.ProfileMyJob>
        </S.ProfileAuthor> 
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper> 
  )
}

// React PropTypes and more...

export default Profile