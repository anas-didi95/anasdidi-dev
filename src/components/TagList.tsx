import React from "react"
import Box from "./Box"
import Tag from "./Tag"

const TagList: React.FC<{ tags: string[]; value?: string }> = ({
  tags,
  value,
}) => (
  <Box>
    <p className="title is-3 has-text-centered">Tags</p>
    <div className="tags are-medium has-text-centered">
      {tags.map(tag => (
        <Tag key={`tag#${tag}`} value={tag} isHighlighted={tag === value} />
      ))}
    </div>
  </Box>
)

export default TagList
