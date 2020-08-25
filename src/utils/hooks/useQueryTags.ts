import { useStaticQuery, graphql } from "gatsby"
import { TagsQuery } from "../../graphqlTypes"
import { oc } from "ts-optchain"

export const useQueryTags = (): string[] => {
  const data: TagsQuery = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  return Array.from(
    oc(data)
      .allMarkdownRemark.group([])
      .map(node => (!!node.tag ? node.tag : ""))
      .values()
  )
}
