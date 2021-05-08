/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createFilePath } = require("gatsby-source-filesystem")
  const { createNodeField } = actions

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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  await _createArticlePages(createPage, graphql, reporter)
  await _createTagPages(createPage, graphql, reporter)
}

_createArticlePages = async (createPage, graphql, reporter) => {
  const template = require.resolve(`./src/templates/ArticleTemplate.tsx`)
  const result = await graphql(`
    {
      articles: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
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
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`[_createArticlePages] Error while running GraphQL query.`, result.errors)
    return
  }

  result.data.articles.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
        next,
        previous,
      },
    })
  })
}

_createTagPages = async (createPage, graphql, reporter) => {
  const template = require.resolve(`./src/templates/TagTemplate.tsx`)
  const result = await graphql(`
    {
      tags: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`[_createTagPages] Error while running GraphQL query.`, result.errors)
    return
  }

  result.data.tags.group.forEach(({ tag }) => {
    createPage({
      path: `/tags/${tag}`,
      component: template,
      context: {
        tag: tag
      },
    })
  })
}
