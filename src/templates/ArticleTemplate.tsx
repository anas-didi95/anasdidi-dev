import React from "react"
import { graphql, Link } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import Tag from "../components/Tag"
import Icon from "../components/Icon"
import { TArticleNode } from "../utils/types"
import { ArticleTemplateQuery } from "../../graphql-types"

interface IArticleTemplate {
  data: ArticleTemplateQuery
  pageContext: { next?: TArticleNode, previous?: TArticleNode }
}
const ArticleTemplate: React.FC<IArticleTemplate> = ({ data, pageContext }) => {
  return (
    <AppLayout
      title={data.markdownRemark?.frontmatter?.title ?? ""}
      description={data.markdownRemark?.frontmatter?.description ?? ""}>
      <div className="columns is-centered">
        <div className="column is-8">
          <Box>
            <div className="has-text-centered">
              <p className="title is-3">
                {data.markdownRemark?.frontmatter?.title ?? ""}
              </p>
              <p className="subtitle is-6">
                <span className="is-italic">
                  {data.markdownRemark?.frontmatter?.date ?? ""}
                </span>
              </p>
              <div
                className="tags are-medium"
                style={{ justifyContent: "center" }}>
                {!!data.markdownRemark?.frontmatter?.tags && data.markdownRemark.frontmatter.tags.map((tag, i) => (
                  <Tag key={`tag${i}`} value={tag ?? ""} isHighlighted />
                ))}
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="columns is-centered mt-2 mb-6">
        <div className="column is-6">
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark?.html ?? ""
            }}
          />
        </div>
      </div>
      <_Pagination next={pageContext.next} previous={pageContext.previous} />
    </AppLayout>
  )
}

const _Pagination: React.FC<{ next?: TArticleNode, previous?: TArticleNode }> = ({ next, previous }) => (
  <div className="columns is-centered">
    <div className="column is-7">
      {next && (
        <div className="has-text-right">
          <Link
            className="has-text-primary has-text-weight-bold"
            to={next.fields.slug}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
              <span className="mr-2">
                {next.frontmatter.title}
              </span>
              <Icon type="next" />
            </div>
          </Link>
        </div>
      )}
      <br />
      {previous && (
        <div className="has-text-left">
          <Link
            className="has-text-primary has-text-weight-bold"
            to={previous.fields.slug}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon type="previous" />
              <span className="ml-2">
                {previous.frontmatter.title}
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  </div>
)

export const PageQuery = graphql`
  query ArticleTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
        author
        date(formatString: "YYYY, MMMM DD")
      }
      html
    }
  }
`

export default ArticleTemplate
