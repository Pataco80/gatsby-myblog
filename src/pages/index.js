import React from "react"


// Import components from Gatsby and plugins Gatsby
import { useStaticQuery, graphql} from 'gatsby'

// Import Components for App
import Layout from '../components/Global/Layout'
import SEO from '../components/Global/seo'
import PostItem from '../components/Home/PostItem'

// Import Styles  

// Component
const IndexPage = () => {

  // GraphQl Queries
  const {posts} = useStaticQuery(graphql`
    query postList {
      posts:allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "dddd, DD MMM YYYY", locale: "fr")
              title
              description
              category
              background
            }
            timeToRead
          }
        }
      }
    }
  `)

  // Variables from queries
  const postsList = posts.edges

  // Render Component
  return(
    <Layout>
      <SEO title='Home' />
      {
        postsList.map(({node:{frontmatter:{date, title, description, category, background},timeToRead,fields:{slug}}}) => {
          return <PostItem slug={slug}  date={date} title={title} description={description} category={category} background={background} timeToRead={timeToRead}/>
        })
      }
      
    </Layout>
  )
}
  

// React PropTypes and more...


export default IndexPage