const _ = require("lodash");
const fs = require("fs-extra");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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
      const id = edge.node.id;
      if (edge.node.frontmatter.templateKey) {
        const lang = _.get(edge, "node.frontmatter.lang", "en");

        createPage({
          path: edge.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
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

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    const lang = _.get(node, "frontmatter.lang", "en");

    createNodeField({
      name: `slug`,
      node,
      // value: lang === "en" ? value : `/${lang}/`,
      value: `/${lang}/`,
      context: {
        lang,
      },
    });
  }
};
