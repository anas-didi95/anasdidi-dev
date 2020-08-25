import React from "react"
import { graphql } from "gatsby"
import { TagTemplateQuery } from "../graphqlTypes"
import AppLayout from "../layouts/AppLayout"

type TPageContext = {
  tag: string
}

const TagTemplate: React.FC<{ data: TagTemplateQuery, pageContext: TPageContext }> = ({ data, pageContext }) => {
  return (
    <AppLayout title={`Tag: ${pageContext.tag}`}>

    </AppLayout>
  )
}

export const PageQuery = graphql`
  query TagTemplate($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
        }
      }
    }
  }
`

export default TagTemplate
