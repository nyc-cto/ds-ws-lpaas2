/* eslint-disable no-unused-vars */
const path = require('path');

const fs = require('fs-extra');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');
// const { useTranslation } = require('react-i18next');

// const { i18next } = require('./src/components/i18n');
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

  // createRedirect({
  //   fromPath: '/404',
  //   toPath:
  // })

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

    posts.forEach((edge) => {
      const { id } = edge.node;
      if (edge.node.frontmatter.templateKey) {
        const lang = _.get(edge, 'node.frontmatter.lang', 'en');

        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`,
          ),
          context: {
            id,
            lang,
          },
        });
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
