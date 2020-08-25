/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    if (node.fileAbsolutePath.includes("content/blog")) {
      const value = "/blog" + createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
}
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const BlogTemplate = require.resolve(`./src/templates/BlogTemplate.tsx`)
  const TagTemplate = require.resolve(`./src/templates/TagTemplate.tsx`)

  const result = await graphql(`
    {
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
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
      tags: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.blogs.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: BlogTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
        next,
        previous,
      },
    })
  })

  result.data.tags.group.forEach(({ tag }) => {
    createPage({
      path: `/tags/${tag}`,
      component: TagTemplate,
      context: {
        tag: tag,
      },
    })
  })
}
