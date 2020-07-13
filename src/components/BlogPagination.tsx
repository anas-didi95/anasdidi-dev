import React from "react"
import Button from "./Button"

type TNode = {
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}

const BlogPagination: React.FC<{ next?: TNode; previous?: TNode }> = ({
  next,
  previous,
}) => (
  <div className="columns">
    <div className="column" />
    <div className="column is-7">
      {next && (
        <div className="has-text-right">
          <Button
            type="link"
            value={next.frontmatter.title + " >>"}
            link={next.fields.slug}
          />
        </div>
      )}
      <br />
      {previous && (
        <div className="has-text-left">
          <Button
            type="link"
            value={"<< " + previous.frontmatter.title}
            link={previous.fields.slug}
          />
        </div>
      )}
    </div>
    <div className="column" />
  </div>
)

export default BlogPagination
