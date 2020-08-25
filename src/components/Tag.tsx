import React from "react"
import { Link } from "gatsby"

const Tag: React.FC<{ value: string; isHighlighted: boolean }> = ({
  value,
  isHighlighted,
}) => (
  <Link
    to={`/tags/${value}`}
    className={`tag mb-2 mr-2 ${isHighlighted ? "is-primary" : "is-light"}`}>
    #{value}
  </Link>
)

export default Tag
