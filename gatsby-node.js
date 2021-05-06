/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const { createFilePath } = require("gatsby-source-filesystem")

  if (node.internal.type === "MarkdownRemark") {
    if (node.fileAbsolutePath.includes("content/articles")) {
      const value = `${createFilePath({ node, getNode })}`

      createNodeField({
        node,
        value,
        name: "slug",
      })
    }
  }
}
