import React from "react"
import { Link } from "gatsby"

interface ITag {
  value: string
  isHighlighted: boolean
}
const Tag: React.FC<ITag> = ({ value, isHighlighted }) => (
  <Link
    to={`/tags/${value}`}
    className={`tag mb-2 mr-2 ${isHighlighted ? "is-primary" : "is-light"}`}>
    #{value}
  </Link>
)

export default Tag
