import React from "react"
import { graphql } from "gatsby"
import { TagTemplateQuery } from "../graphqlTypes"
import AppLayout from "../layouts/AppLayout"
import { useQueryTags } from "../utils/hooks/useQueryTags"
import TagList from "../components/TagList"
import * as Types from "../utils/types"
import { oc } from "ts-optchain"
import BlogList from "../components/BlogList"
import Separator from "../components/Separator"

type TPageContext = {
  tag: string
}

const TagTemplate: React.FC<{
  data: TagTemplateQuery
  pageContext: TPageContext
}> = ({ data, pageContext }) => {
  const tags = useQueryTags()

  const blogList: Types.Blog[] = oc(data)
    .allMarkdownRemark.edges([])
    .map(edge => ({
      title: oc(edge).node.frontmatter.title(""),
      author: oc(edge).node.frontmatter.author(""),
      date: oc(edge).node.frontmatter.date(""),
      description: oc(edge).node.frontmatter.description(""),
      tags: oc(edge).node.frontmatter.tags([]),
      excerpt: oc(edge).node.excerpt(""),
      slug: oc(edge).node.fields.slug(""),
    }))

  return (
    <AppLayout title={`Tag: ${pageContext.tag}`}>
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <TagList tags={tags} value={pageContext.tag} />
        </div>
        <div className="column" />
      </div>
      <Separator />
      <div className="columns">
        <div className="column" />
        <div className="column is-7">
          <BlogList blogList={blogList} />
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export const PageQuery = graphql`
  query TagTemplate($tag: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
`

export default TagTemplate
