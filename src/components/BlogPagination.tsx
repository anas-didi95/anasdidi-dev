import React from "react"
import { Link } from "gatsby"
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr"

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
          <Link
            className="has-text-primary has-text-weight-bold"
            to={next.fields.slug}>
            {next.frontmatter.title} <GrCaretNext />
          </Link>
        </div>
      )}
      <br />
      {previous && (
        <div className="has-text-left">
          <Link
            className="has-text-primary has-text-weight-bold"
            to={previous.fields.slug}>
            <GrCaretPrevious /> {previous.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
    <div className="column" />
  </div>
)

export default BlogPagination
