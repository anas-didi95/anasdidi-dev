import React from "react"
import { graphql } from "gatsby"
import AppLayout from "../layouts/AppLayout"
import Box from "../components/Box"
import Tag from "../components/Tag"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import { ArticleTemplateQuery } from "../../graphql-types"
//import { BlogTemplateQuery } from "../graphqlTypes"
//import { oc } from "ts-optchain"
//import BlogPagination from "../components/BlogPagination"

type TPageContext = {
  next?: {
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
    }
  }
  previous?: {
    frontmatter: {
      title: string
    }
    fields: {
      slug: string
    }
  }
}

interface IArticleTemplate {
  data: ArticleTemplateQuery
}
const ArticleTemplate: React.FC<IArticleTemplate> = ({ data }) => {
  return (
    <AppLayout
      title={data.markdownRemark?.frontmatter?.title ?? ""}
      description={data.markdownRemark?.frontmatter?.description ?? ""}>
      <div className="columns">
        <div className="column" />
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
        <div className="column" />
      </div>
      <ResponsiveBreakpoint />
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark?.html ?? ""
            }}
          />
        </div>
        <div className="column" />
      </div>
      <ResponsiveBreakpoint />
      {/*<BlogPagination next={pageContext.next} previous={pageContext.previous} />*/}
    </AppLayout>
  )
}

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
