/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:"Brix-Portfolio",
    description: "My portfolio built with gatsby",
    author: "Brix Angeles",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },`gatsby-plugin-sass`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-transition-link`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
],
}
