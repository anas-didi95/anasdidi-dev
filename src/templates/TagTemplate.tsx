import React from "react"
import { graphql } from "gatsby"
import { TagTemplateQuery } from "../graphqlTypes"
import AppLayout from "../layouts/AppLayout"
import { useQueryTags } from "../utils/hooks/useQueryTags"
import TagList from "../components/TagList"

type TPageContext = {
  tag: string
}

const TagTemplate: React.FC<{
  data: TagTemplateQuery
  pageContext: TPageContext
}> = ({ data, pageContext }) => {
  const tags = useQueryTags()

  return (
    <AppLayout title={`Tag: ${pageContext.tag}`}>
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <TagList tags={tags} value={pageContext.tag} />
        </div>
      </div>
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
