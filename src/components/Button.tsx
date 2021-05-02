import React from "react"
import { Link } from "gatsby"

interface IButton {
  type: "link"
  link?: string
  value: string
}
const Button: React.FC<IButton> = ({
  type,
  link,
  value,
}) => (
  <>
    {
      {
        link: (
          <Link to={link || ""} className="button is-primary is-rounded">
            {value}
          </Link>
        ),
        default: <div>Undefined type: {type}</div>,
      }[type]
    }
  </>
)

export default Button
