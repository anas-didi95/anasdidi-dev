import React from "react"
import AppLayout from "../layouts/AppLayout"
import { useStaticQuery, graphql } from "gatsby"
import Box from "../components/Box"
import { TagsPageQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"
import Tag from "../components/Tag"

const TagsPage: React.FC<{}> = () => {
  const data: TagsPageQuery = useStaticQuery(graphql`
    query TagsPage {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  return (
    <AppLayout title="Tags">
      <div className="columns">
        <div className="column is-6 is-offset-3 has-text-centered">
          <Box>
            <p className="title is-3">Tags</p>
            <div className="tags are-medium has-text-centered">
              {oc(data)
                .allMarkdownRemark.group([])
                .map(node => (
                  <Tag
                    value={oc(node).tag("")}
                    isHighlighted={node.tag === "pgadmin"}
                  />
                ))}
            </div>
          </Box>
        </div>
      </div>
    </AppLayout>
  )
}

export default TagsPage
