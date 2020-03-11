var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
    enableIdentityWidget: false,
  },
}

module.exports = {
  siteMetadata: {
    // edit below
    title: `Gatsby Starter Personal Blog`,
    author: `Lucas Albano`,
    description: `A starter personal blog with styled components, dark mode, and Netlify CMS.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `lucasalbano`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    netlifyCmsPaths,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/cms/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          netlifyCmsPaths,
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // edit below
        icon: `static/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/cms/cms.js`,
        enableIdentityWidget: true,
      }
    },
    "gatsby-plugin-netlify"
  ],
}
