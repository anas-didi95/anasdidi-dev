import React from "react"
import { Maybe } from "../graphqlTypes"

const Tag: React.FC<{ value: string; isHighlighted: boolean }> = ({
  value,
  isHighlighted,
}) => (
  <span className={`tag mr-2 ${isHighlighted ? "is-primary" : "is-light"}`}>
    #{value}
  </span>
)

export default Tag
