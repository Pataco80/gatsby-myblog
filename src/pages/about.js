import React from "react"


// Import components from Gatsby and plugins Gatsby
import {Link} from 'gatsby'

// Import Components for App
import Layout from "../components/Layout"
import SEO from "../components/seo"

// Import Styles


// Component
const AboutPage = () => (
  <Layout>
    <SEO title="About" />
        <h1>About Page</h1>
        <Link to="/"  title='Home Page'>Index Page</Link>
        <Link to="/about/" activeStyle={{color:'red'}} title='About Page'>About Page</Link>
  </Layout>
)

// React PropTypes and more...


// Styles from styled-components


export default AboutPage
