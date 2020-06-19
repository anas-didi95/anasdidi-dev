module.exports = {
  siteMetadata: {
    title: `Anas Juwaidi's Blog`,
    description: `My personal blog developed using Gatsby and TypeScript.`,
    author: `@anasdidi95`,
    fullname: "Anas Juwaidi Bin Mohd Jeffry",
    position: "Software Engineer",
    social: {
      email: "anas.didi95@gmail.com",
      github: "https://github.com/anas-didi95",
      linkedin: "https://www.linkedin.com/in/anas-juwaidi-mohd-jeffry",
      web: "https://anasdidi.dev/"
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-extract-schema`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 768,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/about-me`,
        name: `aboutMe`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
