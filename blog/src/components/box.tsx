import React, { ReactNode } from "react";

interface IBox {
  children: ReactNode;
  height?: string;
}
const Box: React.FC<IBox> = ({ children, height }) => (
  <div className="box px-6 py-5" style={{ height: height }}>
    {children}
  </div>
);

export default Box;
