import React from 'react'


// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql } from 'gatsby'


// Import Components for App
import Avatar from '../Avatar'

// Styles from styled-components
import getThemeColor from '../../utils/getThemeColor'
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
          author {
            firstName
            lastName
            twitterUsername
          }
        }
      }
    }
  `
  const siteData = useStaticQuery(getSiteData)
  const {myJob,description} = siteData.site.siteMetadata
  const {firstName,lastName} = siteData.site.siteMetadata.author

  // Render Component
  return(
    <S.ProfileWrapper>
      <Avatar/>
      <S.ProfileLink to='/' cover direction='left' duration={0.6} bg={getThemeColor()}>
        <S.ProfileAuthor>
          <span>{firstName}</span>
          {' '}
          <span>{lastName}</span> 
          <S.ProfileMyJob>{myJob}</S.ProfileMyJob>
        </S.ProfileAuthor> 
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper> 
  )
}

// React PropTypes and more...

export default Profile