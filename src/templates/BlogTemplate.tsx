import React from "react"
import AppLayout from "../layouts/AppLayout"
import { graphql } from "gatsby"
import { BlogTemplateQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"

const BlogTemplate: React.FC<{ data: BlogTemplateQuery }> = ({ data }) => (
  <AppLayout
    title={oc(data).markdownRemark.frontmatter.title("")}
    description={oc(data).markdownRemark.frontmatter.description("")}>
    <div
      className="content"
      dangerouslySetInnerHTML={{
        __html: oc(data).markdownRemark.html(""),
      }}></div>
  </AppLayout>
)

const PageQuery = graphql`
  query BlogTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        slug
      }
      html
    }
  }
`

export default BlogTemplate
