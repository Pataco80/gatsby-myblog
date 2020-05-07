// essayez de trouver un identifiant unique pour chaque nœud si ce champ est absent, il sera inséré automatiquement par Algolia et sera moins simple à mettre à jour etc. Pour faciliter, passez l'id du post par l'"objectID" pour Algolia. ainsi l'ID de chaque post sera transmis via "objectID".

const getPosts = `{
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            date_timestamp: date
            date(formatString: "dddd, DD MMM YYYY", locale: "fr")
            title
            description
            category
            background
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }
`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: getPosts,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: 'envDevPosts', // overrides main index name, optional
    settings,
  },
];

module.exports = queries