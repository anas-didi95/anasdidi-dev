import React from "react"
import AppLayout from "../layouts/AppLayout"
import TagList from "../components/TagList"
import { useQueryTags } from "../utils/hooks/useQueryTags"

const TagsPage: React.FC<{}> = () => {
  const tags = useQueryTags()

  return (
    <AppLayout title="Tags">
      <div className="columns is-centered">
        <div className="column is-6">
          <TagList tags={tags} />
        </div>
      </div>
    </AppLayout>
  )
}

export default TagsPage
