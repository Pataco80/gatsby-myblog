import React from 'react'


// Import components from Gatsby and plugins Gatsby
import {useStaticQuery,graphql} from 'gatsby'


// Import Components for App
import Avatar from '../Avatar'


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
    <div className="profile-wrapper">
      <Avatar/>
      <h1>{title}</h1> 
      <h2>{myJob}</h2>
      <p>{description}</p>
    </div> 
  )
}

// React PropTypes and more...


// Styles from styled-components


export default Profile