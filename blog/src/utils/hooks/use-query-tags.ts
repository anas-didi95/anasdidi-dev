import { useStaticQuery, graphql } from "gatsby";

export const useQueryTags = (): string[] => {
  const data: Queries.TagsQuery = useStaticQuery(graphql`
    query Tags {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/articles/" } }
      ) {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
        }
      }
    }
  `);

  return data.allMarkdownRemark.group.map(val => val.tag ?? "");
};
