import React from 'react'
import {Link} from 'gatsby'
import SEO from "../components/seo"
import Layout from "../components/layout"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <h1>About Page</h1>
        <Link to="/"  title='Home Page'>Index Page</Link>
        <Link to="/about/" activeStyle={{color:'red'}} title='About Page'>About Page</Link>
    </Layout>
)

export default AboutPage
