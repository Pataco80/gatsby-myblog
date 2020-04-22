import React from "react"


// Import components from Gatsby and plugins Gatsby


// Import Components for App
import Layout from '../components/Global/Layout'
import SEO from '../components/Global/seo'
import PostItem from '../components/Home/PostItem'

// Import Styles


// Component
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <PostItem slug='/about/' background='red' category='CSS' date='23 mars 2020' timeRead='5' title='Big course from the CSS' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nisl ipsum. Aliquam erat volutpat. Ut quis diam at metus laoreet eleifend. Pellentesque aliquet eget sem sit amet posuere. Donec quis aliquam turpis." />
  </Layout>
)

// React PropTypes and more...


export default IndexPage