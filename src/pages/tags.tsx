import React from "react"
import AppLayout from "../layouts/AppLayout"
import { useStaticQuery, graphql } from "gatsby"
import Box from "../components/Box"
import { TagsPageQuery } from "../graphqlTypes"
import { oc } from "ts-optchain"
import Tag from "../components/Tag"
import { useQueryTags } from "../utils/hooks/useQueryTags"
import TagList from "../components/TagList"

const TagsPage: React.FC<{}> = () => {
  const tags = useQueryTags()

  return (
    <AppLayout title="Tags">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <TagList tags={tags} />
        </div>
      </div>
    </AppLayout>
  )
}

export default TagsPage
