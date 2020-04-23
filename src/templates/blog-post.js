import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Global/Layout'

// Styles from styled-components
//import * as S from './styled'


// GraphQl Queries

  // Dans cette requête nous passons en paramêtre une variable "${slug}" sous forme de chaine de caractères "String!". La valeur du  champ slug est injecté dans la variable "markdownRemark(fields: {slug: {eq: $slug}})".
  export const getPost = graphql`
    query ($slug:String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          title
          description
          date(formatString: "dddd, DD MMM YYYY", locale: "fr")
          category
          background
        }
        html
      }
    }
  `

// Component
const BlogPost = ({data}) => {
  // Nous passons en paramêtre de la page les données de la requête appelée par défaut "data". Pour plus de facilité, nous mettons dans une variable "post" les données de "markdownRemark" se trouvant dans l'objet "data"
  const post = data.markdownRemark
  
  // Render Component
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html:post.html}}></div>
    </Layout>
  )
}

// React PropTypes and more...



export default BlogPost
