/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const BlogPostTemplate = path.resolve(`./src/templates/blog-post.js`)

exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node, 
      getNode, 
      basePath: `pages` 
    })
    
    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: BlogPostTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}