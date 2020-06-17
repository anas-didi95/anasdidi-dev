import React from "react"
import * as Types from "../utils/types"

const BlogList: React.FC<{ blogList: Types.Blog[] }> = ({ blogList }) => (
  <>
    {blogList.map((blog, i) => (
      <div key={`blog${i}`} className="box px-6 py-5">
        <p className="title is-4 mb-3">{blog.title}</p>
        <div className="mb-5">
          <div className="columns is-mobile">
            <div className="column">
              <p className="subtitle is-6 is-italic">{blog.author}</p>
            </div>
            <div className="column" />
            <div className="column">
              <p className="has-text-right subtitle is-6 is-italic">
                {blog.date}
              </p>
            </div>
          </div>
        </div>
        <p className="mb-5">{blog.description}</p>
        <br />
        <div className="tags are-medium">
          {blog.tags.map((tag, ii) => (
            <span key={`blog${i}tag${ii}`} className="tag is-primary mr-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
)

export default BlogList
