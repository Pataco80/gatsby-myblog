/* Comme je n'ai pas plusieurs environnement node.js, ma configuration et simple, mais je vous montre ci-dessous la complête en commentaire.

require('dotenv').config({
  path: `.env.${process.env.votre _environement}`,
})

Vous pouvez avoir plusieurs environements tels que develop, proeuction ou test par exemple.
*/

// Dans le cas de non variables d'environnement, écrivez le code ci-dessous.
require("dotenv").config()

const queries = require("./src/utils/algolia_queries")

// Configuration de Gatsby et des modules plugins de Gatsby
module.exports = {
  siteMetadata: {
    title: `Ricardo Do Vale`,
    myJob: `Developpeur Jamstack`,
    description: `Créateur de sites web avec React et Gatsby.`,
    keywords: `React Blog Gatsby PWA`,
    author: {
      firstName: `Ricardo`,
      lastName: `Do Vale`,
      twitterUsername: `Pataco80`,
    },
    siteUrl: "https://gatsby-myblog.netlify.app",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,

    // Attention !! les "uploads" doivent être tout en haut des "gatsby-source-filesystem"
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,

          // Attention ce plugin doit être placer en dernier dans "gatsby-transformer-remark"
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,

    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ricardo Do Vale - Blog`,
        short_name: `Vale - Blog`,
        lang: `fr`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`, // This path is relative to the root of the site.
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
