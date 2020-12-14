module.exports = {
  siteMetadata: {
    title: `telfer`,
    description: `Andrei Telfer is a web developer, React specialist.`,
    author: `@andreitelfer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -80,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
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
        name: `Andrei Telfer`,
        short_name: `telfer`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
