import React from "react"
import { HeadFC, graphql } from "gatsby"
import { TArticle } from "../utils/types"
import { useQueryTags } from "../utils/hooks/use-query-tags"

import AppLayout from "../layouts/app-layout"
import TagList from "../components/tag-list"
import ArticleList from "../components/article-list"
import Separator from "../components/separator"
import SEO from "../components/seo"

interface ITagTemplate {
  data: Queries.TagTemplateQuery
  pageContext: Queries.TagTemplateQueryVariables
}
const TagTemplate: React.FC<ITagTemplate> = ({ data, pageContext }) => {
  const tags = useQueryTags()
  const articles: TArticle[] = data.allMarkdownRemark.edges.map((edge) => ({
    author: edge.node.frontmatter?.author ?? "",
    date: edge.node.frontmatter?.date ?? "",
    description: edge.node.frontmatter?.description ?? "",
    excerpt: edge.node.excerpt ?? "",
    slug: edge.node.fields?.slug ?? "",
    title: edge.node.frontmatter?.title ?? "",
    tags: edge.node.frontmatter?.tags ?? [],
  }))

  return (
    <AppLayout>
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
          <ArticleList
            articles={articles}
            hasNextPage={false}
            hasPreviousPage={false}
          />
        </div>
      </div>
    </AppLayout>
  )
}


export default TagTemplate

export const Head: HeadFC<Queries.TagTemplateQuery, Queries.TagTemplateQueryVariables> = ({ pageContext }) => <SEO siteTitle={`Tag: ${pageContext.tag}`} />

export const PageQuery = graphql`
query TagTemplate($tag: String!) {
  allMarkdownRemark(
    limit: 1000
    sort: {frontmatter: {date: DESC}}
    filter: {fileAbsolutePath: {regex: "/content/articles/"}, frontmatter: {tags: {in: [$tag]}}}
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
