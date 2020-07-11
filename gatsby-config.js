module.exports = {
  siteMetadata: {
    title: `SANS FABRIC`,
    description: `Textile Fabric Manufacturing and Exporting Company based in India.`,
    author: `Amit Nikam`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SANS FABRIC`,
        short_name: `SANS FABRIC`,
        description: `SANS FABRIC is an India based Textile Fabric Manufacturing and Exporting Company.`,
        lang: `en`,
        start_url: `/`,
        legacy: true,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        cache_busting_mode: `none`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
