import React from "react"

// Import components from Gatsby and plugins Gatsby
import AniLink from "gatsby-plugin-transition-link/AniLink"

// Import Components for App
import Layout from "../components/Global/Layout"
import Seo from "../components/Global/seo"

// Import Styles

// Component
const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About Page</h1>
    <AniLink to="/" title="Home Page">
      Index Page
    </AniLink>
    <AniLink to="/about/" activeStyle={{ color: "red" }} title="About Page">
      About Page
    </AniLink>
  </Layout>
)

// React PropTypes and more...

// Styles from styled-components

export default AboutPage
