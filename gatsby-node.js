/* eslint-disable no-unused-vars */
const path = require('path');

const fs = require('fs-extra');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

const { languages } = require('./src/constants/languages');

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  // redirects on the home path (i.e. en/home) for cleaner path on home page (i.e. en/)
  languages.map((lang) => createRedirect({
    fromPath: `/${lang.langKey}/home`,
    toPath: `/${lang.langKey}/`,
    isPermanent: true,
    redirectInBrowser: true,
  }));

  /* creating each page */
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              lang
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // create a list of languages being used by seeing which language files are in src/locales
    const getLanguages = () => {
      const files = fs.readdirSync('./src/locales');
      return languages.filter((lang) => files.includes(lang.langKey));
    };

    const languageList = getLanguages(); // this language list is passed by page context below

    posts.forEach((edge) => {
      const { id } = edge.node;
      if (edge.node.frontmatter.templateKey) {
        const lang = _.get(edge, 'node.frontmatter.lang', 'en');

        // Check if the page is a localized 404 (i.e. /en/404/)
        if (edge.node.fields.slug.match(/^\/[a-z]{2}\/404\/$/)) {
          // Match all paths starting with the language code (apart from other valid paths)
          createPage({
            path: edge.node.fields.slug,
            matchPath: `/${lang}/*`,
            component: path.resolve('src/templates/404-page.jsx'),
            context: {
              id,
              lang,
              languageList,
            },
          });
        } else {
          // If page is not a localized 404 (i.e. /en/404/), create the page normally
          createPage({
            path: edge.node.fields.slug,
            component: path.resolve(
              `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`,
            ),
            context: {
              id,
              lang,
              languageList,
            },
          });
        }
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    const lang = _.get(node, 'frontmatter.lang', 'en');
    const slug = _.get(node, 'frontmatter.slug', 'landing');

    createNodeField({
      name: 'slug',
      node,
      value: slug === 'home' ? `/${lang}` : `/${lang}/${slug}/`, // gets rid of slug on the home page for cleaner look (i.e. en/home --> en/)
      context: {
        lang,
      },
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  });
};
