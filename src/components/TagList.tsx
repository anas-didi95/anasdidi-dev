import React from "react"
import Box from "./Box"
import Tag from "./Tag"

interface ITagList {
  tags: string[]; value?: string
}
const TagList: React.FC<ITagList> = ({
  tags,
  value,
}) => (
  <Box>
    <p className="title is-3 has-text-centered">Tags</p>
    <div className="tags are-medium is-centered">
      {tags.map(tag => (
        <Tag key={`tag#${tag}`} value={tag} isHighlighted={tag === value} />
      ))}
    </div>
  </Box>
)

export default TagList
