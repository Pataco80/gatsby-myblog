/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// path est requis pour créer des nouvelles pages avec la méthode ".createPages()"
const path = require('path')

// You can delete this file if you're not using it
// CreateFilePath sert à créer des urls des pages en se référent au systeme de fichiers pour aller chercher le dossier 'posts'
const { createFilePath } = require(`gatsby-source-filesystem`)

// Variables de chemin pour les templates
const BlogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
const BlogListTemplate = path.resolve(`./src/templates/blog-list.js`)

// Création du champs slug pour chaques posts
exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions

  // Vérifie si le type de fichier et Markdown,... si oui, il crée  le chemin pour le slug en se basant sur la création de 'pages'
  if (node.internal.type === 'MarkdownRemark') {

    // si oui, il crée  le chemin pour le slug en se basant sur la création de 'pages'
    const slug = createFilePath({
      node, 
      getNode, 
      basePath: 'pages' 
    })
    
    // Cràatopm du champ "slug" pour la requête GraphQl à chaque post, considéré comme un "item", appelé "node" ou noeud.
    createNodeField({
      node, // chaque post est un noeud
      name: 'slug',
      value: `/${slug.slice(12)}`, // affichage de l'url ex: "http://www.monsite.com`/nom-du-fichier`" stocké dans la variable "${slug}".
      // Utilisation de la méthode ".slice(12)" pour sauter les 12 premiers caractères du nom du fichier afin d'éviter la suite de chiffres de la date. Seul le texte titre du post s'affichera.
    })
  }
}

// Création des pages de site. Méthode ".createPage" va se servir des données graphQl pour retourner une page spécifique.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Requête graphQl pour obtenir le slug du post, comme le ferait un identifiant unique et créer ainsi la page à partir de la donnée slug reçue.
  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
              image
            }
            timeToRead
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
 // La requête étant asynchrone, la methode ".then()" s'applique. Nous nomons "postList" le résultat de la requête et la passons en paramêtre de la méthode et exécutons une fonction.


    // On récupère la liste et faisons une boucle du "eges", un tableau contenant tous les posts. Chaque post considéré comme un "item", appelé "node" ou noeud est passé en argument comme un objet
    const postList = result.data.allMarkdownRemark.edges
    
    postList.forEach(({ node, previous, next }) => {
      // A la création de la page, il y a 3 paramêtres,
      // "path:" reçois la valeur de l'url, la valeur du champ "slug" en locurance.
      // "component:" Il s'agit de la page qui servira de template
      // "cpmtext:" est un objet dont on passe les variables pour la requête graphQl
      createPage({
        path: node.fields.slug,
        component: BlogPostTemplate,
        context: {
          // Ci dessous nous passons le slug du post comme valeur de la requête graphQl. Il peut y avoir plusieurs variables dans le contexte, ici, seul le slug est nécéssaire pour créer la page.
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        },
      })
    })

    // Création de variable pour limiter la quantité de posts par page
    const postsForPage = 6

    // Calcul pour déterminer le nombre de pages à créer en utilisant "Math" aditionnée de ".ceil" pour effectuer un arrondi au dessus lors du calcul (page 1,xxx deviens ainsi page 2)
    const numPages = Math.ceil(postList.length / postsForPage)

    // Design de la pagination sous forme de tableau contenant les pages et créant une boucle pour attribuer un index à chaqune qui sert d'identifiant
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,// url à afficher suivant la page selectionnée
        component: BlogListTemplate, // Template du composant
        context: {
          // Ellements à situer dans le contexte pour exécuter les diverses opérations du composant pour la pagination
          limit: postsForPage,
          skip: index * postsForPage,
          numPages,
          currentPage: index + 1,
        },
      })
    })
  })
}
