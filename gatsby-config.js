const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  // import .env.development or .env.production based on environment
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_TITLE,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/images/favicon.svg',
      },
    },
  ],
};
