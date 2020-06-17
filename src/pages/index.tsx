import React from "react"
import AppLayout from "../layouts/AppLayout"
import BlogList from "../components/BlogList"
import * as Types from "../utils/types"

const IndexPage: React.FC<{}> = () => {
  const blogList: Types.Blog[] = [
    {
      title: "Introduction to Algorithm: Insertion Sort",
      author: "Anas Juwaidi",
      date: "June 17, 2020",
      description:
        "Introduction to Insertion Sort, analysis and implementation on various programming languages.",
      tags: ["algorithm"],
    },
    {
      title: "Hello World",
      author: "Anas Juwaidi",
      date: "June 17, 2020",
      description: "Sample page to display Markdown rendering.",
      tags: ["markdown"],
    },
  ]

  return (
    <AppLayout description="Home page" title="Home">
      <div className="columns">
        <div className="column" />
        <div className="column is-6">
          <BlogList blogList={blogList} />
        </div>
        <div className="column" />
      </div>
    </AppLayout>
  )
}

export default IndexPage
