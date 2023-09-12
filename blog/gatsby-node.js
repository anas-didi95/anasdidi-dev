/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

//const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Create article pages
  const articleTemplate = path.resolve(`./src/templates/article-template.tsx`);
  const articleResult = await graphql(`
    query CreateArticlePage {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (articleResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      articleResult.errors
    );
    return;
  }

  articleResult.data.allMarkdownRemark.edges.forEach(
    ({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: {
          slug: node.fields.slug,
          next,
          previous,
        },
      });
    }
  );

  // Create tag pages
  const tagTemplate = path.resolve(`./src/templates/tag-template.tsx`);
  const tagResult = await graphql(`
    query CreateTagPage {
      tags: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
      ) {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
    }
  `);

  if (tagResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your tag pages`,
      tagResult.errors
    );
    return;
  }

  tagResult.data.tags.group.forEach(({ tag }) => {
    createPage({
      path: `/tags/${tag}`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    });
  });
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
