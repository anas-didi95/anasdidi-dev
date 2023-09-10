import React from "react"
import { HeadFC, PageProps, graphql } from "gatsby"

import AppLayout from "../layouts/app-layout"
import SEO from "../components/seo"
import Box from "../components/box"
import Tag from "../components/tag"

const TagsPage: React.FC<PageProps<Queries.TagsQuery>> = ({ data }) =>
(
  <AppLayout>
    <div className="columns is-centered">
      <div className="column is-6">
        <Box>
          <p className="title is-3 has-text-centered">Tags</p>
          <div className="tags are-medium is-centered">
            {data.allMarkdownRemark.group.map((val) => (
              <Tag key={`tag#${val.tag}`} value={val.tag ?? ""} isHighlighted={false} />
            ))}
          </div>
        </Box>
      </div>
    </div>
  </AppLayout>
)

export default TagsPage

export const Head: HeadFC = () => <SEO siteTitle="Tags" />

export const PageQuery = graphql`
query Tags {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/articles/"}}) {
    group(field: {frontmatter: {tags: SELECT}}) {
      tag: fieldValue
    }
  }
}
`
