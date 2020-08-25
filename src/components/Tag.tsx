import React from "react"
import { Maybe } from "../graphqlTypes"

const Tag: React.FC<{ value: string; isHighlighted: boolean }> = ({
  value,
  isHighlighted,
}) => (
  <span
    className={`tag mb-2 mr-2 ${isHighlighted ? "is-primary" : "is-light"}`}>
    #{value}
  </span>
)

export default Tag
