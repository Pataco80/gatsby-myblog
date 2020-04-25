import React from 'react'

// Import components from Gatsby and plugins Gatsby
import { graphql } from 'gatsby'

// Import Components for App
import Layout from '../components/Global/Layout'
import SEO from '../components/Global/seo'

// Styles from styled-components
import * as S from './styles/blog-post-styled'


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
        timeToRead
        html
      }
    }
  `

// Component
const BlogPostTemplate = ({data}) => {
  // Nous passons en paramêtre de la page les données de la requête appelée par défaut "data". Pour plus de facilité, nous mettons dans une variable "post" les données de "markdownRemark" se trouvant dans l'objet "data"
  const post = data.markdownRemark
  
  // Render Component
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>{post.frontmatter.date} - {post.timeToRead} {`min. de lecture`}</S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{__html:post.html}}></div>
      </S.MainContent>
    </Layout>
  )
}

// React PropTypes and more...



export default BlogPostTemplate
