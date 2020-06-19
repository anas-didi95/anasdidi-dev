import React from "react"
import { Link } from "gatsby"

const Button: React.FC<{ type: "link"; link?: string; value: string }> = ({
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
