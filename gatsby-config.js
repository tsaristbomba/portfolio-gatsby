require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `telfer`,
    description: `Andrei T. Ferreira is a JavaScript developer.`,
    author: `@andreitelfer`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: pathname =>
          pathname.match(/^\/elevated/) ? `use-credentials` : `anonymous`,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-image`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",

              inlineCodeMarker: null,

              aliases: {},

              showLineNumbers: false,

              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],

              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },

              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrei T. Ferreira`,
        short_name: `telfer`,
        background_color: "#2d2d2d",
        theme_color: "rgb(255, 24, 76)",
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
