import React from "react"
import AppLayout from "../layouts/AppLayout"
import { graphql } from "gatsby"
import { BlogTemplateQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"
import Box from "../components/Box"
import Tag from "../components/Tag"
import ResponsiveBreakpoint from "../components/ResponsiveBreakpoint"
import BlogPagination from "../components/BlogPagination"

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

const BlogTemplate: React.FC<{
  data: BlogTemplateQuery
  pageContext: TPageContext
}> = ({ data, pageContext }) => (
  <AppLayout
    title={oc(data).markdownRemark.frontmatter.title("")}
    description={oc(data).markdownRemark.frontmatter.description("")}>
    <div className="columns">
      <div className="column" />
      <div className="column is-8">
        <Box>
          <div className="has-text-centered">
            <p className="title is-3">
              {oc(data).markdownRemark.frontmatter.title("")}
            </p>
            <p className="subtitle is-6">
              <span className="is-italic">
                {oc(data).markdownRemark.frontmatter.date("")}
              </span>
            </p>
            <div
              className="tags are-medium"
              style={{ justifyContent: "center" }}>
              {oc(data)
                .markdownRemark.frontmatter.tags([])
                .map((tag, i) => (
                  <Tag key={`tag${i}`} value={tag} />
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
            __html: oc(data).markdownRemark.html(""),
          }}
        />
      </div>
      <div className="column" />
    </div>
    <ResponsiveBreakpoint />
    <BlogPagination next={pageContext.next} previous={pageContext.previous} />
  </AppLayout>
)

export const PageQuery = graphql`
  query BlogTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        tags
        author
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`

export default BlogTemplate
