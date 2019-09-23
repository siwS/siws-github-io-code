module.exports = {
  siteMetadata: {
    title: `Sofia's brain storms`,
    description: `This is the home of my creativity, thoughts and side projects.`,
    author: `@SophieSiw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sofias-brainstorms`,
        short_name: `siw`,
        start_url: `/`,
        background_color: `#483D8B`,
        theme_color: `#483D8B`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
