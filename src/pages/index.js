import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Blog</h1>
    <Link to="/" activeStyle={{color:'red'}} title='Home Page'>Index Page</Link>
    <Link to="/about/" title='About Page'>About Page</Link>
  </Layout>
)

export default IndexPage
