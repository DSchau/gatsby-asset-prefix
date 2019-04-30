module.exports = {
  assetPrefix: `https://gatsby-asset-prefix-cdn.netlify.com`,
  pathPrefix: `/blog`,
  siteMetadata: {
    siteUrl: `https://gatsby-asset-prefix.netlify.com`,
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                pages: allSitePage {
                  nodes {
                    path
                  }
                }
              }
            `,
            serialize({ query: { pages, site } }) {
              return pages.nodes.map(node => {
                return {
                  description: `yadda yadda`,
                  date: `10-05-2019`,
                  url: `${site.siteMetadata.siteUrl}${node.path}`
                }
              })
            },
            output: '/rss.xml'
          }
        ]
      }
    }
    // `gatsby-plugin-offline` // bye bye for nwo
  ],
}
