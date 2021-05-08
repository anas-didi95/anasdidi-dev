import { useStaticQuery, graphql } from "gatsby"
import { TagsQuery } from "../../../graphql-types"

export const useQueryTags = (): string[] => {
  const data: TagsQuery = useStaticQuery(graphql`
    query Tags {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
      ) {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  return data.allMarkdownRemark.group.map(node => node.tag ?? "")
}
