import React from "react"
import { Maybe } from "../graphqlTypes"

const Tag: React.FC<{ value: Maybe<string> }> = ({ value }) => (
  <span className="tag is-primary mr-2">#{value}</span>
)

export default Tag
