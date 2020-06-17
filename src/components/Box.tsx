import React, { ReactNode } from "react"

const Box: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="box px-6 py-5">{children}</div>
)

export default Box
