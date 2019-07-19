module.exports = {
  siteMetadata: {
    title: 'UserLAnd',
    description:
      'Get the full power of Linux on your Android. The easiest way to run a Linux distribution or application on Android. Download Now!',
    author: '@userlandtech',
    menu: [{ name: 'Jobs', route: '/jobs' }],
    siteMaintenance: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/userland-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: {
        generateScopedName: '[name]--[local]--[hash:base64:5]', // overrides default configuration
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss',
            plugins: ['postcss-nested'],
          },
        },
        exclude: '/global/',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
