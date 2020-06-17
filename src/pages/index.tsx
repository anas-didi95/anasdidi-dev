import React from "react"
import AppLayout from "../layouts/AppLayout"
import BlogList from "../components/BlogList"
import * as Types from "../utils/types"
import { useStaticQuery, graphql } from "gatsby"
import { IndexQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"

const IndexPage: React.FC<{}> = () => {
  const data: IndexQuery = useStaticQuery(graphql`
    query Index {
      blogList: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              author
              date(formatString: "MMMM DD, YYYY")
              tags
            }
            excerpt
          }
        }
      }
    }
  `)

  const blogList: Types.Blog[] = oc(data)
    .blogList.edges([])
    .map(edge => ({
      title: oc(edge).node.frontmatter.title(""),
      author: oc(edge).node.frontmatter.author(""),
      date: oc(edge).node.frontmatter.date(""),
      description: oc(edge).node.frontmatter.description(""),
      tags: oc(edge).node.frontmatter.tags([]),
      excerpt: oc(edge).node.excerpt(""),
    }))

  return (
    <AppLayout description="Home page" title="Home">
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <BlogList blogList={blogList} />
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export default IndexPage
