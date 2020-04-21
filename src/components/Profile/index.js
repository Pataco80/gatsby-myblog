import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import Avatar from '../Avatar'

const Profile = () => {
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
return(
    <div className="profile-wrapper">
      <Avatar/>
    <h1>{title}</h1> 
    <h2>{myJob}</h2>
    <p>{description}</p>
</div> 
)
}


export default Profile