import React from "react"
import * as Types from "../utils/types"
import { Link } from "gatsby"
import Box from "./Box"
import Tag from "./Tag"
import { oc } from "ts-optchain"

const BlogList: React.FC<{ blogList: Types.Blog[] }> = ({ blogList }) => (
  <>
    {blogList.map((blog, i) => (
      <Box key={`blog${i}`}>
        <Link className="title is-3" to={blog.slug}>
          <p>{blog.title}</p>
        </Link>
        <div className="mb-5 mt-1">
          <div className="columns is-mobile">
            <div className="column">
              <p className="subtitle is-6 is-italic">{blog.date}</p>
            </div>
          </div>
        </div>
        <p className="mb-5">{blog.excerpt}</p>
        <div className="tags are-medium">
          {blog.tags.map((tag, ii) => (
            <Tag
              key={`blog${i}tag${ii}`}
              value={oc(tag)("")}
              isHighlighted={true}
            />
          ))}
        </div>
      </Box>
    ))}
  </>
)

export default BlogList
