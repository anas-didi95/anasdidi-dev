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
    const value = "/blog" + createFilePath({ node, getNode })
    console.log(value)
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const BlogTemplate = require.resolve(`./src/templates/BlogTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: BlogTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
      },
    })
  })
}
