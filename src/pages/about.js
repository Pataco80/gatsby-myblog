import React from 'react'
import {Link} from 'gatsby'

const AboutPage = () => (
        <>
         <h1>About Page</h1>
    <Link to="/"  title='Home Page'>Index Page</Link>
    <Link to="/about/" activeStyle={{color:'red'}} title='About Page'>About Page</Link>

        </>
    )

export default AboutPage
