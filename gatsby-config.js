require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'LPaaS 2.0',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-env-variables', // might not be needed
      options: {
        allowList: ['ENDPOINT'],
      },
    },
    {
      resolve: 'gatsby-source-custom-api', // might not be needed
      options: {
        endpoint: process.env.ENDPOINT,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
