import React from "react"
import AppLayout from "../layouts/AppLayout"
//import { useQueryTags } from "../utils/hooks/useQueryTags"
//import TagList from "../components/TagList"

const TagsPage: React.FC<{}> = () => {
  //const tags = useQueryTags()

  return (
    <AppLayout title="Tags">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          {/*<TagList tags={tags} />*/}
        </div>
      </div>
    </AppLayout>
  )
}

export default TagsPage
