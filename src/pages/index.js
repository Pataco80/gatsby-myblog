import React from "react"


// Import components from Gatsby and plugins Gatsby
import {Link} from 'gatsby'


// Import Components for App
import Layout from "../components/Layout"
import SEO from "../components/seo"


// Import Styles


// Component
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Blog</h1>
    <Link to="/" activeStyle={{ color: "red" }} title="Home Page">
      Index Page
    </Link>
    <Link to="/about/" title="About Page">
      About Page
    </Link>
  </Layout>
)

// React PropTypes and more...


// Styles from styled-components


export default IndexPage
