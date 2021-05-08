import React from "react"
import { graphql } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import { useQueryTags } from "../utils/hooks/useQueryTags"
import TagList from "../components/TagList"
import { TagTemplateQuery, TagTemplateQueryVariables } from "../../graphql-types"
import { TArticle } from "../utils/types"
import ArticleList from "../components/ArticleList"
import Separator from "../components/Separator"

interface ITagTemplate {
  data: TagTemplateQuery
  pageContext: TagTemplateQueryVariables
}
const TagTemplate: React.FC<ITagTemplate> = ({ data, pageContext }) => {
  const tags = useQueryTags()
  const articles: TArticle[] = data.allMarkdownRemark.edges.map(edge => ({
    author: edge.node.frontmatter?.author ?? "",
    date: edge.node.frontmatter?.date ?? "",
    description: edge.node.frontmatter?.description ?? "",
    excerpt: edge.node.excerpt ?? "",
    slug: edge.node.fields?.slug ?? "",
    title: edge.node.frontmatter?.title ?? "",
    tags: edge.node.frontmatter?.tags ?? []
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
      <div className="columns is-centered">
        <div className="column is-10">
          <ArticleList articles={articles} hasNextPage={false} hasPreviousPage={false} />
        </div>
      </div>
    </AppLayout>
  )
}

export const PageQuery = graphql`
  query TagTemplate($tag: String!) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/articles/" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            author
            date(formatString: "YYYY, MMMM DD")
            tags
          }
          excerpt
        }
      }
    }
  }
`

export default TagTemplate
