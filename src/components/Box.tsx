import React, { ReactNode } from "react"

interface IBox {
  children: ReactNode
}
const Box: React.FC<IBox> = ({ children }) => (
  <div className="box px-6 py-5">{children}</div>
)

export default Box
